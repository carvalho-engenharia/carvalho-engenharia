import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SobreResumo() {
  return (
    <section id="sobre" className="py-24 bg-white border-t border-[#e0e5eb]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Foto */}
          <div className="shrink-0">
            <div
              style={{
                width: "180px",
                height: "220px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(6,107,239,0.35)",
                boxShadow: "0 0 60px rgba(6,107,239,0.2), 0 0 0 1px rgba(6,107,239,0.1)",
                position: "relative",
              }}
            >
              <img
                src="/caio.jpg"
                alt="Caio Maracaípe — Engenheiro Civil"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 55%)",
                }}
              />
              <div style={{ position: "absolute", bottom: "12px", left: 0, right: 0, textAlign: "center" }}>
                <p style={{ color: "white", fontSize: "13px", fontWeight: 600, margin: 0 }}>Caio Maracaípe</p>
                <p style={{ color: "#22d3ee", fontSize: "11px", margin: 0 }}>Engenheiro Civil</p>
              </div>
            </div>
          </div>

          {/* Texto resumido */}
          <div className="text-center lg:text-left">
            <p className="text-[#066bef] text-sm font-mono uppercase tracking-widest mb-3">sobre</p>
            <h2 className="text-3xl font-bold text-[#1d283a] leading-tight mb-5 text-balance">
              Engenharia especializada em{" "}
              <span className="text-[#066bef]">regularização de imóveis há mais de 10 anos</span>
            </h2>
            <p className="text-[#5a687c] text-base leading-relaxed mb-6 max-w-xl">
              Sou Caio Maracaípe, Engenheiro Civil (CREA 1017786453D-GO) à frente da Carvalho Engenharia, com mais
              de 10 anos regularizando imóveis, aprovando projetos e conduzindo obras em Goiânia, Aparecida de
              Goiânia e região.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#066bef]/30 text-[#066bef] font-semibold text-sm hover:bg-[#066bef]/5 transition-all duration-300"
            >
              Conheça o engenheiro
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
