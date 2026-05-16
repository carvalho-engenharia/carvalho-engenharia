"use client"

import { Check, Minus, Monitor, MessageCircle } from "lucide-react"

const plans = [
  {
    name: "Starter",
    tag: null,
    subtitle: "Pequenos negócios",
    price: "490",
    machines: "até 5 máquinas",
    priceNote: "a partir de",
    features: [
      { text: "Suporte remoto Nível 1 e Nível 2", included: true },
      { text: "Horário comercial (8h–18h)", included: true },
      { text: "Active Directory + GPO básico", included: true },
      { text: "Backup monitorado", included: true },
      { text: "Firewall gerenciado", included: true },
      { text: "2 visitas presenciais/mês", included: true },
      { text: "Monitoramento 24/7", included: false },
    ],
    cta: "Solicitar proposta",
    featured: false,
  },
  {
    name: "Business",
    tag: "Mais popular",
    subtitle: "PMEs em crescimento",
    price: "990",
    machines: "até 15 máquinas",
    priceNote: "a partir de",
    features: [
      { text: "Suporte remoto Nível 1, 2 e 3", included: true },
      { text: "Monitoramento 24/7", included: true },
      { text: "Active Directory + GPO", included: true },
      { text: "Backup + Disaster Recovery", included: true },
      { text: "Firewall gerenciado", included: true },
      { text: "4 visitas presenciais/mês", included: true },
      { text: "Relatório mensal", included: true },
    ],
    cta: "Solicitar proposta",
    featured: true,
  },
  {
    name: "Enterprise",
    tag: null,
    subtitle: "Empresas consolidadas",
    price: "1.990",
    machines: "até 40 máquinas",
    priceNote: "a partir de",
    features: [
      { text: "Tudo do plano Business", included: true },
      { text: "SLA em contrato", included: true },
      { text: "Firewall gerenciado avançado", included: true },
      { text: "Active Directory + GPO avançado", included: true },
      { text: "Visitas presenciais ilimitadas", included: true },
      { text: "GLPI + gestão de chamados", included: true },
    ],
    cta: "Solicitar proposta",
    featured: false,
  },
  {
    name: "Custom",
    tag: null,
    subtitle: "Grandes operações",
    price: null,
    machines: "40+ máquinas",
    priceNote: "sob consulta",
    features: [
      { text: "Tudo do plano Enterprise", included: true },
      { text: "Equipe dedicada", included: true },
      { text: "Multi-unidades / filiais", included: true },
      { text: "SD-WAN + VPN site-to-site", included: true },
      { text: "Adequação à LGPD", included: true },
      { text: "Projeto totalmente personalizado", included: true },
    ],
    cta: "Falar no WhatsApp",
    featured: false,
    isCustom: true,
  },
]

export function PricingPlans() {
  return (
    <section id="planos" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,170,255,0.05)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00aaff]/30 bg-[#00aaff]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#00aaff] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#00aaff] font-semibold font-mono">
              // suporte gerenciado
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 tracking-tight">
            Planos de{" "}
            <span className="text-[#00aaff]">Suporte Mensal</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto text-lg">
            Suporte técnico previsível, sem surpresas no bolso. Escolha o plano ideal para o tamanho da sua operação.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col rounded-2xl border transition-all duration-500 ${
                plan.featured
                  ? "border-[#00aaff]/60 bg-[#0a0f14] shadow-[0_0_40px_rgba(0,170,255,0.12)]"
                  : "border-[#1a1a1a] bg-[#0a0a0a]/50 hover:border-[#00aaff]/30 hover:shadow-[0_0_30px_rgba(0,170,255,0.06)]"
              }`}
            >
              {/* Featured badge */}
              {plan.tag && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-[#00aaff] text-[#080808] font-mono whitespace-nowrap">
                    {plan.tag}
                  </span>
                </div>
              )}

              {/* Hover glow overlay */}
              <div
                className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                  plan.featured
                    ? "opacity-100 bg-[#00aaff]/5"
                    : "opacity-0 group-hover:opacity-100 bg-[#00aaff]/3"
                }`}
              />

              <div className="relative z-10 flex flex-col flex-1 p-7">
                {/* Plan header */}
                <div className="mb-6">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#00aaff] mb-1">
                    {plan.name}
                  </p>
                  <p className="text-sm text-[#666666]">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <p className="text-[11px] font-mono text-[#555555] uppercase tracking-wider mb-1">
                    {plan.priceNote}
                  </p>
                  {plan.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-[#888888]">R$</span>
                      <span className="text-4xl font-bold text-[#fafafa] font-mono leading-none">
                        {plan.price}
                      </span>
                      <span className="text-sm text-[#555555]">/mês</span>
                    </div>
                  ) : (
                    <p className="text-2xl font-bold text-[#fafafa] font-mono">Sob proposta</p>
                  )}
                </div>

                {/* Machines badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#1a1a1a] bg-[#111111] mb-6 self-start">
                  <Monitor className="w-3.5 h-3.5 text-[#555555]" />
                  <span className="text-[11px] font-mono text-[#666666]">{plan.machines}</span>
                </div>

                {/* Divider */}
                <div className="border-t border-[#1a1a1a] mb-6" />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2.5">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-[#00aaff] flex-shrink-0 mt-0.5" />
                      ) : (
                        <Minus className="w-4 h-4 text-[#333333] flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm leading-snug ${
                          feature.included ? "text-[#aaaaaa]" : "text-[#444444]"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.isCustom ? (
                  <a
                    href="https://wa.me/5562998062169"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-[#1a1a1a] bg-transparent text-[#888888] hover:border-[#00aaff]/40 hover:text-[#00aaff] hover:bg-[#00aaff]/5 transition-all duration-300 text-sm font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {plan.cta}
                  </a>
                ) : plan.featured ? (
                  <a
                    href="#contato"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#00aaff] text-[#080808] hover:bg-[#33bbff] transition-all duration-300 text-sm font-semibold shadow-[0_0_20px_rgba(0,170,255,0.3)] hover:shadow-[0_0_30px_rgba(0,170,255,0.5)]"
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <a
                    href="#contato"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-[#1a1a1a] bg-transparent text-[#888888] hover:border-[#00aaff]/40 hover:text-[#00aaff] hover:bg-[#00aaff]/5 transition-all duration-300 text-sm font-medium"
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[#444444] text-xs font-mono mt-10">
          * Servidores contam como 2 máquinas. Máquina adicional: R$ 79/unid./mês.
          Valores base para Goiânia — podem variar conforme complexidade do ambiente.
        </p>
      </div>
    </section>
  )
}
