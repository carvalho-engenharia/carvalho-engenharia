#!/usr/bin/env node
// Indexação do site: envia o sitemap ao Google Search Console, consulta o estado
// de cada URL na URL Inspection API e envia todas as URLs ao IndexNow (Bing etc.).
//
// Uso:
//   npm run indexar              # executa de verdade
//   npm run indexar -- --dry-run # só lista o que seria enviado, sem chamar APIs
//
// Variáveis de ambiente (podem ficar em um arquivo .env, ignorado pelo git):
//   GOOGLE_SERVICE_ACCOUNT_JSON  conteúdo do JSON da service account OU caminho do arquivo
//   GSC_SITE_URL                 propriedade do Search Console (ex.: sc-domain:carvalho-engenharia.com)
//   INDEXNOW_KEY                 chave IndexNow (precisa existir em public/<chave>.txt)
//   SITEMAP_URL                  opcional; padrão https://www.carvalho-engenharia.com/sitemap.xml
//
// Não usa a Google Indexing API: ela só aceita páginas com JobPosting ou BroadcastEvent.

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const DRY_RUN = process.argv.includes("--dry-run")

try {
  process.loadEnvFile(path.join(ROOT, ".env"))
} catch {
  // Sem .env: usa só as variáveis já definidas no ambiente
}

const SITEMAP_URL = process.env.SITEMAP_URL || "https://www.carvalho-engenharia.com/sitemap.xml"
const GSC_SITE_URL = process.env.GSC_SITE_URL
const INDEXNOW_KEY = process.env.INDEXNOW_KEY
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"

// Cota da URL Inspection API: no máximo 1 requisição por segundo
const MIN_INTERVAL_MS = 1000
const MAX_RETRIES = 5

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// ---------------------------------------------------------------------------
// 1. Sitemap
// ---------------------------------------------------------------------------

async function fetchSitemapUrls(sitemapUrl) {
  const res = await fetch(sitemapUrl)
  if (!res.ok) throw new Error(`Falha ao baixar o sitemap (${res.status}): ${sitemapUrl}`)
  const xml = await res.text()

  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => decodeXml(m[1]))

  // Âncoras (/#contato) não são páginas indexáveis: remove o fragmento e deduplica.
  // new URL() também iguala "https://site.com" e "https://site.com/".
  const unique = new Set(
    urls.map((u) => {
      const url = new URL(u)
      url.hash = ""
      return url.toString()
    }),
  )
  return [...unique]
}

function decodeXml(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
}

// Páginas de serviço primeiro, depois páginas institucionais, depois o blog
function priorityOf(url) {
  const { pathname } = new URL(url)
  if (/^\/[a-z0-9-]+-goiania\/?$/.test(pathname)) return { rank: 0, group: "serviço" }
  if (pathname.startsWith("/blog/")) return { rank: 2, group: "blog" }
  return { rank: 1, group: "página" }
}

function sortByPriority(urls) {
  return urls
    .map((url, i) => ({ url, i, ...priorityOf(url) }))
    .sort((a, b) => a.rank - b.rank || a.i - b.i)
}

// ---------------------------------------------------------------------------
// 2 e 3. Google Search Console
// ---------------------------------------------------------------------------

function loadServiceAccount() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!raw) throw new Error("Defina GOOGLE_SERVICE_ACCOUNT_JSON (conteúdo do JSON ou caminho do arquivo).")
  const json = raw.trim().startsWith("{") ? raw : fs.readFileSync(path.resolve(ROOT, raw), "utf8")
  return JSON.parse(json)
}

async function createSearchConsoleClient() {
  const { google } = await import("googleapis")
  const auth = new google.auth.GoogleAuth({
    credentials: loadServiceAccount(),
    scopes: ["https://www.googleapis.com/auth/webmasters"],
  })
  return google.searchconsole({ version: "v1", auth })
}

function httpStatusOf(err) {
  return err?.code ?? err?.response?.status ?? err?.status
}

