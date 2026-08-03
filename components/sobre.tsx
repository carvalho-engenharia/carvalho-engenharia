"use client"

import { HardHat, Award, Users, FileCheck } from "lucide-react"

const stats = [
  { value: "10+", label: "anos de experiência" },
  { value: "500+", label: "obras regularizadas" },
  { value: "Goiânia", label: "Aparecida, Anápolis e região" },
  { value: "CREA", label: "responsabilidade técnica" },
]

const competencias = [
  { icon: FileCheck, titulo: "Alvarás & Regularizações", descricao: "Alvará de construção, habite-se, carta de ocupação e regularização de obras junto à prefeitura" },
  { icon: HardHat, titulo: "Projetos de Engenharia", descricao: "Projetos estruturais, elétricos, hidrossanitários e arquitetônicos para residências e empresas" },
  { icon: Award, titulo: "Perícias e Laudos Técnicos", descricao: "Perícias, vistorias e laudos detalhados para segurança e conformidade do imóvel" },
  { icon: Users, titulo: "Obras Residenciais", descricao: "Acompanhamento e execução de obras do início ao fim com responsabilidade técnica" },
]

const credenciais = [
  { label: "Engenheiro Civil", sub: "CREA 1017786453D-GO" },
  { label: "Pós-graduado em Regularização Imobiliária", sub: "UFG" },
  { label: "Mais de 10 anos no mercado", sub: "Goiânia e região" },
]

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white border-t border-[#e0e5eb]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho + Foto lado a lado */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <p className="text-[#066bef] text-sm font-mono uppercase tracking-widest mb-3">sobre</p>
            <h2 className="text-4xl font-bold text-[#1d283a] leading-tight max-w-xl">
              Engenharia especializada em{" "}
              <span className="text-[#066bef]">regularização de imóveis há mais de 10 anos</span>
            </h2>
          </div>

          {/* Foto — destaque no topo */}
          <div className="flex justify-center lg:justify-end shrink-0">
            <div
              style={{
                width: "200px",
                height: "245px",
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
        </div>

        {/* Texto + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
          <div className="space-y-5 text-[#5a687c] text-base leading-relaxed">
            <p>
              Sou Caio Maracaípe, Engenheiro Civil com mais de 10 anos de atuação em projetos, regularizações e
              alvarás em Goiânia e Aparecida de Goiânia. À frente da Carvalho Engenharia, transformo projetos em
              realidade unindo tecnologia, qualidade e atenção às necessidades de cada cliente.
            </p>
            <p>
              Minha trajetória abrange residências, comércios, indústrias e órgãos públicos — do alvará de
              construção à regularização de obras irregulares, passando por projetos estruturais, elétricos e
              hidrossanitários. Cada caso é tratado com dedicação e compromisso até a entrega final.
            </p>
            <p>
              Com registro ativo no CREA (1017786453D-GO), ofereço responsabilidade técnica em todos os projetos e
              acompanho pessoalmente cada processo junto às prefeituras de Goiânia, Aparecida de Goiânia, Anápolis e região.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-[#e0e5eb] rounded-xl p-6 transition-colors"
                style={{ backgroundColor: "#f9fafb" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#edeff3")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
              >
                <p className="text-3xl font-bold text-[#066bef] mb-1">{stat.value}</p>
                <p className="text-[#5a687c] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credenciais */}
        <div className="flex flex-wrap gap-3 mb-16">
          {credenciais.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3 px-4 py-3 rounded-full border border-[#066bef]/25 bg-[#ecf4fe] hover:border-[#066bef]/50 transition-colors"
            >
              <HardHat className="text-[#066bef] shrink-0" size={16} />
              <div className="leading-tight">
                <span className="text-[#1d283a] text-sm font-medium">{c.label}</span>
                <span className="text-[#5a687c] text-xs ml-2">— {c.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Missão / Visão / Valores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { titulo: "Missão", descricao: "Transformar projetos em realidade, unindo tecnologia, recursos humanos e qualidade para oferecer soluções práticas e eficientes." },
            { titulo: "Visão", descricao: "Ser referência em engenharia pela qualidade, confiança e adaptação às necessidades de cada cliente." },
            { titulo: "Valores", descricao: "Compromisso, ética e dedicação total para atingir objetivos com impacto positivo na sociedade." },
            { titulo: "Satisfação", descricao: "Atender com excelência, garantindo que cada cliente fique totalmente satisfeito com o resultado." },
          ].map((item) => (
            <div
              key={item.titulo}
              className="border border-[#e0e5eb] rounded-xl p-5 hover:border-[#066bef]/30 transition-colors group"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <p className="text-[#066bef] font-bold text-sm mb-2 group-hover:scale-105 transition-transform">{item.titulo}</p>
              <p className="text-[#5a687c] text-xs leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>

        {/* Competências */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {competencias.map((c) => (
            <div
              key={c.titulo}
              className="border border-[#e0e5eb] rounded-xl p-5 hover:border-[#066bef]/30 transition-colors group"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <c.icon className="text-[#066bef] mb-3 group-hover:scale-110 transition-transform" size={20} />
              <p className="text-[#1d283a] font-medium text-sm mb-1">{c.titulo}</p>
              <p className="text-[#5a687c] text-xs leading-relaxed">{c.descricao}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
