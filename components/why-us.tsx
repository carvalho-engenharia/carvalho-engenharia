"use client"

import { TrendingUp, Landmark, FileText, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Valorização e venda facilitada do imóvel",
    description: "Imóvel regularizado vale mais e pode ser vendido, financiado ou refinanciado junto à Caixa e demais bancos sem impedimentos.",
  },
  {
    icon: Landmark,
    title: "Mais de 10 anos regularizando imóveis em Goiânia",
    description: "Engenheiro Civil com registro ativo no CREA (1017786453D-GO), responsabilidade técnica em projetos e processos junto às prefeituras.",
  },
  {
    icon: FileText,
    title: "Acompanhamento completo junto à prefeitura",
    description: "Cuidamos de todo o processo: alvará de construção, habite-se, carta de ocupação, desmembramento, averbação e INSS de obras.",
  },
  {
    icon: ShieldCheck,
    title: "Atendimento presencial em Goiânia",
    description: "Suporte técnico presencial em Goiânia, Aparecida de Goiânia e região. Atendemos por agendamento de segunda a sexta das 8h às 18h.",
  },
]

export function WhyUs() {
  return (
    <section id="vantagens" className="py-24 sm:py-32 bg-[#f9fafb] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[#066bef]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#066bef]/30 bg-[#066bef]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#066bef] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#066bef] font-semibold">Vantagens</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d283a] mb-4 text-balance">
            Por que regularizar com a{" "}
            <span className="text-[#066bef]">Carvalho Engenharia</span>
          </h2>

          <p className="text-[#5a687c] text-lg max-w-xl mx-auto">
            Regularização de imóveis com responsabilidade técnica, agilidade e acompanhamento completo do início ao fim.
          </p>
        </div>

        {/* Benefícios da regularização — lista destacada */}
        <div className="mb-12 bg-white border border-[#e0e5eb] rounded-2xl p-8 sm:p-10">
          <h3 className="text-lg font-semibold text-[#1d283a] mb-6">
            Benefícios da regularização imobiliária
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Facilidade na compra ou venda do imóvel",
              "Possibilidade de financiamento junto à Caixa e bancos",
              "Averbação da construção na escritura, valorizando o imóvel",
              "Laudo de avaliação de imóvel para financiamento, inventário ou partilha",
              "Gerenciamento completo de projetos e obras, do início à entrega",
              "Viabiliza inventário, partilha e processos jurídicos",
              "Obtenção da Carta de Ocupação e Habite-se",
              "Desmembramento (desdobro) e retificação de áreas",
              "Acompanhamento completo junto à prefeitura",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#066bef] mt-2 flex-shrink-0" />
                <span className="text-sm text-[#5a687c]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-2xl bg-white border border-[#e0e5eb] hover:border-[#066bef]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,107,239,0.08)] ${index === 0 ? "md:row-span-2 flex flex-col justify-center" : ""
                }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#e0e5eb] flex items-center justify-center mb-6 group-hover:bg-[#066bef]/10 group-hover:shadow-[0_0_20px_rgba(6,107,239,0.2)] transition-all duration-300">
                <feature.icon className="w-8 h-8 text-[#066bef]" />
              </div>

              <h3 className="text-xl font-semibold text-[#1d283a] mb-3">{feature.title}</h3>
              <p className="text-[#5a687c] leading-relaxed">{feature.description}</p>

              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#e0e5eb] group-hover:border-[#066bef]/30 rounded-tr-lg transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
