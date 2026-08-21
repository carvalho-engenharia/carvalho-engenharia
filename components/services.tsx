"use client"

import {
  ClipboardList,
  Briefcase,
  Landmark,
  Calculator,
  ClipboardCheck,
  HardHat,
  MessageCircle,
  Stamp,
  Wrench,
  Search,
  FileText,
  FileCheck2,
  Layers,
  PencilRuler,
} from "lucide-react"

const services = [
  // Volume confirmado — alto (5.000 buscas/mês, empate no topo)
  {
    title: "Regularização de Imóveis",
    description:
      "Regularização completa de imóveis irregulares, imóveis sem escritura, habite-se ou com construção não averbada.",
    icon: ClipboardList,
  },
  {
    title: "Despachante Imobiliário",
    description:
      "Assessoria completa em cartórios e prefeituras. Cuidamos de toda a tramitação documental para você não perder tempo com burocracia.",
    icon: Briefcase,
  },
  {
    title: "INSS de Obra",
    description:
      "Regularização da obra junto ao INSS/Receita Federal com abertura e baixa de CNO, emissão de CND, evitando pendências para habite-se e financiamento.",
    icon: Landmark,
  },
  {
    title: "Avaliador de Imóvel",
    description:
      "Emissão de Laudo de Avaliação de Imóveis assinado por engenheiro civil habilitado, para financiamento, inventário ou partilha.",
    icon: Calculator,
  },
  {
    title: "Gerenciamento de Projetos",
    description:
      "Elaboração e gestão de projetos de engenharia civil, garantindo compatibilização entre disciplinas e cumprimento de prazos.",
    icon: ClipboardCheck,
  },
  {
    title: "Averbação de Imóvel",
    description:
      "Averbação de construção junto ao Cartório de Registro de Imóveis, atualizando a área construída e o habite-se na matrícula. Essencial para vender, financiar ou regularizar o patrimônio.",
    icon: FileCheck2,
  },
  {
    title: "Projeto Estrutural",
    description:
      "Elaboração de projetos estruturais seguros e otimizados em concreto armado, metálico ou misto, com cálculo estrutural completo.",
    icon: Wrench,
  },
  {
    title: "Projeto Arquitetônico",
    description:
      "Criação de projetos arquitetônicos funcionais, modernos e personalizados para residências e comércios.",
    icon: PencilRuler,
  },

  // Volume confirmado — médio (500 buscas/mês)
  {
    title: "Gerenciamento de Obra",
    description:
      "Acompanhamento técnico especializado, planejamento, controle de custos e fiscalização da execução, do início ao fim da obra.",
    icon: HardHat,
  },
  {
    title: "Consultoria em Engenharia Civil",
    description:
      "Consultoria técnica especializada para resolução de patologias construtivas, viabilidade de empreendimentos e pareceres técnicos.",
    icon: MessageCircle,
  },
  {
    title: "Emissão de ART",
    description:
      "Emissão ágil de ART (Anotação de Responsabilidade Técnica) para projetos, execuções e reformas.",
    icon: Stamp,
  },

  // Volume confirmado — baixo (50 buscas/mês)
  {
    title: "Vistoria Técnica de Imóvel",
    description:
      "Inspeção predial e vistoria técnica detalhada para recebimento de chaves, verificação de fachadas e laudos de patologias.",
    icon: Search,
  },
  {
    title: "Alvará de Construção e Habite-se",
    description:
      "Emissão de licenças municipais para início de obras (alvará) e obtenção da certidão de conclusão (habite-se), conforme a LC nº 364/2023.",
    icon: FileText,
  },
  {
    title: "Desmembramento e Remembramento",
    description:
      "Serviços técnicos de topografia e aprovação urbana para divisão ou unificação de terrenos.",
    icon: Layers,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,107,239,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#066bef] uppercase mb-4">
            Nossos Serviços
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d283a] mb-4 tracking-tight">
            Soluções completas{" "}
            <span className="text-[#066bef]">em engenharia</span>
          </h2>
          <p className="text-[#5a687c] max-w-2xl mx-auto">
            Da regularização de imóveis ao acompanhamento de obras. Cuidamos de todo o processo para que você não precise se preocupar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#f9fafb] border border-[#e0e5eb] hover:border-[#066bef]/50 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#066bef]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#edeff3] border border-[#e0e5eb] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#066bef]/30 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-[#066bef]" />
                </div>

                <h3 className="text-xl font-bold text-[#066bef] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#5a687c] group-hover:text-[#3d4c5f] transition-colors mb-6">
                  {service.description}
                </p>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-1 text-sm text-[#066bef] hover:underline"
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
