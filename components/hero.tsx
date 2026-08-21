'use client'

import { useState, useEffect } from "react"
import { ClipboardList, FileCheck2, Ruler, PencilRuler, CheckCircle2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const BlueprintBackground = dynamic(
  () => import("@/components/blueprint-background").then(m => m.BlueprintBackground),
  { ssr: false }
)

// Ordem alinhada à prioridade de busca confirmada no Google Keyword Planner:
// Alto (5.000/mês): 1) Regularização de Imóveis, 2) Despachante Imobiliário, 3) INSS de Obra,
// 4) Avaliador de Imóvel, 5) Gerenciamento de Projetos, 6) Averbação de Imóvel,
// 7) Projeto Estrutural, 8) Projeto Arquitetônico
// Médio (500/mês): 9) Gerenciamento de Obra, 10) Consultoria em Engenharia Civil, 11) Emissão de ART
// Baixo (50/mês): 12) Vistoria Técnica de Imóvel, 13) Alvará de Construção e Habite-se,
// 14) Desmembramento e Remembramento

const CYCLING_PREFIXES = [
  "Seu imóvel está",
  "Cansado de burocracia em",
  "Receita Federal cobrando o",
  "Precisa de um",
  "Quer o",
  "Quer vender ou financiar mas falta a",
  "Precisa de um",
  "Quer construir e ainda não tem o",
  "Sua obra está",
  "Tem dúvida técnica sobre a",
  "Precisa de",
  "Vai receber as chaves e quer uma",
  "Construiu sem",
  "Precisa dividir ou unificar um",
]

const CYCLING_SUBTITLES = [
  "irregular na prefeitura?",
  "cartório e prefeitura?",
  "INSS da obra?",
  "Laudo de Avaliação de Imóvel?",
  "projeto todo compatibilizado e no prazo?",
  "averbação do imóvel?",
  "projeto estrutural seguro e econômico?",
  "projeto arquitetônico?",
  "sem controle de cronograma e custo?",
  "viabilidade da sua obra?",
  "ART com urgência?",
  "vistoria técnica antes?",
  "alvará de construção?",
  "terreno ou lote?",
]

const CYCLING_RESOLUTIONS = [
  "Regularizamos a documentação e iniciamos em 1 dia útil após o contrato.",
  "Cuidamos de toda a tramitação para você — início em 1 dia útil.",
  "Emitimos CNO, CND e SERO — início em 1 dia útil após o contrato.",
  "Emitimos o laudo assinado por engenheiro CREA para banco, inventário ou partilha.",
  "Gerenciamos cada etapa do projeto até a aprovação final.",
  "Atualizamos a matrícula no cartório para liberar a venda ou o financiamento.",
  "Elaboramos o cálculo estrutural completo, pronto para aprovação.",
  "Criamos o projeto completo, do croqui à planta aprovada.",
  "Assumimos a gestão técnica e a fiscalização até a entrega.",
  "Damos o parecer técnico que você precisa para decidir com segurança.",
  "Emitimos a ART em até 1 dia útil, com responsabilidade técnica CREA.",
  "Fazemos a inspeção completa e o laudo de patologias em poucos dias.",
  "Regularizamos com alvará retroativo — início em 1 dia útil após assinar.",
  "Fazemos o desmembramento ou remembramento junto à prefeitura e ao cartório.",
]

const HERO_STATS = [
  { value: "10+", label: "anos de experiência" },
  { value: "800+", label: "obras regularizadas" },
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
            Regularização de Imóveis, Despachante Imobiliário, INSS de Obra e
            Avaliação de Imóveis em{" "}
            <span className="text-[#1d283a] font-semibold">Goiânia, Aparecida de Goiânia, Anápolis e região</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
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

        {/* Linha de confiança — preço e velocidade em destaque, logo abaixo do CTA */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#5a687c] mb-14">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
            Orçamento grátis em até 24h
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
            A partir de <span className="font-semibold text-[#1d283a]">R$ 500</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
            Início em <span className="font-semibold text-[#1d283a]">1 dia útil</span>
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

        {/* Depoimento em destaque — prova social real, logo após as estatísticas */}
        <div className="max-w-2xl mx-auto mb-16 px-6 py-6 rounded-2xl bg-white border border-[#e0e5eb] shadow-[0_2px_10px_rgba(29,40,58,0.05)] text-left">
          <div className="flex gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-[#3d4c5f] text-sm leading-relaxed mb-4">
            "Quero registrar minha satisfação com a Carvalho Engenharia. O atendimento do engenheiro Caio tem sido muito atencioso e profissional desde o início. Sempre esclarece minhas dúvidas e transmite segurança durante todo o processo de regularização do imóvel. Recomendo pelo comprometimento, organização e excelente atendimento."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EA4335] flex items-center justify-center text-white text-xs font-semibold shrink-0">
              LC
            </div>
            <div>
              <p className="text-[#1d283a] font-medium text-sm">Luana Cristina</p>
              <p className="text-[#5a687c] text-xs">Avaliação no Google</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 max-w-4xl mx-auto">
          {[
            { icon: ClipboardList, label: "Gerenciamento de Projetos" },
            { icon: FileCheck2, label: "Averbação de Imóvel" },
            { icon: Ruler, label: "Projeto Estrutural" },
            { icon: PencilRuler, label: "Projeto Arquitetônico" },
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
