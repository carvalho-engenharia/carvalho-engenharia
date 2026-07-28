"use client"

import {
  Search,
  Wrench,
  FileText,
  Building2,
  ClipboardList,
  HardHat,
} from "lucide-react"

const services = [
  {
    title: "Projetos de Engenharia",
    description:
      "Projetos Estruturais, Elétricos e Hidrossanitários completos para residências e comércios. Do croqui ao projeto executivo aprovado.",
    icon: Wrench,
  },
  {
    title: "Alvará de Construção",
    description:
      "Aprovação de projetos e obtenção de Alvará de Construção junto à Prefeitura. Habite-se, Carta de Ocupação e Alvará de Funcionamento para empresas.",
    icon: FileText,
  },
  {
    title: "Alvarás junto às Prefeituras",
    description:
      "Assessoria completa para aprovações junto à Prefeitura de Goiânia e Aparecida de Goiânia. Desmembramento, retificação de áreas e averbação em cartório.",
    icon: Building2,
  },
  {
    title: "Regularização de Imóveis",
    description:
      "Regularização de obras construídas sem alvará, ampliações e reformas não documentadas. INSS de obras e conformidade com a legislação vigente.",
    icon: ClipboardList,
  },
  {
    title: "Perícias e Vistorias Técnicas",
    description:
      "Laudos técnicos detalhados para avaliar a segurança e conformidade do seu imóvel. Relatórios assinados por Engenheiro Civil com registro CREA.",
    icon: Search,
  },
  {
    title: "Acompanhamento de Obras",
    description:
      "Gestão e execução de obras residenciais e comerciais do início ao fim. ART (Anotação de Responsabilidade Técnica) e controle de qualidade em cada etapa.",
    icon: HardHat,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,170,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#00aaff] uppercase mb-4">
            Nossos Serviços
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 tracking-tight">
            Soluções completas{" "}
            <span className="text-[#00aaff]">em engenharia</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto">
            Da perícia técnica ao acompanhamento de obras. Cuidamos de todo o processo para que você não precise se preocupar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#0a0a0a]/50 border border-[#1a1a1a] hover:border-[#00aaff]/50 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#00aaff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#00aaff]/30 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-[#00aaff]" />
                </div>

                <h3 className="text-xl font-bold text-[#00aaff] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#888888] group-hover:text-[#aaaaaa] transition-colors mb-6">
                  {service.description}
                </p>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-1 text-sm text-[#00aaff] hover:underline"
                >
                  Solicitar orçamento →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
