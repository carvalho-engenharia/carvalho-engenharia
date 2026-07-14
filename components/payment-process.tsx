"use client"

import { Ruler, FileStack, BadgeCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Levantamento e Croqui",
    payment: "1ª parte do pagamento",
    description:
      "Visitamos o local, fazemos a medição e elaboramos o croqui do projeto. É aqui que tudo começa a sair do papel.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Protocolo na Prefeitura",
    payment: "2ª parte do pagamento",
    description:
      "Organizamos toda a documentação exigida e damos entrada no processo junto à Prefeitura. Você não precisa entender de burocracia — a gente entende por você.",
    icon: FileStack,
  },
  {
    number: "03",
    title: "Alvará Aprovado",
    payment: "3ª e última parte — só aqui",
    description:
      "Acompanhamos o processo até a aprovação final. Você só paga essa etapa quando o alvará estiver, de fato, em suas mãos.",
    icon: BadgeCheck,
  },
]

export function PaymentProcess() {
  return (
    <section
      id="como-funciona"
      className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-[#111111]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[500px] rounded-full bg-[#00aaff]/4 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00aaff]/30 bg-[#00aaff]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#00aaff] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#00aaff] font-semibold font-mono">
              // como funciona
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 tracking-tight text-balance">
            Você paga pelo que{" "}
            <span className="text-[#00aaff]">já foi entregue</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto text-lg text-balance">
            Dividimos o processo em 3 etapas, com pagamento vinculado a cada entrega. Nada de pagar tudo adiantado e
            torcer para o alvará sair — o risco é compartilhado com a gente.
          </p>
        </div>

        {/* Highlight badge */}
        <div className="mx-auto mb-14 flex max-w-xl items-center justify-center gap-2 rounded-full border border-[#00aaff]/30 bg-[#00aaff]/5 px-5 py-2.5 text-center backdrop-blur-md">
          <BadgeCheck className="h-4 w-4 shrink-0 text-[#00aaff]" />
          <span className="text-sm font-medium text-[#fafafa]">
            A última parcela só é cobrada quando o seu alvará é aprovado.
          </span>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative p-8 rounded-2xl bg-[#0a0a0a]/60 border border-[#1a1a1a] hover:border-[#00aaff]/40 hover:shadow-[0_0_30px_rgba(0,170,255,0.07)] transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#00aaff]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#00aaff]/30 transition-all duration-500">
                  <step.icon className="w-6 h-6 text-[#00aaff]" />
                </div>

                <span className="font-mono text-xs font-semibold text-[#00aaff] mb-2">{step.number}</span>
                <h3 className="text-lg font-bold text-[#fafafa] mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#888888] group-hover:text-[#aaaaaa] transition-colors mb-5">
                  {step.description}
                </p>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00aaff]/10 border border-[#00aaff]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#00aaff]">
                  {step.payment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/5562998062169?text=Ol%C3%A1%2C%20quero%20entender%20como%20funciona%20o%20pagamento%20por%20etapa%20da%20Carvalho%20Engenharia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#00aaff] text-[#080808] font-bold text-sm hover:bg-[#33bbff] transition-all duration-300 shadow-[0_0_30px_rgba(0,170,255,0.4)] hover:shadow-[0_0_45px_rgba(0,170,255,0.6)]"
          >
            Quero saber mais sobre esse modelo
          </a>
        </div>
      </div>
    </section>
  )
}
