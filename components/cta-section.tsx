"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Mail, Send, CheckCircle, Loader2 } from "lucide-react"


export function CTASection() {
  const [state, handleSubmit] = useForm("mojyrkgg")
  const [activeTab, setActiveTab] = useState<"quick" | "form">("quick")

  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#f9fafb] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#066bef]/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d283a] mb-6 text-balance">
            Pronto para{" "}
            <span className="text-[#066bef]">regularizar seu imóvel?</span>
          </h2>
          <p className="text-lg text-[#5a687c] max-w-2xl mx-auto text-balance">
            Entre em contato e descubra como podemos resolver a situação do seu imóvel com agilidade e segurança
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-white border border-[#e0e5eb] rounded-lg p-1 gap-1">
            <button
              onClick={() => setActiveTab("quick")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "quick"
                ? "bg-[#e0e5eb] text-[#1d283a]"
                : "text-[#5a687c] hover:text-[#1d283a]"
                }`}
            >
              Contato rápido
            </button>
            <button
              onClick={() => setActiveTab("form")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "form"
                ? "bg-[#e0e5eb] text-[#1d283a]"
                : "text-[#5a687c] hover:text-[#1d283a]"
                }`}
            >
              Formulário formal
            </button>
          </div>
        </div>

        {/* Quick contact */}
        {activeTab === "quick" && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#0559c7] text-white hover:bg-[#0559c7]/90 font-semibold px-10 py-7 text-lg shadow-[0_8px_24px_rgba(6,107,239,0.25)] hover:shadow-[0_10px_30px_rgba(6,107,239,0.35)] transition-all duration-300"
            >
              <a href="https://wa.me/5562998062169" target="_blank" rel="noopener noreferrer">
                <img src="/WhatsApp.svg" alt="" aria-hidden="true" className="mr-2 h-5 w-5 flex-shrink-0" />
                Chamar no WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#e0e5eb] bg-transparent text-[#1d283a] hover:bg-[#f9fafb] hover:border-[#066bef] px-8 py-7 text-lg transition-all duration-300"
            >
              <a href="mailto:contato@carvalho-engenharia.com">
                <Mail className="mr-2 h-5 w-5" />
                ou envie um e-mail
              </a>
            </Button>
          </div>
        )}

        {/* Formal form */}
        {activeTab === "form" && (
          <div className="bg-white border border-[#e0e5eb] rounded-2xl p-8 sm:p-10">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle className="w-14 h-14 text-[#0559c7]" />
                <h3 className="text-xl font-semibold text-[#1d283a]">Mensagem enviada!</h3>
                <p className="text-[#5a687c]">
                  Recebemos seu contato. Retornaremos em até 1 dia útil.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#5a687c] uppercase tracking-wider">
                      Nome *
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="Seu nome"
                      className="w-full bg-white border border-[#e0e5eb] rounded-lg px-4 py-3 text-[#1d283a] placeholder-[#8a94a3] text-sm focus:outline-none focus:border-[#066bef] transition-colors"
                    />
                    <ValidationError field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#5a687c] uppercase tracking-wider">
                      E-mail *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      className="w-full bg-white border border-[#e0e5eb] rounded-lg px-4 py-3 text-[#1d283a] placeholder-[#8a94a3] text-sm focus:outline-none focus:border-[#066bef] transition-colors"
                    />
                    <ValidationError field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#5a687c] uppercase tracking-wider">
                      Telefone
                    </label>
                    <input
                      name="phone"
                      placeholder="(62) 99999-9999"
                      className="w-full bg-white border border-[#e0e5eb] rounded-lg px-4 py-3 text-[#1d283a] placeholder-[#8a94a3] text-sm focus:outline-none focus:border-[#066bef] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#5a687c] uppercase tracking-wider">
                      Tipo de imóvel
                    </label>
                    <input
                      name="property_type"
                      placeholder="Residencial, Comercial..."
                      className="w-full bg-white border border-[#e0e5eb] rounded-lg px-4 py-3 text-[#1d283a] placeholder-[#8a94a3] text-sm focus:outline-none focus:border-[#066bef] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#5a687c] uppercase tracking-wider">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Descreva brevemente o que precisa (alvará, regularização, projeto, habite-se...)..."
                    className="w-full bg-white border border-[#e0e5eb] rounded-lg px-4 py-3 text-[#1d283a] placeholder-[#8a94a3] text-sm focus:outline-none focus:border-[#066bef] transition-colors resize-none"
                  />
                  <ValidationError field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#066bef] hover:bg-[#066bef]/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
                  >
                    {state.submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {state.submitting ? "Enviando..." : "Enviar mensagem"}
                  </button>
                  <p className="text-xs text-[#8a94a3]">Respondemos em até 1 dia útil</p>
                </div>
              </form>
            )}
          </div>
        )}

        <p className="text-sm text-[#5a687c] text-center mt-8">
          Atendimento em Goiânia, Aparecida de Goiânia e região · Seg–Sex das 8h às 18h (por agendamento)
        </p>
      </div>
    </section>
  )
}
