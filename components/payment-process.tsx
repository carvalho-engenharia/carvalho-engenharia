"use client"

import { Ruler, FileStack, BadgeCheck } from "lucide-react"
import { PaymentMethods } from "@/components/payment-methods"

// As etapas do TRABALHO. As formas de pagamento ficam no bloco seguinte,
// para o cliente não confundir "etapa do processo" com "forma de pagar".
const steps = [
  {
    number: "01",
    title: "Levantamento e Croqui",
    description:
      "Visitamos o local, fazemos a medição e elaboramos o croqui do projeto. É aqui que tudo começa a sair do papel.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Protocolo na Prefeitura",
    description:
      "Organizamos toda a documentação exigida e damos entrada no processo junto à Prefeitura. Você não precisa entender de burocracia — a gente entende por você.",
    icon: FileStack,
  },
  {
    number: "03",
    title: "Conclusão e Emissão dos Documentos",
    description:
      "Acompanhamos o processo até a aprovação final e entregamos os documentos emitidos, como o alvará, em suas mãos.",
    icon: BadgeCheck,
  },
]

export function PaymentProcess() {
  return (
    <section
      id="como-funciona"
      className="py-24 sm:py-32 bg-[#f9fafb] relative overflow-hidden border-t border-[#edeff3]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[500px] rounded-full bg-[#066bef]/4 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Parte 1 — como o trabalho acontece */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#066bef]/30 bg-[#066bef]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#066bef] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#066bef] font-semibold font-mono">
              // como funciona
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1d283a] mb-4 tracking-tight text-balance">
            O processo em <span className="text-[#066bef]">3 etapas</span>
          </h2>
          <p className="text-[#5a687c] max-w-2xl mx-auto text-lg text-balance">
            Do levantamento no local à entrega dos documentos, cuidamos de tudo —{" "}
            <span className="text-[#066bef] font-semibold">garantimos a conclusão total do processo</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative p-8 rounded-2xl bg-white border border-[#e0e5eb] hover:border-[#066bef]/40 hover:shadow-[0_0_30px_rgba(6,107,239,0.07)] transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#066bef]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg bg-[#edeff3] border border-[#e0e5eb] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#066bef]/30 transition-all duration-500">
                  <step.icon className="w-6 h-6 text-[#066bef]" />
                </div>

                <span className="font-mono text-xs font-semibold text-[#066bef] mb-2">{step.number}</span>
                <h3 className="text-lg font-bold text-[#1d283a] mb-3 text-balance">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#5a687c] group-hover:text-[#3d4c5f] transition-colors">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Parte 2 — como pagar */}
        <div id="formas-de-pagamento" className="mt-20 scroll-mt-28">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1d283a] mb-3 tracking-tight text-balance">
              Escolha <span className="text-[#066bef]">como pagar</span>
            </h3>
            <p className="text-[#5a687c] max-w-2xl mx-auto text-balance">
              Valores a partir de <span className="text-[#1d283a] font-semibold">R$ 2.000</span>, variando conforme a
              complexidade e o tempo do processo. São três formas de pagamento:
            </p>
          </div>

          <PaymentMethods />
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=5562998062169&text=Ol%C3%A1%2C%20quero%20entender%20as%20formas%20de%20pagamento%20da%20Carvalho%20Engenharia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#066bef] text-white font-bold text-sm hover:bg-[#0559c7] transition-all duration-300 shadow-[0_8px_24px_rgba(6,107,239,0.25)] hover:shadow-[0_10px_30px_rgba(6,107,239,0.35)]"
          >
            Tirar dúvidas sobre o pagamento
          </a>
        </div>
      </div>
    </section>
  )
}
