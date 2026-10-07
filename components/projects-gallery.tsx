import Image from "next/image"

const projects = [
  {
    image: "/segmentos/projeto-fachada.jpg",
    caption: "Projeto comercial de reforma e regularização",
    description: "Prancha completa com plantas, cortes após a reforma, fachadas, quadro de áreas e situação do lote.",
  },
  {
    image: "/segmentos/projeto-planta-01.jpg",
    caption: "Planta baixa",
    description: "Planta residencial cotada, com área e acabamento de cada ambiente e a marcação dos cortes.",
  },
  {
    image: "/segmentos/projeto-planta-02.jpg",
    caption: "Projeto arquitetônico residencial",
    description: "Planta baixa, cortes, fachada, cobertura e situação reunidos na prancha de aprovação.",
  },
  {
    image: "/segmentos/projeto-cortes.jpg",
    caption: "Cortes",
    description: "Fachada, corte longitudinal e plantas dos dois pavimentos de uma residência.",
  },
  {
    image: "/segmentos/projeto-estrutural.jpg",
    caption: "Projeto estrutural",
    description: "Galpão em estrutura metálica sobre blocos e estacas: modelo 3D, treliças, fundações e contraventamentos.",
  },
  {
    image: "/segmentos/projeto-3d-01.jpg",
    caption: "Planta humanizada",
    description: "Residência térrea com três suítes, área gourmet e garagem para dois carros.",
  },
  {
    image: "/segmentos/projeto-3d-02.jpg",
    caption: "Planta humanizada cotada",
    description: "Residência em lote de 10 x 20 m, com recuos, suíte, dormitório e garagem para dois carros.",
  },
]

export function ProjectsGallery() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-[#e0e5eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#066bef]/30 bg-[#066bef]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#066bef] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#066bef] font-semibold">
              Projetos Autorais
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d283a] mb-4 text-balance">
            Do croqui ao{" "}
            <span className="text-[#066bef]">projeto técnico completo</span>
          </h2>

          <p className="text-[#5a687c] text-lg max-w-xl mx-auto">
            Plantas, cortes, projetos estruturais e perspectivas desenvolvidos e assinados pela Carvalho Engenharia.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <figure key={item.image} className="flex flex-col gap-3">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#e0e5eb] hover:border-[#066bef]/40 transition-all duration-500 bg-white">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.caption}
                  fill
                  className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
              </div>
              <figcaption className="text-sm leading-relaxed">
                <span className="block font-semibold text-[#1d283a]">{item.caption}</span>
                <span className="text-[#5a687c]">{item.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
