'use client'

import { useState, useEffect } from "react"
import { Users, Server, Shield, Wifi, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const ParticlesBackground = dynamic(
  () => import("@/components/particles-background").then(m => m.ParticlesBackground),
  { ssr: false }
)

const CYCLING_SUBTITLES = [
  "Suporte que responde em minutos, não horas.",
  "Seus dados protegidos contra ransomware e invasões.",
  "Servidor novo instalado sem parar sua operação.",
  "Wi-Fi corporativo sem ponto cego, sem queda.",
  "Backup e recuperação antes que o prejuízo chegue.",
  "Firewall gerenciado para quem não pode correr risco.",
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

  return { displayed }
}

export function Hero() {
  const { displayed } = useCyclingTypewriter(CYCLING_SUBTITLES)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,170,255,0.08)_0%,transparent_60%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="px-4 py-1.5 rounded-full border border-[#00aaff]/30 bg-[#00aaff]/5 backdrop-blur-md flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#33bbff] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#00aaff] font-semibold">Monitoramento Ativo 24/7</span>
          </div>
          <div className="px-4 py-1.5 rounded-full border border-[#fafafa]/10 bg-[#fafafa]/5 backdrop-blur-md flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-[#00aaff]" />
            <span className="text-[10px] uppercase tracking-widest text-[#888888] font-semibold">Suporte Sênior em Goiânia</span>
          </div>
        </div>

        {/* Título fixo */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#fafafa] mb-6 tracking-tight leading-[1.15]">
          TI que não te{" "}
          <span className="text-[#00aaff]">deixa na mão.</span>
        </h1>

        {/* Subtítulo dinâmico */}
        <div className="min-h-[3.5rem] md:min-h-[2rem] flex items-center justify-center mb-10">
          <p className="text-[#888888] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            <span className="text-[#fafafa]">{displayed}</span>
            <span
              className="inline-block w-[2px] h-[1em] bg-[#00aaff] ml-0.5 align-middle animate-[blink_1s_steps(1)_infinite]"
              aria-hidden="true"
            />
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-6 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.35)] gap-2"
          >
            <a href="https://wa.me/5562998062169" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
              <img src="/WhatsApp.svg" alt="" aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
              Falar no WhatsApp
            </a>
          </Button>
          <Button
            asChild
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
            }}
            className="text-[#fafafa] px-8 py-6 rounded-xl transition-all hover:brightness-125"
          >
            <a href="#servicos">Ver Serviços</a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pt-8 border-t border-[#1a1a1a]">
          {[
            { icon: Users, label: "Terceirização de TI" },
            { icon: Server, label: "Suporte a Redes e Servidores" },
            { icon: Shield, label: "Segurança e Firewall" },
            { icon: Wifi, label: "Wi-Fi Corporativo" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-full bg-[#111111] flex items-center justify-center border border-[#222222] group-hover:border-[#00aaff]/50 transition-colors">
                <item.icon className="w-7 h-7 text-[#00aaff]" />
              </div>
              <span className="text-xs font-semibold text-[#aad4f5] group-hover:text-[#fafafa] transition-colors text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
