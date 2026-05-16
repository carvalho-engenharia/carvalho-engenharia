"use client"

import { UserCheck, Award, BadgeCheck, MapPin } from "lucide-react"

const features = [
  {
    icon: UserCheck,
    title: "Suporte TI direto com o especialista",
    description: "Sem terceiros, sem call center. Você fala direto com quem resolve — atendimento presencial e remoto em Goiânia.",
  },
  {
    icon: Award,
    title: "Mais de 20 anos em infraestrutura de TI",
    description: "Profissional sênior com vivência real em terceirização de TI, redes corporativas e projetos complexos.",
  },
  {
    icon: BadgeCheck,
    title: "Certificado CREA",
    description: "Engenharia aplicada à TI. Projetos de infraestrutura e redes com responsabilidade técnica.",
  },
  {
    icon: MapPin,
    title: "Atendimento presencial em Goiânia",
    description: "Suporte técnico presencial em Goiânia, Aparecida de Goiânia e região. Estamos perto quando você precisa.",
  },
]

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[#33bbff]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#33bbff]/30 bg-[#33bbff]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#33bbff] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#33bbff] font-semibold">Por que nós</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] mb-4 text-balance">
            Por que contratar a{" "}
            <span className="text-[#33bbff]">Nexus TI em Goiânia</span>
          </h2>

          <p className="text-[#888888] text-lg max-w-xl mx-auto">
            Terceirização de TI com atendimento humano, suporte técnico especializado e comprometimento com o resultado da sua empresa.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-2xl bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#33bbff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(51,187,255,0.08)] ${index === 0 ? "md:row-span-2 flex flex-col justify-center" : ""
                }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-[#33bbff]/10 group-hover:shadow-[0_0_20px_rgba(51,187,255,0.2)] transition-all duration-300">
                <feature.icon className="w-8 h-8 text-[#33bbff]" />
              </div>

              <h3 className="text-xl font-semibold text-[#fafafa] mb-3">{feature.title}</h3>
              <p className="text-[#888888] leading-relaxed">{feature.description}</p>

              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#1a1a1a] group-hover:border-[#33bbff]/30 rounded-tr-lg transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}