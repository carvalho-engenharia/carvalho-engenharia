import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Sobre } from "@/components/sobre"

export const metadata: Metadata = {
  title: "Sobre — Caio Maracaípe, Engenheiro Civil",
  description:
    "Conheça Caio Maracaípe, Engenheiro Civil (CREA 1017786453D-GO) à frente da Carvalho Engenharia, com mais de 10 anos regularizando imóveis e aprovando projetos em Goiânia.",
  alternates: {
    canonical: "https://www.carvalho-engenharia.com/sobre",
  },
  openGraph: {
    title: "Sobre — Caio Maracaípe, Engenheiro Civil | Carvalho Engenharia",
    description:
      "Conheça Caio Maracaípe, Engenheiro Civil (CREA 1017786453D-GO) à frente da Carvalho Engenharia, com mais de 10 anos regularizando imóveis e aprovando projetos em Goiânia.",
    type: "website",
    url: "https://www.carvalho-engenharia.com/sobre",
  },
}

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-28 lg:pt-36 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-[#5a687c]">
          <Link href="/" className="hover:text-[#066bef] transition-colors">
            Início
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#1d283a]">Sobre</span>
        </nav>
      </div>

      <Sobre />

      <Footer />
    </main>
  )
}
