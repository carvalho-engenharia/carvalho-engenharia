"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Mail, Send, CheckCircle, Loader2 } from "lucide-react"


export function CTASection() {
  const [state, handleSubmit] = useForm("mojyrkgg")
  const [activeTab, setActiveTab] = useState<"quick" | "form">("quick")

  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#00aaff]/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fafafa] mb-6 text-balance">
            Pronto para ter uma{" "}
            <span className="text-[#00aaff]">infraestrutura de verdade?</span>
          </h2>
          <p className="text-lg text-[#888888] max-w-2xl mx-auto text-balance">
            Entre em contato e descubra como podemos transformar a TI da sua empresa
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-[#111111] border border-[#1a1a1a] rounded-lg p-1 gap-1">
            <button
              onClick={() => setActiveTab("quick")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "quick"
                ? "bg-[#1a1a1a] text-[#fafafa]"
                : "text-[#666666] hover:text-[#888888]"
                }`}
            >
              Contato rápido
            </button>
            <button
              onClick={() => setActiveTab("form")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === "form"
                ? "bg-[#1a1a1a] text-[#fafafa]"
                : "text-[#666666] hover:text-[#888888]"
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
              className="bg-[#33bbff] text-[#080808] hover:bg-[#33bbff]/90 font-semibold px-10 py-7 text-lg shadow-[0_0_30px_rgba(51,187,255,0.4)] hover:shadow-[0_0_40px_rgba(51,187,255,0.6)] transition-all duration-300"
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
              className="border-[#1a1a1a] bg-transparent text-[#fafafa] hover:bg-[#151515] hover:border-[#00aaff] px-8 py-7 text-lg transition-all duration-300"
            >
              <a href="mailto:contato@nexusti.tec.br">
                <Mail className="mr-2 h-5 w-5" />
                ou envie um e-mail
              </a>
            </Button>
          </div>
        )}

        {/* Formal form */}
        {activeTab === "form" && (
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-8 sm:p-10">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle className="w-14 h-14 text-[#33bbff]" />
                <h3 className="text-xl font-semibold text-[#fafafa]">Mensagem enviada!</h3>
                <p className="text-[#888888]">
                  Recebemos seu contato. Retornaremos em até 1 dia útil.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">
                      Nome *
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="Seu nome"
                      className="w-full bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#444444] text-sm focus:outline-none focus:border-[#00aaff] transition-colors"
                    />
                    <ValidationError field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">
                      E-mail *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      className="w-full bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#444444] text-sm focus:outline-none focus:border-[#00aaff] transition-colors"
                    />
                    <ValidationError field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">
                      Telefone
                    </label>
                    <input
                      name="phone"
                      placeholder="(62) 99999-9999"
                      className="w-full bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#444444] text-sm focus:outline-none focus:border-[#00aaff] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">
                      Empresa
                    </label>
                    <input
                      name="company"
                      placeholder="Nome da empresa"
                      className="w-full bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#444444] text-sm focus:outline-none focus:border-[#00aaff] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Descreva brevemente o que sua empresa precisa..."
                    className="w-full bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#444444] text-sm focus:outline-none focus:border-[#00aaff] transition-colors resize-none"
                  />
                  <ValidationError field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#00aaff] hover:bg-[#00aaff]/90 disabled:opacity-50 disabled:cursor-not-allowed text-[#080808] font-semibold px-8 py-3 rounded-lg transition-all duration-200"
                  >
                    {state.submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {state.submitting ? "Enviando..." : "Enviar mensagem"}
                  </button>
                  <p className="text-xs text-[#444444]">Respondemos em até 1 dia útil</p>
                </div>
              </form>
            )}
          </div>
        )}

        <p className="text-sm text-[#666666] text-center mt-8">
          Atendimento em Goiânia, Aparecida de Goiânia e região
        </p>
      </div>
    </section>
  )
}
