"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#vantagens", label: "Vantagens" },
    { href: "#sobre", label: "Quem Somos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <>
      {/* Barra de contato superior */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#050505] border-b border-[#1a1a1a] hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 h-9 text-xs text-[#666666]">
            <a
              href="tel:+556298062169"
              className="flex items-center gap-1.5 hover:text-[#00aaff] transition-colors"
            >
              <Phone size={12} />
              (62) 9 9806-2169
            </a>
            <span className="text-[#2a2a2a]">|</span>
            <a
              href="mailto:carvalhoeng@outlook.com.br"
              className="flex items-center gap-1.5 hover:text-[#00aaff] transition-colors"
            >
              <Mail size={12} />
              carvalhoeng@outlook.com.br
            </a>
            <span className="text-[#2a2a2a]">|</span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#00aaff]/40 bg-[#00aaff]/10 text-[#00aaff] font-semibold tracking-wide shadow-[0_0_12px_rgba(0,170,255,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00aaff] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00aaff]" />
              </span>
              CREA 1017786453D-GO
            </span>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 lg:top-9 top-0 ${
          isScrolled
            ? "bg-[#080808]/80 backdrop-blur-xl border-b border-[#1a1a1a] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_carv.png"
                alt="Carvalho Engenharia"
                className="h-16 w-auto sm:h-20 object-contain"
                style={{ mixBlendMode: "lighten" }}
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#888888] hover:text-[#fafafa] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-[#00aaff] text-[#080808] hover:bg-[#00aaff]/90 font-semibold shadow-[0_0_25px_rgba(0,170,255,0.5)] hover:shadow-[0_0_40px_rgba(0,170,255,0.7)] transition-all duration-300"
              >
                <a href="https://wa.me/5562998062169" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#fafafa]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-[#222222]">
              <div className="flex flex-col gap-4">
                {/* Contato mobile */}
                <div className="flex flex-col gap-2 pb-3 border-b border-[#1a1a1a] text-xs text-[#666666]">
                  <a href="tel:+556298062169" className="flex items-center gap-2 hover:text-[#00aaff] transition-colors">
                    <Phone size={12} /> (62) 9 9806-2169
                  </a>
                  <a href="mailto:carvalhoeng@outlook.com.br" className="flex items-center gap-2 hover:text-[#00aaff] transition-colors">
                    <Mail size={12} /> carvalhoeng@outlook.com.br
                  </a>
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00aaff]/40 bg-[#00aaff]/10 text-[#00aaff] font-semibold text-xs self-start shadow-[0_0_10px_rgba(0,170,255,0.2)]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00aaff] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00aaff]" />
                    </span>
                    CREA 1017786453D-GO
                  </span>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[#888888] hover:text-[#fafafa] transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="bg-[#00aaff] text-[#0a0a0a] hover:bg-[#00aaff]/90 font-medium mt-2 shadow-[0_0_20px_rgba(0,170,255,0.4)]"
                >
                  <a
                    href="https://wa.me/5562998062169"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
