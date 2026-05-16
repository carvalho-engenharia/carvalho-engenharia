"use client"

import {
  Wifi,
  HardDrive,
  Server,
  ShieldAlert,
  Wrench,
  Network,
  Clock,
  DatabaseBackup,
  MessageCircle,
  ArrowRight,
} from "lucide-react"

const problems = [
  {
    icon: Wifi,
    question: "A internet da sua empresa cai toda hora?",
    description:
      "Queda de link, Wi-Fi instável, VPN que desconecta. Esses problemas têm causa técnica identificável — roteador mal configurado, ausência de balanceamento ou falha no firewall. Diagnosticamos e resolvemos com SLA definido.",
    keywords: "internet caindo, Wi-Fi corporativo ruim, VPN instável",
  },
  {
    icon: DatabaseBackup,
    question: "Perdeu dados importantes e não tinha backup?",
    description:
      "Perda de arquivos por falha de HD, ransomware ou exclusão acidental. Implantamos estratégias de Backup & Disaster Recovery com Veeam, com RPO e RTO definidos em contrato para sua operação nunca parar.",
    keywords: "perda de dados, recuperação de desastre, backup empresarial",
  },
  {
    icon: Server,
    question: "Servidor lento, travando ou fora do ar?",
    description:
      "Servidor sobrecarregado, disco cheio ou hardware obsoleto impactam toda a operação. Fazemos diagnóstico completo, upgrade, virtualização ou migração para nuvem — sem downtime para sua equipe.",
    keywords: "servidor lento, servidor travando, servidor fora do ar",
  },
  {
    icon: ShieldAlert,
    question: "Medo de vírus, ransomware ou invasão?",
    description:
      "PMEs são o principal alvo de ataques cibernéticos no Brasil. Implementamos proteção em camadas: firewall corporativo, controle de acesso, Active Directory com GPO e monitoramento 24/7 para blindar sua rede.",
    keywords: "vírus empresa, ransomware, segurança da informação Goiânia",
  },
  {
    icon: Wrench,
    question: "Precisa instalar ou migrar para um servidor novo?",
    description:
      "Implantação de servidores físicos ou virtuais (VMware, Hyper-V, Proxmox), configuração de Windows Server, Active Directory, DNS e DHCP. Entregamos o ambiente completo, documentado e pronto para uso.",
    keywords: "instalação de servidor, servidor novo empresa, migração de servidor",
  },
  {
    icon: Network,
    question: "Rede cabeada ou Wi-Fi precisando de manutenção?",
    description:
      "Cabeamento desorganizado, pontos de rede com falha, switches sem gerenciamento. Realizamos manutenção preventiva e corretiva de redes com cabeamento Cat5e/Cat6 e fibra óptica para ambientes corporativos.",
    keywords: "manutenção de rede, cabeamento estruturado Goiânia, rede corporativa",
  },
  {
    icon: HardDrive,
    question: "TI sem controle? Sem inventário de ativos?",
    description:
      "Equipamentos sem controle, licenças vencidas, colaboradores sem suporte. Implantamos gestão de ativos com GLPI, helpdesk estruturado e relatórios mensais para você ter visibilidade total do seu ambiente.",
    keywords: "gestão de TI, inventário de TI, helpdesk empresarial",
  },
  {
    icon: Clock,
    question: "Suporte de TI que demora horas para responder?",
    description:
      "Cada hora parado é prejuízo. Oferecemos atendimento com SLA definido, suporte remoto imediato e visitas presenciais em Goiânia e região. Você fala direto com o especialista — sem call center, sem fila.",
    keywords: "suporte TI Goiânia, suporte técnico empresarial, TI terceirizada Goiânia",
  },
]

export function PainPoints() {
  return (
    <section
      id="problemas"
      className="py-24 sm:py-32 bg-[#060606] relative overflow-hidden border-t border-[#111111]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[500px] rounded-full bg-[#00aaff]/4 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00aaff]/30 bg-[#00aaff]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#00aaff] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#00aaff] font-semibold font-mono">
              // problemas que resolvemos
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 tracking-tight text-balance">
            Sua empresa passa por{" "}
            <span className="text-[#00aaff]">algum desses problemas?</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto text-lg text-balance">
            Problemas de TI têm solução. Veja os casos mais comuns que atendemos em Goiânia e como resolvemos cada um.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-[#0a0a0a]/60 border border-[#1a1a1a] hover:border-[#00aaff]/40 hover:shadow-[0_0_30px_rgba(0,170,255,0.07)] transition-all duration-500 flex flex-col"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#00aaff]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center mb-4 group-hover:border-[#00aaff]/30 group-hover:bg-[#00aaff]/10 transition-all duration-500">
                  <problem.icon className="w-5 h-5 text-[#00aaff]" />
                </div>

                {/* Question — SEO: H3 com pergunta real */}
                <h3 className="text-sm font-semibold text-[#fafafa] mb-3 leading-snug group-hover:text-[#00aaff] transition-colors duration-300">
                  {problem.question}
                </h3>

                {/* Answer */}
                <p className="text-xs text-[#666666] leading-relaxed group-hover:text-[#888888] transition-colors duration-300 flex-1">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — Diagnóstico gratuito */}
        <div className="relative rounded-2xl border border-[#00aaff]/25 bg-[#0a0f14] overflow-hidden">
          {/* Glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,170,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aaff]/40 to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-14">
            {/* Left */}
            <div className="text-center lg:text-left max-w-xl">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#00aaff] mb-3">
                // diagnóstico gratuito
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#fafafa] mb-3 leading-tight">
                Não sabe exatamente o que está errado na sua rede?
              </h3>
              <p className="text-[#888888] text-base leading-relaxed">
                Solicite um <strong className="text-[#fafafa] font-semibold">diagnóstico gratuito</strong> do seu ambiente de TI.
                Analisamos sua rede, servidores e infraestrutura e entregamos um relatório com os pontos críticos —{" "}
                <span className="text-[#00aaff]">sem compromisso</span>.
              </p>

              <ul className="mt-5 flex flex-col sm:flex-row gap-3 text-sm text-[#888888] justify-center lg:justify-start">
                {["Análise sem custo", "Relatório detalhado", "Atendimento presencial em Goiânia"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00aaff] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — CTAs */}
            <div className="flex flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href="https://wa.me/5562998062169?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito%20da%20minha%20rede"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#00aaff] text-[#080808] font-bold text-sm hover:bg-[#33bbff] transition-all duration-300 shadow-[0_0_30px_rgba(0,170,255,0.4)] hover:shadow-[0_0_45px_rgba(0,170,255,0.6)] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar diagnóstico gratuito
              </a>
              <a
                href="#contato"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-[#1a1a1a] text-[#888888] text-sm font-medium hover:border-[#00aaff]/40 hover:text-[#00aaff] hover:bg-[#00aaff]/5 transition-all duration-300 whitespace-nowrap"
              >
                Ou envie uma mensagem
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
