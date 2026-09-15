import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DocumentsGallery } from "@/components/documents-gallery"

export const metadata: Metadata = {
  title: "Alvarás e Certidões Emitidos",
  description:
    "Exemplos de alvarás de construção, regularização e certidões emitidos pela Carvalho Engenharia junto à Prefeitura de Goiânia.",
  alternates: {
    canonical: "https://www.carvalho-engenharia.com/alvaras-emitidos",
  },
  openGraph: {
    title: "Alvarás e Certidões Emitidos | Carvalho Engenharia",
    description:
      "Exemplos de alvarás de construção, regularização e certidões emitidos pela Carvalho Engenharia junto à Prefeitura de Goiânia.",
    type: "website",
    url: "https://www.carvalho-engenharia.com/alvaras-emitidos",
  },
}

export default function AlvarasEmitidosPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Navbar />

      <div className="pt-28 lg:pt-36 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-[#5a687c]">
          <Link href="/" className="hover:text-[#066bef] transition-colors">
            Início
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#1d283a]">Alvarás Emitidos</span>
        </nav>
      </div>

      <DocumentsGallery />

      <Footer />
    </main>
  )
}
