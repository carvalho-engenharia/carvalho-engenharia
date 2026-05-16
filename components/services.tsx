"use client"

import {
  Users,
  Server,
  Shield,
  Wifi,
  Database,
  Building2,
  Eye,
  Network,
  LayoutDashboard,
  Camera,
  Cable,
  KeyRound,
  Mail,
} from "lucide-react"

const services = [
  {
    title: "Terceirização de TI",
    description:
      "Gestão completa do parque tecnológico com suporte técnico L1/L2/L3 e manutenção preventiva. Ideal para empresas que querem foco total no core business.",
    icon: Users,
  },
  {
    title: "Suporte a Redes e Servidores",
    description:
      "Suporte técnico especializado em servidores físicos e em nuvem (AWS, Azure, GCP), virtualização e interligação de unidades com zero downtime.",
    icon: Server,
  },
  {
    title: "Active Directory & Identidade",
    description:
      "Implantação e administração de Active Directory com GPOs, DNS, DHCP e File Server. Gestão de usuários, permissões e políticas de segurança corporativa.",
    icon: KeyRound,
  },
  {
    title: "Office 365 e Microsoft 365",
    description:
      "Gestão completa do Microsoft 365: licenças, Exchange Online, SharePoint, Teams e segurança de identidade com Azure AD.",
    icon: Mail,
  },
  {
    title: "Segurança e Firewall Corporativo",
    description:
      "Proteção perimetral com Fortinet, pfSense e UDM-Pro. Controle de acesso, filtragem de conteúdo e auditoria contínua para sua empresa.",
    icon: Shield,
  },
  {
    title: "Wi-Fi Corporativo em Goiânia",
    description:
      "Redes Wi-Fi de alta densidade com roaming contínuo (UniFi, Aruba, Cisco), segmentação por VLANs e controle de autenticação.",
    icon: Wifi,
  },
  {
    title: "Migração de Data Center",
    description:
      "Planejamento e execução de migrações físicas e lógicas — rede, servidores, backup e acesso remoto — do zero ao go-live.",
    icon: Building2,
  },
  {
    title: "Backup & Disaster Recovery",
    description:
      "Proteção total com Veeam Backup & Replication. Estratégias de DR testadas, com RPO e RTO definidos em contrato.",
    icon: Database,
  },
  {
    title: "Monitoramento de Redes 24/7",
    description:
      "Monitoramento proativo de redes e servidores com Zabbix. Alertas automáticos, relatórios de disponibilidade e gestão de chamados via GLPI.",
    icon: Eye,
  },
  {
    title: "SD-WAN & Links Dedicados",
    description:
      "Balanceamento de carga, failover automático de links e VPNs IPsec site-to-site para múltiplas unidades sem interrupção.",
    icon: Network,
  },
  {
    title: "Help Desk com GLPI",
    description:
      "Implantação e gestão de sistema de chamados, controle de ativos, notificações e automações para equipes de TI.",
    icon: LayoutDashboard,
  },
  {
    title: "CFTV e Controle de Acesso",
    description:
      "Instalação de câmeras IP, NVRs, leitores biométricos e fechaduras eletromagnéticas integradas à rede corporativa.",
    icon: Camera,
  },
  {
    title: "Cabeamento Estruturado e Fibra Óptica",
    description:
      "Infraestrutura Cat5e/Cat6, GPON/EPON, OLT, DIO e conversores para ambientes corporativos de alta disponibilidade em Goiânia.",
    icon: Cable,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,170,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 tracking-tight">
            Suporte TI e Infraestrutura{" "}
            <span className="text-[#00aaff]">para Empresas</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto">
            Terceirização de TI completa, suporte técnico especializado e infraestrutura de redes para empresas em Goiânia que não podem parar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#0a0a0a]/50 border border-[#1a1a1a] hover:border-[#00aaff]/50 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#00aaff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#00aaff]/30 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-[#00aaff]" />
                </div>

                <h3 className="text-xl font-bold text-[#fafafa] mb-3 group-hover:text-[#00aaff] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#888888] group-hover:text-[#aaaaaa] transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}