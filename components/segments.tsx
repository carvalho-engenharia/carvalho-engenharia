"use client"

import Image from "next/image"
import { Building2 } from "lucide-react"
import { useState } from "react"

const industrialPhotos = [
  "/segmentos/galpao-industrial-01.jpg",
  "/segmentos/galpao-industrial-02.jpg",
  "/segmentos/galpao-industrial-03.jpg",
  "/segmentos/galpao-industrial-04.jpg",
  "/segmentos/galpao-industrial-05.jpg",
]

const residentialPhotos = [
  "/segmentos/piscina-deck-residencial-01.jpg",
  "/segmentos/fachada-piscina-residencial-02.jpg",
  "/segmentos/sala-ampla-residencial-03.jpg",
]

export function Segments() {
  const [activeIndustrial, setActiveIndustrial] = useState(0)
  const [activeResidential, setActiveResidential] = useState(0)

  return (
    <section className="py-24 sm:py-32 bg-[#f8f9fb] relative overflow-hidden border-t border-[#e0e5eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#066bef]/30 bg-[#066bef]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#066bef] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#066bef] font-semibold">
              Segmentos que Atendemos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#1d283a] mb-4 text-balance">
            Engenharia para todo tipo de{" "}
            <span className="text-[#066bef]">imóvel e negócio</span>
          </h2>

          <p className="text-[#5a687c] text-lg max-w-xl mx-auto">
            Residências, clínicas, comércios e galpões industriais — do projeto à regularização final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Residencial - com mini galeria */}
          <div className="flex flex-col gap-3">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#e0e5eb] hover:border-[#066bef]/40 transition-all duration-500">
              <Image
                src={residentialPhotos[activeResidential] || "/placeholder.svg"}
                alt="Regularização e projetos residenciais"
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
              <span className="absolute bottom-5 left-5 right-5 text-sm font-medium text-[#fafafa]">
                Residencial
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {residentialPhotos.map((photo, i) => (
                <button
                  key={photo}
                  onClick={() => setActiveResidential(i)}
                  className={`relative aspect-square rounded-md overflow-hidden border transition-all ${
                    activeResidential === i
                      ? "border-[#066bef] ring-2 ring-[#066bef]/30"
                      : "border-[#e0e5eb] opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Ver foto residencial ${i + 1}`}
                >
                  <Image
                    src={photo || "/placeholder.svg"}
                    alt={`Imóvel residencial ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comercial / Clínicas — TEMP: sem foto até autorização do cliente (MedPrime).
              Bloco com ícone em vez de imagem quebrada/vazia. Trocar por
              /segmentos/fachada-clinica-comercial-01.jpg assim que autorizado. */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#e0e5eb] hover:border-[#066bef]/40 transition-all duration-500 bg-gradient-to-br from-[#066bef]/8 via-[#eef1f5] to-[#066bef]/5 flex items-center justify-center">
            <Building2 className="w-16 h-16 text-[#066bef]/25" strokeWidth={1.2} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d283a]/85 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 right-5 text-sm font-medium text-[#fafafa]">
              Comercial / Clínicas
            </span>
          </div>

          {/* Industrial - com mini galeria */}
          <div className="flex flex-col gap-3">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#e0e5eb] hover:border-[#066bef]/40 transition-all duration-500">
              <Image
                src={industrialPhotos[activeIndustrial] || "/placeholder.svg"}
                alt="Projetos e regularização de galpões industriais"
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
              <span className="absolute bottom-5 left-5 right-5 text-sm font-medium text-[#fafafa]">
                Industrial
              </span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {industrialPhotos.map((photo, i) => (
                <button
                  key={photo}
                  onClick={() => setActiveIndustrial(i)}
                  className={`relative aspect-square rounded-md overflow-hidden border transition-all ${
                    activeIndustrial === i
                      ? "border-[#066bef] ring-2 ring-[#066bef]/30"
                      : "border-[#e0e5eb] opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Ver foto industrial ${i + 1}`}
                >
                  <Image
                    src={photo || "/placeholder.svg"}
                    alt={`Galpão industrial ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
