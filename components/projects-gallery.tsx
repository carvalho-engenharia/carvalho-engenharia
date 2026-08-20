import Image from "next/image"

const projects = [
  { image: "/segmentos/projeto-fachada.jpg", caption: "Fachada" },
  { image: "/segmentos/projeto-planta-01.jpg", caption: "Planta baixa" },
  { image: "/segmentos/projeto-planta-02.jpg", caption: "Planta baixa" },
  { image: "/segmentos/projeto-cortes.jpg", caption: "Cortes" },
  { image: "/segmentos/projeto-estrutural.jpg", caption: "Projeto estrutural" },
  { image: "/segmentos/projeto-croqui.jpg", caption: "Croqui" },
  { image: "/segmentos/projeto-detalhamento.jpg", caption: "Detalhamento" },
  { image: "/segmentos/projeto-3d-01.jpg", caption: "Perspectiva 3D" },
  { image: "/segmentos/projeto-3d-02.jpg", caption: "Perspectiva 3D" },
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
            <div
              key={item.image}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#e0e5eb] hover:border-[#066bef]/40 transition-all duration-500 bg-white"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.caption}
                fill
                className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-3 left-3 right-3 text-xs font-medium text-[#fafafa] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
