'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { ClipboardList, FileCheck2, Briefcase, CheckCircle2, ShieldCheck, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const BlueprintBackground = dynamic(
  () => import("@/components/blueprint-background").then(m => m.BlueprintBackground),
  { ssr: false }
)

// Frases rotativas do topo: só situações ligadas à regularização de imóveis,
// que é o tema da home e dos anúncios. Os demais serviços têm páginas próprias.

const CYCLING_PREFIXES = [
  "Seu imóvel está",
  "Recebeu notificação de",
  "Cansado de burocracia em",
  "Receita Federal cobrando o",
  "Quer vender ou financiar mas falta a",
  "Construiu sem",
  "Precisa dividir ou unificar um",
]

const CYCLING_SUBTITLES = [
  "irregular na prefeitura?",
  "embargo por ter ampliado?",
  "cartório e prefeitura?",
  "INSS da obra?",
  "averbação do imóvel?",
  "alvará de construção?",
  "terreno ou lote?",
]

const CYCLING_RESOLUTIONS = [
  "Regularizamos a documentação e iniciamos em 1 dia útil após o contrato.",
  "Regularizamos a ampliação na Prefeitura e pedimos a liberação da obra.",
  "Cuidamos de toda a tramitação para você — início em 1 dia útil.",
  "Emitimos CNO, CND e SERO — início em 1 dia útil após o contrato.",
  "Atualizamos a matrícula no cartório para liberar a venda ou o financiamento.",
  "Regularizamos com alvará retroativo — início em 1 dia útil após assinar.",
  "Fazemos o desmembramento ou remembramento junto à prefeitura e ao cartório.",
]

const WHATSAPP_ORCAMENTO =
  "https://api.whatsapp.com/send?phone=5562998062169&text=Olá,+Caio!+Acessei+o+site+da+Carvalho+Engenharia+e+preciso+de+ajuda+com+a+regularização+do+meu+imóvel"

const HERO_STATS = [
  { value: "10+", label: "anos de experiência" },
  { value: "900+", label: "obras regularizadas" },
  { value: "1 dia útil", label: "início após contrato" },
  { value: "CREA", label: "responsabilidade técnica" },
]

function useCyclingTypewriter(phrases: string[], typeSpeed = 55, deleteSpeed = 28, pauseMs = 2600) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPausing, setIsPausing] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    if (isPausing) {
      const t = setTimeout(() => {
        setIsPausing(false)
        setIsDeleting(true)
      }, pauseMs)
      return () => clearTimeout(t)
    }

    if (!isDeleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typeSpeed)
        return () => clearTimeout(t)
      } else {
        setIsPausing(true)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed)
        return () => clearTimeout(t)
      } else {
        setIsDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      }
    }
  }, [displayed, isDeleting, isPausing, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseMs])

  return { displayed, phraseIndex }
}