// Garante o intervalo mínimo entre chamadas e repete em caso de 429 / 5xx
let lastCallAt = 0
async function rateLimited(fn) {
  for (let attempt = 1; ; attempt++) {
    const wait = lastCallAt + MIN_INTERVAL_MS - Date.now()
    if (wait > 0) await sleep(wait)
    lastCallAt = Date.now()

    try {
      return await fn()
    } catch (err) {
      const status = Number(httpStatusOf(err))
      const retryable = status === 429 || status >= 500
      if (!retryable || attempt >= MAX_RETRIES) throw err
      const backoff = 2 ** attempt * 1000
      console.warn(`  ↻ HTTP ${status}, nova tentativa em ${backoff / 1000}s (${attempt}/${MAX_RETRIES - 1})`)
      await sleep(backoff)
    }
  }
}

const COVERAGE_PT = {
  "Submitted and indexed": "indexada",
  "Indexed, not submitted in sitemap": "indexada (fora do sitemap)",
  "Discovered - currently not indexed": "detectada, mas não indexada",
  "Crawled - currently not indexed": "rastreada, mas não indexada",
  "URL is unknown to Google": "desconhecida pelo Google",
  "Duplicate, Google chose different canonical than user": "duplicada (Google escolheu outra canônica)",
  "Alternate page with proper canonical tag": "página alternativa (canônica correta)",
  "Page with redirect": "página com redirecionamento",
  "Excluded by ‘noindex’ tag": "excluída por noindex",
  "Not found (404)": "não encontrada (404)",
}

async function inspectUrl(searchconsole, url) {
  try {
    const res = await rateLimited(() =>
      searchconsole.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl: GSC_SITE_URL, languageCode: "pt-BR" },
      }),
    )
    const status = res.data.inspectionResult?.indexStatusResult ?? {}
    const coverage = status.coverageState ?? "sem informação"
    return {
      indexed: status.verdict === "PASS",
      status: COVERAGE_PT[coverage] ?? coverage,
      lastCrawl: status.lastCrawlTime ? status.lastCrawlTime.slice(0, 10) : "—",
    }
  } catch (err) {
    return { indexed: false, status: `erro: ${httpStatusOf(err) ?? ""} ${err.message}`.trim(), lastCrawl: "—" }
  }
}

// ---------------------------------------------------------------------------
// 4. IndexNow
// ---------------------------------------------------------------------------

function checkIndexNowKey() {
  if (!INDEXNOW_KEY) return { ok: false, reason: "INDEXNOW_KEY não definida" }
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(INDEXNOW_KEY)) {
    return { ok: false, reason: "INDEXNOW_KEY deve ter de 8 a 128 caracteres (letras, números ou hífen)" }
  }
  const keyFile = path.join(ROOT, "public", `${INDEXNOW_KEY}.txt`)
  if (!fs.existsSync(keyFile)) return { ok: false, reason: `arquivo public/${INDEXNOW_KEY}.txt não encontrado` }
  if (fs.readFileSync(keyFile, "utf8").trim() !== INDEXNOW_KEY) {
    return { ok: false, reason: `conteúdo de public/${INDEXNOW_KEY}.txt diferente da chave` }
  }
  return { ok: true }
}

// O IndexNow exige que todas as URLs de um envio sejam do mesmo host
function groupByHost(urls) {
  const groups = new Map()
  for (const url of urls) {
    const { host } = new URL(url)
    if (!groups.has(host)) groups.set(host, [])
    groups.get(host).push(url)
  }
  return groups
}

