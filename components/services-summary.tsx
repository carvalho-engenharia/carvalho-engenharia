"use client"

import Link from "next/link"
import { ClipboardList, Briefcase, Calculator, PencilRuler, ArrowRight } from "lucide-react"

const pillars = [
  {
    slug: "regularizacao-e-habite-se",
    icon: ClipboardList,
    title: "Regularização e Habite-se",
    description:
      "Regularização de imóveis irregulares, alvará de construção, habite-se e desmembramento/remembramento junto à Prefeitura.",
  },
  {
    slug: "despachante-e-cartorio",
    icon: Briefcase,
    title: "Despachante e Cartório",
    description:
      "Assessoria completa em cartórios e prefeituras: despachante imobiliário, averbação de construção e INSS de obra.",
  },
  {
    slug: "laudos-e-avaliacoes",
    icon: Calculator,
    title: "Laudos e Avaliações",
    description:
      "Laudo de avaliação de imóvel, vistoria técnica e consultoria em engenharia civil para decisões seguras.",
  },
  {
    slug: "projetos-e-art",
    icon: PencilRuler,
    title: "Projetos e ART",
    description:
      "Gerenciamento de projetos e de obras, projetos estruturais e arquitetônicos, e emissão de ART.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.slug}
              className="group relative p-8 rounded-2xl bg-[#f9fafb] border border-[#e0e5eb] hover:border-[#066bef]/50 transition-all duration-500 flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#066bef]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-lg bg-[#edeff3] border border-[#e0e5eb] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#066bef]/30 transition-all duration-500">
                  <pillar.icon className="w-6 h-6 text-[#066bef]" />
                </div>

                <h3 className="text-xl font-bold text-[#1d283a] mb-3">{pillar.title}</h3>

                <p className="text-sm leading-relaxed text-[#5a687c] group-hover:text-[#3d4c5f] transition-colors mb-6 flex-1">
                  {pillar.description}
                </p>

                <Link
                  href={`/servicos#${pillar.slug}`}
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