export function Hero() {
  const { displayed, phraseIndex } = useCyclingTypewriter(CYCLING_SUBTITLES)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 lg:pt-32 overflow-hidden bg-[#f9fafb]">
      <BlueprintBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Foto do Caio + selo CREA — credibilidade visual imediata */}
        <div className="flex justify-center mb-6">
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "9999px",
              overflow: "hidden",
              border: "2px solid rgba(6,107,239,0.35)",
              boxShadow: "0 0 40px rgba(6,107,239,0.18)",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <img
              src="/caio.jpg"
              alt="Caio Maracaípe — Engenheiro Civil, CREA 1017786453D-GO"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Ícone inline no texto: acompanha a primeira linha mesmo quando o texto quebra no celular */}
        <p className="text-xs text-[#5a687c] mb-7 sm:mb-12 max-w-2xl mx-auto text-balance">
          <ShieldCheck className="inline-block w-3.5 h-3.5 text-[#066bef] mr-1.5 align-[-2px]" />
          <span className="font-semibold text-[#1d283a]">Caio Maracaípe</span> · Engenheiro Civil responsável pelo processo · CREA 1017786453D-GO
        </p>

        {/* H1 estático — fixo para SEO, independente da rotação de texto abaixo */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#1d283a] mb-5 tracking-tight leading-[1.15] text-balance">
          Imóvel Irregular em Goiânia?{" "}
          <span className="text-[#066bef]">Nós Resolvemos.</span>
        </h1>

        {/* Faixa de prova social — credibilidade imediata, logo abaixo do H1 */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#066bef]/30 bg-[#066bef]/5 backdrop-blur-md">
            <Landmark className="w-4 h-4 text-[#066bef] flex-shrink-0" />
            <span className="text-sm font-semibold text-[#1d283a]">
              Mais de 900 imóveis regularizados e aprovados na Prefeitura de Goiânia.
            </span>
          </div>
        </div>

        {/* Botão de orçamento antecipado — só no celular, para aparecer na primeira tela */}
        <div className="flex justify-center mb-8 sm:hidden">
          <Button
            asChild
            className="bg-[#066bef] hover:bg-[#0559c7] text-white font-bold px-8 py-6 rounded-xl transition-colors shadow-[0_4px_14px_rgba(6,107,239,0.18)] gap-2"
          >
            <a href={WHATSAPP_ORCAMENTO} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
              Solicitar Orçamento →
            </a>
          </Button>
        </div>

        {/* Frase rotativa — mantém a animação existente, agora como apoio (não é mais o H1) */}
        <p className="text-2xl md:text-3xl font-bold text-[#1d283a] mb-6 tracking-tight leading-snug">
          {CYCLING_PREFIXES[phraseIndex]}{" "}
          <span className="text-[#066bef]">{displayed}</span>
          <span
            className="inline-block w-[3px] h-[0.8em] bg-[#066bef] ml-1 align-middle animate-[blink_1s_steps(1)_infinite]"
            aria-hidden="true"
          />
        </p>

        {/* Resolução rápida */}
        <p
          key={phraseIndex}
          className="flex items-center justify-center gap-2 text-sm md:text-base text-[#16a34a] font-medium mb-6 px-4 animate-[fadeIn_0.6s_ease-out]"
        >
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          {CYCLING_RESOLUTIONS[phraseIndex]}
        </p>

        {/* Subtítulo fixo */}
        <div className="min-h-[3.5rem] md:min-h-[2rem] flex items-center justify-center mb-10">
          <p className="text-[#5a687c] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Sou Caio Maracaípe, Engenheiro Civil. Da burocracia na Prefeitura à
            averbação no Cartório, a Carvalho Engenharia regulariza seu patrimônio
            com rapidez e segurança.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button
            asChild
            className="hidden sm:inline-flex bg-[#066bef] hover:bg-[#0559c7] text-white font-bold px-8 py-6 rounded-xl transition-colors shadow-[0_4px_14px_rgba(6,107,239,0.18)] gap-2"
          >
            <a href={WHATSAPP_ORCAMENTO} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
              Solicitar Orçamento →
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-[#1d283a] px-8 py-6 rounded-xl hover:bg-[#1d283a]/[0.04]"
          >
            <a href="#servicos">Ver Serviços</a>
          </Button>
        </div>

        {/* Linha de confiança — preço e velocidade em destaque, logo abaixo do CTA */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#5a687c] mb-14">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
            Escritório particular de engenharia
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
            A partir de <span className="font-semibold text-[#1d283a]">R$ 2.000</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
            Início em <span className="font-semibold text-[#1d283a]">1 dia útil</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
            <span>
              <span className="font-semibold text-[#1d283a]">Boleto em até 6x</span> ou cartão de crédito
            </span>
          </span>
        </div>

        {/* Barra de estatísticas — prova social imediata */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-16">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#e0e5eb] rounded-xl px-4 py-5 bg-white shadow-[0_2px_10px_rgba(29,40,58,0.05)]"
            >
              <p className="text-2xl font-bold text-[#066bef] mb-0.5">{stat.value}</p>
              <p className="text-[#5a687c] text-[11px] uppercase tracking-wide leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 max-w-4xl mx-auto">
          {[
            { icon: ClipboardList, label: "Regularização de Imóveis", href: "/regularizacao-de-imoveis-goiania" },
            { icon: Briefcase, label: "Despachante Imobiliário", href: "/despachante-imobiliario-goiania" },
            { icon: Landmark, label: "INSS de Obra", href: "/inss-de-obra-goiania" },
            { icon: FileCheck2, label: "Averbação de Imóvel", href: "/averbacao-de-imovel-goiania" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center gap-2.5 rounded-lg py-2 focus-visible:outline-2 focus-visible:outline-[#066bef]"
            >
              <item.icon className="w-6 h-6 text-[#8a94a3] group-hover:text-[#066bef] transition-colors" strokeWidth={1.5} />
              <span className="text-xs font-medium text-[#5a687c] group-hover:text-[#066bef] transition-colors text-center leading-tight">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