async function submitIndexNow(host, urls) {
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `https://${host}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  })
  return res.status
}

const INDEXNOW_STATUS = {
  200: "ok",
  202: "aceito (chave ainda em validação)",
  400: "requisição inválida",
  403: "chave inválida ou arquivo de chave inacessível",
  422: "URLs não pertencem ao host ou chave não confere",
  429: "muitas requisições, tente mais tarde",
}

// ---------------------------------------------------------------------------
// Saída
// ---------------------------------------------------------------------------

function printTable(rows, columns) {
  const widths = columns.map((c) => Math.max(c.label.length, ...rows.map((r) => String(r[c.key]).length)))
  const line = (cells) => cells.map((cell, i) => String(cell).padEnd(widths[i])).join("  ")
  console.log(line(columns.map((c) => c.label)))
  console.log(widths.map((w) => "-".repeat(w)).join("  "))
  for (const row of rows) console.log(line(columns.map((c) => row[c.key])))
}

// ---------------------------------------------------------------------------
// Execução
// ---------------------------------------------------------------------------

async function main() {
  console.log(`${DRY_RUN ? "[DRY-RUN] " : ""}Indexação de ${SITEMAP_URL}\n`)

  const entries = sortByPriority(await fetchSitemapUrls(SITEMAP_URL))
  const urls = entries.map((e) => e.url)
  console.log(`${urls.length} URLs no sitemap (âncoras e duplicadas removidas).\n`)

  const keyCheck = checkIndexNowKey()
  const hosts = groupByHost(urls)

  if (DRY_RUN) {
    printTable(
      entries.map((e, i) => ({ n: i + 1, group: e.group, url: e.url })),
      [
        { key: "n", label: "#" },
        { key: "group", label: "Tipo" },
        { key: "url", label: "URL" },
      ],
    )
    console.log("\nO que seria enviado:")
    console.log(`  • Search Console  sitemaps.submit  propriedade=${GSC_SITE_URL ?? "(GSC_SITE_URL não definida)"}  sitemap=${SITEMAP_URL}`)
    console.log(`  • Search Console  urlInspection    ${urls.length} consultas, 1 por segundo (~${Math.ceil(urls.length / 60)} min)`)
    for (const [host, list] of hosts) {
      console.log(`  • IndexNow        ${INDEXNOW_ENDPOINT}  host=${host}  ${list.length} URLs  keyLocation=https://${host}/${INDEXNOW_KEY ?? "<chave>"}.txt`)
    }
    console.log(`  • Chave IndexNow: ${keyCheck.ok ? "ok" : `PROBLEMA: ${keyCheck.reason}`}`)
    console.log(`  • Service account: ${process.env.GOOGLE_SERVICE_ACCOUNT_JSON ? "definida" : "não definida"}`)
    console.log("\nNenhuma API foi chamada (--dry-run).")
    return
  }

  if (!GSC_SITE_URL) throw new Error("Defina GSC_SITE_URL (ex.: sc-domain:carvalho-engenharia.com).")
  const searchconsole = await createSearchConsoleClient()

  // 2. Sitemap no Search Console
  console.log(`Enviando sitemap ao Search Console (${GSC_SITE_URL})...`)
  try {
    await rateLimited(() => searchconsole.sitemaps.submit({ siteUrl: GSC_SITE_URL, feedpath: SITEMAP_URL }))
    console.log("  ✓ Sitemap enviado.\n")
  } catch (err) {
    console.error(`  ✗ Falha ao enviar o sitemap: ${httpStatusOf(err) ?? ""} ${err.message}\n`)
  }

  // 3. Estado de cada URL
  console.log(`Consultando ${urls.length} URLs na URL Inspection API (1 por segundo)...`)
  const results = []
  for (const [i, entry] of entries.entries()) {
    const result = await inspectUrl(searchconsole, entry.url)
    results.push({ ...entry, ...result })
    process.stdout.write(`  ${i + 1}/${urls.length} ${result.indexed ? "✓" : "·"} ${entry.url}\n`)
  }
  console.log()

  // 4. IndexNow
  if (keyCheck.ok) {
    for (const [host, list] of hosts) {
      const status = await submitIndexNow(host, list)
      console.log(`IndexNow (${host}, ${list.length} URLs): HTTP ${status} ${INDEXNOW_STATUS[status] ?? ""}`)
    }
  } else {
    console.log(`IndexNow não enviado: ${keyCheck.reason}`)
  }

  // 5. Relatório
  console.log("\nEstado no Google:\n")
  printTable(results, [
    { key: "url", label: "URL" },
    { key: "status", label: "Status" },
    { key: "lastCrawl", label: "Último rastreio" },
  ])

  const pending = results.filter((r) => !r.indexed)
  console.log(`\nIndexadas: ${results.length - pending.length} de ${results.length}.`)
  if (pending.length > 0) {
    console.log("\nAinda não indexadas, em ordem de prioridade (solicite em Search Console → Inspeção de URL):\n")
    pending.forEach((r, i) => console.log(`  ${i + 1}. [${r.group}] ${r.url}  — ${r.status}`))
  }
}

main().catch((err) => {
  console.error(`\nErro: ${err.message}`)
  process.exit(1)
})
