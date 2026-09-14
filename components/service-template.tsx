"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ClipboardList,
  Briefcase,
  Landmark,
  FileCheck2,
  PencilRuler,
  Wrench,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { ServiceData } from "@/lib/services-data"
import { services } from "@/lib/services-data"

const iconMap = {
  regularizacao: ClipboardList,
  despachante: Briefcase,
  averbacao: FileCheck2,
  inss: Landmark,
  arquitetonico: PencilRuler,
  estrutural: Wrench,
}

const WHATSAPP_NUMBER = "5562998062169"

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function ServiceTemplate({ data }: { data: ServiceData }) {
  const Icon = iconMap[data.icon]
  const related = services.filter((s) => data.relatedSlugs.includes(s.slug))
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 lg:pt-36 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-5xl mx-auto flex items-center gap-2 text-xs text-[#5a687c]">
          <Link href="/" className="hover:text-[#066bef] transition-colors">
            Início
          </Link>
          <ChevronRight size={12} />
          <Link href="/#servicos" className="hover:text-[#066bef] transition-colors">
            Serviços
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#1d283a]">{data.badge}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 shrink-0 rounded-lg bg-[#ecf4fe] border border-[#066bef]/25 flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#066bef]" />
            </div>
            <p className="text-[#066bef] text-sm font-mono uppercase tracking-widest">{data.badge}</p>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#1d283a] leading-tight max-w-3xl mb-6 text-balance">
            {data.h1}
          </h1>

          <p className="text-lg text-[#5a687c] max-w-2xl leading-relaxed mb-8 text-balance">{data.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#066bef] text-white hover:bg-[#0559c7] font-semibold shadow-[0_8px_24px_rgba(6,107,239,0.25)] hover:shadow-[0_10px_30px_rgba(6,107,239,0.35)] transition-all duration-300"
            >
              <a href={waLink(data.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar orçamento
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#e0e5eb] bg-white text-[#1d283a] hover:bg-[#f9fafb] hover:border-[#066bef] transition-all duration-300"
            >
              <a href="tel:+556298062169">(62) 9 9806-2169</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4">
        <div className="max-w-3xl mx-auto space-y-5 text-[#3d4c5f] text-base leading-relaxed">
          {data.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Content sections */}
      {data.sections.map((section, i) => (
        <section key={i} className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1d283a] mb-4">{section.heading}</h2>
            {section.paragraphs?.map((p, j) => (
              <p key={j} className="text-[#5a687c] leading-relaxed mb-3">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="flex flex-col gap-2.5 mt-2">
                {section.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[#3d4c5f] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#066bef] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* Steps */}
      {data.steps && (
        <section className="px-4 sm:px-6 lg:px-8 py-8 bg-white border-y border-[#e0e5eb]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1d283a] mb-6">Como funciona o processo</h2>
            <ol className="flex flex-col gap-4">
              {data.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-[#ecf4fe] border border-[#066bef]/30 text-[#066bef] text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-[#3d4c5f] leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Documents */}
      {data.documents && (
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1d283a] mb-2">Documentos geralmente exigidos</h2>
            <p className="text-[#5a687c] mb-6 leading-relaxed">
              A lista exata pode variar conforme o seu caso. Nós levantamos e organizamos tudo por você.
            </p>
            <ul className="flex flex-col gap-3">
              {data.documents.map((doc, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white border border-[#e0e5eb] rounded-xl p-4 text-sm text-[#3d4c5f] leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#066bef]" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-[#f9fafb]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1d283a] mb-6">Perguntas frequentes</h2>
          <div className="flex flex-col gap-3">
            {data.faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  className={`rounded-xl border bg-white transition-colors ${
                    isOpen ? "border-[#066bef]/40" : "border-[#e0e5eb]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-sm font-semibold text-[#1d283a]">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-[#5a687c] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#066bef]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 text-sm text-[#5a687c] leading-relaxed">{faq.answer}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#066bef]/25 bg-white p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-[#1d283a] mb-3 text-balance">
            Vamos resolver isso juntos?
          </h2>
          <p className="text-[#5a687c] mb-7 leading-relaxed max-w-xl mx-auto">
            Fale com um engenheiro responsável técnico e entenda os próximos passos para o seu caso — sem compromisso.
          </p>
          <a
            href={waLink(data.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#066bef] text-white font-bold text-sm hover:bg-[#0559c7] transition-all duration-300 shadow-[0_8px_24px_rgba(6,107,239,0.25)] hover:shadow-[0_10px_30px_rgba(6,107,239,0.35)]"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com um especialista
          </a>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold text-[#1d283a] mb-5">Serviços relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((s) => {
                const RelIcon = iconMap[s.icon]
                return (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="group flex items-start gap-3 p-5 rounded-xl bg-white border border-[#e0e5eb] hover:border-[#066bef]/40 transition-colors"
                  >
                    <RelIcon className="w-5 h-5 text-[#066bef] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1d283a] group-hover:text-[#066bef] transition-colors">
                        {s.badge}
                      </p>
                      <p className="text-xs text-[#5a687c] mt-1">Ver detalhes →</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
