"use client"

import Link from "next/link"
import { ClipboardList, Briefcase, Landmark, FileCheck2, PencilRuler, ArrowRight } from "lucide-react"

const services = [
  {
    slug: "regularizacao-de-imoveis-goiania",
    icon: ClipboardList,
    title: "Regularização de Imóveis",
    description:
      "Regularização completa de imóveis irregulares, sem escritura, habite-se ou construção não averbada.",
  },
  {
    slug: "despachante-imobiliario-goiania",
    icon: Briefcase,
    title: "Despachante Imobiliário",
    description:
      "Assessoria completa em cartórios e prefeituras. Cuidamos de toda a tramitação documental para você não perder tempo com burocracia.",
  },
  {
    slug: "inss-de-obra-goiania",
    icon: Landmark,
    title: "INSS de Obra",
    description:
      "Regularização da obra junto ao INSS/Receita Federal, com abertura e baixa de CNO e emissão de CND, evitando pendências para habite-se e financiamento.",
  },
  {
    slug: "averbacao-de-imovel-goiania",
    icon: FileCheck2,
    title: "Averbação de Imóvel",
    description:
      "Averbação de construção junto ao Cartório de Registro de Imóveis, atualizando a área construída e o habite-se na matrícula. Essencial para vender, financiar ou regularizar o patrimônio.",
  },
  {
    slug: "projeto-arquitetonico-goiania",
    icon: PencilRuler,
    title: "Projeto Arquitetônico",
    description:
      "Criação de projeto arquitetônico funcional, moderno e personalizado para residências e comércios.",
  },
]

export function ServicesSummary() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group relative p-8 rounded-2xl bg-[#f9fafb] border border-[#e0e5eb] hover:border-[#066bef]/50 transition-all duration-500 flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#066bef]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-lg bg-[#edeff3] border border-[#e0e5eb] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#066bef]/30 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-[#066bef]" />
                </div>

                <h3 className="text-xl font-bold text-[#1d283a] mb-3">{service.title}</h3>

                <p className="text-sm leading-relaxed text-[#5a687c] group-hover:text-[#3d4c5f] transition-colors mb-6 flex-1">
                  {service.description}
                </p>

                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#066bef] hover:underline"
                >
                  Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
