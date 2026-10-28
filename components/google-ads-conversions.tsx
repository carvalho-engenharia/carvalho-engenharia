"use client"

import { useEffect } from "react"
import { EMAIL_EVENT, PHONE_CONVERSION, PHONE_EVENT, WHATSAPP_CONVERSION, trackEvent } from "@/lib/google-ads"

const WHATSAPP_PATTERNS = ["wa.me", "api.whatsapp.com", "whatsapp.com/send"]

// Origem da visita, anexada à mensagem do WhatsApp como " (ref. X)".
// Não guarda nenhum dado pessoal, apenas o código da origem.
const ORIGIN_KEY = "ce_origem"
const AI_REFERRERS = [
  "chatgpt.com",
  "chat.openai.com",
  "perplexity.ai",
  "gemini.google.com",
  "copilot.microsoft.com",
  "claude.ai",
]
const REF_SUFFIX = /\(ref\. [A-Z]+\)\s*$/

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function sendConversion(sendTo: string) {
  if (typeof window.gtag !== "function") return
  window.gtag("event", "conversion", { send_to: sendTo, transport_type: "beacon" })
}

function matchesHost(hostname: string, domain: string) {
  return hostname === domain || hostname.endsWith(`.${domain}`)
}

export function detectOrigin(search: string, referrer: string) {
  const params = new URLSearchParams(search)
  if (
    params.has("gclid") ||
    params.has("gbraid") ||
    params.has("wbraid") ||
    params.get("utm_medium")?.toLowerCase() === "cpc"
  ) {
    return "A"
  }
  // O link do Perfil da Empresa foi indexado com utm_source=google&utm_campaign=gbp: aceita os dois formatos.
  if (params.get("utm_source")?.toLowerCase() === "gbp" || params.get("utm_campaign")?.toLowerCase() === "gbp") return "P"

  let hostname = ""
  try {
    hostname = new URL(referrer).hostname.toLowerCase()
  } catch {}
  if (AI_REFERRERS.some((domain) => matchesHost(hostname, domain))) return "IA"
  if (/(^|\.)google\.[a-z.]+$/.test(hostname)) return "G"
  return "D"
}

// Fallback em memória caso o sessionStorage esteja indisponível.
let currentOrigin: string | null = null

function getOrigin() {
  try {
    const stored = sessionStorage.getItem(ORIGIN_KEY)
    if (stored) return stored
  } catch {}
  return currentOrigin
}

function initOrigin() {
  if (getOrigin()) return
  currentOrigin = detectOrigin(window.location.search, document.referrer)
  try {
    sessionStorage.setItem(ORIGIN_KEY, currentOrigin)
  } catch {}
}

function tagWhatsAppLink(link: HTMLAnchorElement, origin: string) {
  let url: URL
  try {
    url = new URL(link.href)
  } catch {
    return
  }
  const text = url.searchParams.get("text") ?? ""
  if (REF_SUFFIX.test(text)) return
  url.searchParams.set("text", `${text.trimEnd()} (ref. ${origin})`.trim())
  link.href = url.toString()
}

export function GoogleAdsConversions() {
  useEffect(() => {
    initOrigin()

    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return
      const link = e.target.closest("a")
      const href = link?.getAttribute("href")?.trim().toLowerCase()
      if (!link || !href) return

      if (WHATSAPP_PATTERNS.some((pattern) => href.includes(pattern))) {
        sendConversion(WHATSAPP_CONVERSION)
        const origin = getOrigin()
        if (origin) tagWhatsAppLink(link, origin)
      } else if (href.startsWith("tel:")) {
        sendConversion(PHONE_CONVERSION)
        // Evento para o GA4 (marcar como evento principal no painel). O WhatsApp continua vindo da regra do painel.
        trackEvent(PHONE_EVENT)
      } else if (href.startsWith("mailto:")) {
        trackEvent(EMAIL_EVENT)
      }
    }

    // Fase de captura: o clique é registrado mesmo que algum componente
    // chame stopPropagation() (ex.: modais).
    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [])

  return null
}
