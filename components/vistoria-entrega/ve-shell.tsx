import Link from "next/link"
import { ChevronRight, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VENav } from "@/components/vistoria-entrega/ve-blocks"
import { VE_BASE, veWhatsappMessage } from "@/lib/vistoria-entrega-data"

const WHATSAPP_NUMBER = "5562998062169"
const waLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(veWhatsappMessage)}`

// Moldura das subpáginas de vistoria de entrega (usadas como sitelinks no Google Ads).
export function VEShell({
  active,
  crumb,
  badge,
  title,
  subtitle,
  children,
}: {
  active: string
  crumb: string
  badge: string
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Navbar />

      <div className="pt-28 lg:pt-36 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-xs text-[#5a687c]">
          <Link href="/" className="hover:text-[#066bef] transition-colors">
            Início
          </Link>
          <ChevronRight size={12} />
          <Link href={VE_BASE} className="hover:text-[#066bef] transition-colors">
            Vistoria de Entrega
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#1d283a]">{crumb}</span>
        </nav>
      </div>

      <section className="px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 pb-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#066bef] text-sm font-mono uppercase tracking-widest mb-4">{badge}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1d283a] leading-tight max-w-3xl mb-4 text-balance">
            {title}
          </h1>
          <p className="text-base md:text-lg text-[#5a687c] max-w-2xl leading-relaxed mb-6 text-balance">{subtitle}</p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#066bef] text-white font-semibold text-sm hover:bg-[#0559c7] transition-colors shadow-[0_8px_24px_rgba(6,107,239,0.25)]"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar vistoria no WhatsApp
          </a>
        </div>
      </section>

      <div className="pb-6">
        <VENav active={active} />
      </div>

      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">{children}</div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#066bef]/25 bg-white p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-[#1d283a] mb-3 text-balance">Vai receber as chaves?</h2>
          <p className="text-[#5a687c] mb-7 leading-relaxed max-w-xl mx-auto">
            Agende a vistoria antes de assinar o termo de recebimento. Engenheiro civil com CREA, laudo com fotos e ART.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#066bef] text-white font-bold text-sm hover:bg-[#0559c7] transition-colors shadow-[0_8px_24px_rgba(6,107,239,0.25)]"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com o engenheiro
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export function veMetadata(path: string, title: string, description: string) {
  const url = `https://www.carvalho-engenharia.com${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: "website" as const, url },
  }
}
