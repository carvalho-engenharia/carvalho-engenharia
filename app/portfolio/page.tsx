import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Gallery } from "@/components/gallery"
import { Segments } from "@/components/segments"
import { ProjectsGallery } from "@/components/projects-gallery"

export const metadata: Metadata = {
  title: "Portfólio de Projetos e Obras",
  description:
    "Veja o portfólio da Carvalho Engenharia: projetos residenciais, comerciais e industriais, levantamentos em campo e projetos técnicos aprovados em Goiânia.",
  alternates: {
    canonical: "https://www.carvalho-engenharia.com/portfolio",
  },
  openGraph: {
    title: "Portfólio de Projetos e Obras | Carvalho Engenharia",
    description:
      "Veja o portfólio da Carvalho Engenharia: projetos residenciais, comerciais e industriais, levantamentos em campo e projetos técnicos aprovados em Goiânia.",
    type: "website",
    url: "https://www.carvalho-engenharia.com/portfolio",
  },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Navbar />

      <div className="pt-28 lg:pt-36 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-[#5a687c]">
          <Link href="/" className="hover:text-[#066bef] transition-colors">
            Início
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#1d283a]">Portfólio</span>
        </nav>
      </div>

      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1d283a] mb-4 tracking-tight text-balance">
            Portfólio completo de projetos e obras
          </h1>
          <p className="text-[#5a687c] max-w-2xl mx-auto text-lg">
            Levantamentos em campo, segmentos atendidos e projetos técnicos desenvolvidos e assinados pela Carvalho
            Engenharia.
          </p>
        </div>
      </section>

      <Gallery />
      <Segments />
      <ProjectsGallery />

      <Footer />
    </main>
  )
}
