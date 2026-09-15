import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RequiredDocuments } from "@/components/required-documents"

export const metadata: Metadata = {
  title: "Documentação Necessária para Alvará e Regularização",
  description:
    "Veja os documentos exigidos pela Prefeitura de Goiânia para alvará de construção, regularização, habite-se, INSS de obra e averbação de construção.",
  alternates: {
    canonical: "https://www.carvalho-engenharia.com/documentacao-necessaria",
  },
  openGraph: {
    title: "Documentação Necessária para Alvará e Regularização | Carvalho Engenharia",
    description:
      "Veja os documentos exigidos pela Prefeitura de Goiânia para alvará de construção, regularização, habite-se, INSS de obra e averbação de construção.",
    type: "website",
    url: "https://www.carvalho-engenharia.com/documentacao-necessaria",
  },
}

export default function DocumentacaoNecessariaPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Navbar />

      <div className="pt-28 lg:pt-36 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-5xl mx-auto flex items-center gap-2 text-xs text-[#5a687c]">
          <Link href="/" className="hover:text-[#066bef] transition-colors">
            Início
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#1d283a]">Documentação Necessária</span>
        </nav>
      </div>

      <RequiredDocuments />

      <Footer />
    </main>
  )
}
