'use client'

import { useState, useEffect } from "react"
import { FileText, Home, Building2, Search, CheckCircle2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const BlueprintBackground = dynamic(
  () => import("@/components/blueprint-background").then(m => m.BlueprintBackground),
  { ssr: false }
)

const CYCLING_SUBTITLES = [
  "da escritura?",
  "não tem Habite-se?",
  "banco bloqueou?",
  "Alvará de Funcionamento?",
  "alvará de construção?",
  "obra embargada?",
  "INSS da obra?",
  "Alvará Sanitário?",
  "não terminou seu alvará?",
]

const CYCLING_PREFIXES = [
  "Obra diferente",
  "Seu imóvel ainda",
  "Quer vender ou financiar mas o",
  "Sua empresa está sem",
  "Construiu sem",
  "Recebeu notificação de",
  "Receita Federal cobrando o",
  "Precisa do",
  "Outro profissional começou e",
]

const CYCLING_RESOLUTIONS = [
  "Regularizamos a documentação e iniciamos em 1 dia útil após o contrato.",
  "Emitimos o Habite-se — início do processo em 1 dia útil após o contrato.",
  "Resolvemos a pendência que trava o banco — começamos em 1 dia útil.",
  "Emitimos o Alvará de Funcionamento — protocolo em 1 dia útil após o contrato.",
  "Regularizamos com alvará retroativo — início em 1 dia útil após assinar.",
  "Revertemos o embargo e reabrimos seu processo em 1 dia útil.",
  "Emitimos CNO, CND e SERO — início em 1 dia útil após o contrato.",
  "Cuidamos do licenciamento sanitário — protocolo em 1 dia útil.",
  "Assumimos de onde parou — retomada em 1 dia útil após o contrato.",
]

const HERO_STATS = [
  { value: "10+", label: "anos de experiência" },
  { value: "500+", label: "obras regularizadas" },
  { value: "3-12", label: "meses, prazo médio" },
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

        <div className="flex items-center justify-center gap-2 mb-12">
          <ShieldCheck className="w-3.5 h-3.5 text-[#066bef]" />
          <span className="text-xs text-[#5a687c]">
            <span className="font-semibold text-[#1d283a]">Caio Maracaípe</span> · Engenheiro Civil responsável pelo processo · CREA 1017786453D-GO
          </span>
        </div>

        {/* Título dinâmico */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#1d283a] mb-6 tracking-tight leading-[1.15]">
          {CYCLING_PREFIXES[phraseIndex]}{" "}
          <br />
          <span className="text-[#066bef]">{displayed}</span>
          <span
            className="inline-block w-[4px] h-[0.85em] bg-[#066bef] ml-1 align-middle animate-[blink_1s_steps(1)_infinite]"
            aria-hidden="true"
          />
        </h1>

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
            Alvará de Construção, Habite-se, Regularização de Obras e Projetos de
            Engenharia em{" "}
            <span className="text-[#1d283a] font-semibold">Goiânia, Aparecida de Goiânia, Anápolis e região</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button
            asChild
            className="bg-[#066bef] hover:bg-[#0559c7] text-white font-bold px-8 py-6 rounded-xl transition-colors shadow-[0_4px_14px_rgba(6,107,239,0.18)] gap-2"
          >
            <a href="https://wa.me/5562998062169" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
              Solicitar Orçamento Grátis →
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
            { icon: FileText, label: "Alvará & Habite-se" },
            { icon: Home, label: "Regularização de Obras" },
            { icon: Building2, label: "Projetos de Engenharia" },
            { icon: Search, label: "Perícias e Laudos" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2.5">
              <item.icon className="w-6 h-6 text-[#8a94a3]" strokeWidth={1.5} />
              <span className="text-xs font-medium text-[#8a94a3] text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
