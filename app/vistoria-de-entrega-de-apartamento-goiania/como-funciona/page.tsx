import type { Metadata } from "next"
import { VEShell, veMetadata } from "@/components/vistoria-entrega/ve-shell"
import { StepsList } from "@/components/vistoria-entrega/ve-blocks"
import { VE_BASE, veFaqs } from "@/lib/vistoria-entrega-data"
import { paymentFaq } from "@/lib/services-data"
import { PaymentMethodsLine } from "@/components/payment-methods"

export const metadata: Metadata = veMetadata(
  `${VE_BASE}/como-funciona`,
  "Como Funciona a Vistoria de Entrega e o Laudo",
  "Passo a passo da vistoria de entrega de apartamento em Goiânia: agendamento, vistoria com equipamentos, laudo com fotos e ART e cobrança dos reparos à construtora.",
)

const faqs = [...veFaqs, paymentFaq]

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function Page() {
  return (
    <VEShell
      active="como-funciona"
      crumb="Como funciona"
      badge="Vistoria de Entrega · Laudo com ART"
      title="Como funciona a vistoria e o laudo"
      subtitle="Do agendamento ao laudo com ART: o que acontece em cada etapa e como usar o laudo para cobrar os reparos da construtora."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-3xl">
        <StepsList />
        <div className="mt-6">
          <PaymentMethodsLine />
        </div>

        <h2 className="text-2xl font-bold text-[#1d283a] mt-14 mb-6">Perguntas frequentes</h2>
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details key={f.question} className="group rounded-xl border border-[#e0e5eb] bg-white open:border-[#066bef]/40">
              <summary className="cursor-pointer list-none p-5 text-sm font-semibold text-[#1d283a]">{f.question}</summary>
              <p className="px-5 pb-5 text-sm text-[#5a687c] leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </VEShell>
  )
}
