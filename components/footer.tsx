"use client"

import { Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#infraestrutura", label: "Infraestrutura" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#contato", label: "Contato" },
]

const socialLinks = [
  { href: "https://instagram.com/nexus.infra.ti", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/caiocarvalhoc/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:contato@nexusti.tec.br", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-0.5 mb-4">
              <span className="font-mono text-lg font-bold text-[#fafafa] tracking-tight">
                Nexus TI
              </span>
              <span className="w-2.5 h-5 bg-[#33bbff] animate-[blink_1s_steps(1)_infinite]" aria-hidden="true" />
            </a>
            <p className="text-sm text-[#888888]">
              Infraestrutura de TI para empresas que não podem parar.
            </p>
            <p className="text-sm text-[#666666] mt-2">
              Av. Deputado Jamel Cecilio, 3310, Sala 301
            </p>
            <p className="text-sm text-[#666666]">
              Jardim Goiás — Goiânia/GO
            </p>
            {/* ✅ WhatsApp correto */}
            <a
              href="https://wa.me/5562998062169"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm text-[#33bbff] hover:text-[#33bbff]/80 transition-colors"
            >
              <img src="/whatsapp.svg" alt="" aria-hidden="true" className="h-4 w-4 flex-shrink-0" />
              (62) 99806-2169
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#fafafa] mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#888888] hover:text-[#00aaff] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-[#fafafa] mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#151515] border border-[#1a1a1a] flex items-center justify-center text-[#888888] hover:text-[#00aaff] hover:border-[#00aaff]/50 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            {/* ✅ E-mail visível */}
            <p className="text-xs text-[#666666] mt-4">contato@nexusti.tec.br</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#666666]">
            © {new Date().getFullYear()} Nexus TI. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-de-privacidade"
              className="text-xs text-[#666666] hover:text-[#33bbff] transition-colors"
            >
              Política de Privacidade
            </Link>
            <p className="text-xs text-[#666666]">CNPJ: 36.075.475/0001-94</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
