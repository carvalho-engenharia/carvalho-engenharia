"use client"

import { Shield, Server, Cloud, Network, GraduationCap, Radio, HardHat } from "lucide-react"

const stats = [
  { value: "20+", label: "anos de experiência" },
  { value: "35+", label: "clientes ativos" },
  { value: "800+", label: "usuários gerenciados" },
  { value: "99,9%", label: "uptime garantido" },
]

const competencias = [
  { icon: Cloud, titulo: "Cloud & Virtualização", descricao: "AWS, Azure, GCP, VMware ESXi e Hyper-V" },
  { icon: Network, titulo: "Redes & Segurança", descricao: "VPNs IPsec, VLANs, Fortinet, pfSense e UDM-Pro" },
  { icon: Server, titulo: "Servidores", descricao: "Windows Server, Linux, Docker e Kubernetes" },
  { icon: Shield, titulo: "Backup & DR", descricao: "Veeam, planejamento e execução de disaster recovery" },
]

const credenciais = [
  { icon: GraduationCap, label: "Pós-graduado em Segurança da Informação", sub: "UFG" },
  { icon: Radio, label: "Graduado em Redes de Computadores", sub: "Anhanguera" },
  { icon: HardHat, label: "Registro CREA Ativo", sub: "Engenharia aplicada à TI" },
]

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho + Foto lado a lado */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest mb-3">sobre</p>
            <h2 className="text-4xl font-bold text-white leading-tight max-w-xl">
              Infraestrutura gerenciada por quem{" "}
              <span className="text-cyan-400">vive isso há mais de 20 anos</span>
            </h2>
          </div>

          {/* Foto — destaque no topo */}
          <div className="flex justify-center lg:justify-end shrink-0">
            <div
              style={{
                width: "180px",
                height: "220px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(0,170,255,0.35)",
                boxShadow: "0 0 60px rgba(0,170,255,0.2), 0 0 0 1px rgba(0,170,255,0.1)",
                position: "relative",
              }}
            >
              <img
                src="https://res.cloudinary.com/ddnbvkduq/image/upload/f_auto,q_auto/foto-perfil_vqdn8m.jpg"
                alt="Caio Maracaipe — Especialista em TI"
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
                <p style={{ color: "white", fontSize: "13px", fontWeight: 600, margin: 0 }}>Caio Maracaipe</p>
                <p style={{ color: "#22d3ee", fontSize: "11px", margin: 0 }}>Especialista em TI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Texto + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
          <div className="space-y-5 text-white/60 text-base leading-relaxed">
            <p>
              Sou Caio Maracaipe, profissional de TI com mais de 20 anos de atuação em infraestrutura, redes e
              cloud computing. À frente da Nexus TI, gerencio ambientes complexos para mais de 35 empresas
              simultaneamente — do planejamento até a operação diária.
            </p>
            <p>
              Minha trajetória passa por indústrias farmacêuticas, órgãos públicos como o Tribunal de Contas do
              Estado de Goiás, Ministério da Saúde e IBAMA, e empresas de diferentes portes e segmentos. Isso me
              deu visão ampla de problemas reais — e como resolvê-los com eficiência.
            </p>
            <p>
              Pós-graduado em Segurança da Informação pela UFG e graduado em Redes de Computadores, com foco em
              ambientes seguros, performáticos e bem documentados.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 rounded-xl p-6 transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)")}
              >
                <p className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credenciais */}
        <div className="flex flex-wrap gap-3 mb-16">
          {credenciais.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3 px-4 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 hover:border-cyan-400/50 transition-colors"
            >
              <c.icon className="text-cyan-400 shrink-0" size={16} />
              <div className="leading-tight">
                <span className="text-white text-sm font-medium">{c.label}</span>
                <span className="text-white/40 text-xs ml-2">— {c.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Competências */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {competencias.map((c) => (
            <div
              key={c.titulo}
              className="border border-white/10 rounded-xl p-5 hover:border-cyan-400/30 transition-colors group"
              style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <c.icon className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={20} />
              <p className="text-white font-medium text-sm mb-1">{c.titulo}</p>
              <p className="text-white/40 text-xs leading-relaxed">{c.descricao}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
