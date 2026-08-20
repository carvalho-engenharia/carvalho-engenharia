import Image from "next/image"

const documents = [
  { image: "/segmentos/alvara-regularizacao.jpg", caption: "Alvará de Regularização" },
  { image: "/segmentos/alvara-construcao.jpg", caption: "Alvará de Construção" },
  { image: "/segmentos/alvara-construcao2.jpg", caption: "Alvará de Construção" },
  { image: "/segmentos/alvara-localizacao.jpg", caption: "Alvará de Localização e Funcionamento" },
]

export function DocumentsGallery() {
  return (
    <section className="py-24 sm:py-32 bg-[#f8f9fb] relative overflow-hidden border-t border-[#e0e5eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#066bef]/30 bg-[#066bef]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#066bef] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#066bef] font-semibold">
              Documentos que Emitimos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d283a] mb-4 text-balance">
            Alvarás e certidões{" "}
            <span className="text-[#066bef]">aprovados junto à prefeitura</span>
          </h2>

          <p className="text-[#5a687c] text-lg max-w-xl mx-auto">
            Exemplos de documentação obtida para clientes. Dados pessoais e do imóvel foram ocultados por
            confidencialidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((item) => (
            <div
              key={item.image}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#e0e5eb] hover:border-[#066bef]/40 transition-all duration-500 bg-white shadow-sm"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.caption}
                fill
                className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080808]/80 to-transparent pt-10 pb-3 px-3">
                <span className="text-xs font-medium text-[#fafafa]">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
