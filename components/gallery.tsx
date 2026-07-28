import Image from "next/image"

const gallery = [
  {
    image: "/engenheiro-levantamento-campo.jpg",
    caption: "Levantamento técnico feito com precisão",
  },
  {
    image: "/hero-residencial.jpg",
    caption: "Projeto aprovado, obra realizada",
  },
  {
    image: "/projeto-tecnico-aprovado.png",
    caption: "Projeto técnico pronto para aprovação",
  },
]

export function Gallery() {
  return (
    <section className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-[#111111]">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-[#00aaff]/4 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00aaff]/30 bg-[#00aaff]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#00aaff] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#00aaff] font-semibold">
              Nosso Trabalho
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa] mb-4 text-balance">
            Do levantamento em campo ao{" "}
            <span className="text-[#00aaff]">projeto aprovado</span>
          </h2>

          <p className="text-[#888888] text-lg max-w-xl mx-auto">
            Acompanhe de perto como transformamos medição, projeto técnico e aprovação em resultado real.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div
              key={item.caption}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#1a1a1a] hover:border-[#00aaff]/40 transition-all duration-500"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
              <span className="absolute bottom-5 left-5 right-5 text-sm font-medium text-[#fafafa]">
                {item.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
