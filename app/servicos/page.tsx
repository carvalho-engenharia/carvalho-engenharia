import type { Metadata } from "next"
import Link from "next/link"
import {
  ClipboardList,
  Briefcase,
  Landmark,
  FileCheck2,
  PencilRuler,
  Wrench,
  Calculator,
  HardHat,
  MessageCircle,
  Stamp,
  Layers,
  FileText,
  Search,
  ClipboardCheck,
  ChevronRight,
  ArrowRight,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getServiceBySlug } from "@/lib/services-data"

const iconMap = {
  regularizacao: ClipboardList,
  despachante: Briefcase,
  averbacao: FileCheck2,
  inss: Landmark,
  arquitetonico: PencilRuler,
  estrutural: Wrench,
  avaliador: Calculator,
  consultoria: MessageCircle,
  desmembramento: Layers,
  art: Stamp,
  obra: HardHat,
  projetos: ClipboardCheck,
  alvara: FileText,
  vistoria: Search,
}

const categories = [
  {
    slug: "regularizacao-e-habite-se",
    icon: ClipboardList,
    title: "Regularização e Habite-se",
    description: "Colocar o imóvel em dia junto à Prefeitura, do alvará à averbação final.",
    slugs: [
      "regularizacao-de-imoveis-goiania",
      "alvara-de-construcao-e-habite-se-goiania",
      "desmembramento-remembramento-goiania",
      "averbacao-de-imovel-goiania",
    ],
  },
  {
    slug: "despachante-e-cartorio",
    icon: Briefcase,
    title: "Despachante e Cartório",
    description: "Toda a tramitação documental em cartórios, prefeituras e Receita Federal.",
    slugs: ["despachante-imobiliario-goiania", "inss-de-obra-goiania"],
  },
  {
    slug: "laudos-e-avaliacoes",
    icon: Calculator,
    title: "Laudos e Avaliações",
    description: "Pareceres técnicos com responsabilidade CREA para decisões seguras.",
    slugs: [
      "avaliador-de-imovel-goiania",
      "vistoria-tecnica-de-imovel-goiania",
      "consultoria-engenharia-civil-goiania",
    ],
  },
  {
    slug: "projetos-e-art",
    icon: PencilRuler,
    title: "Projetos e ART",
    description: "Projetos de engenharia, gerenciamento de obra e emissão de ART.",
    slugs: [
      "gerenciamento-de-projetos-goiania",
      "projeto-estrutural-goiania",
      "projeto-arquitetonico-goiania",
      "gerenciamento-de-obra-goiania",
      "emissao-de-art-goiania",
    ],
  },
]

export const metadata: Metadata = {
  title: "Serviços de Engenharia e Regularização de Imóveis",
  description:
    "Conheça os 14 serviços da Carvalho Engenharia em Goiânia: regularização de imóveis, despachante imobiliário, laudos e avaliações, projetos e ART.",
  alternates: {
    canonical: "https://www.carvalho-engenharia.com/servicos",
  },
  openGraph: {
    title: "Serviços de Engenharia e Regularização de Imóveis | Carvalho Engenharia",
    description:
      "Conheça os 14 serviços da Carvalho Engenharia em Goiânia: regularização de imóveis, despachante imobiliário, laudos e avaliações, projetos e ART.",
    type: "website",
    url: "https://www.carvalho-engenharia.com/servicos",
  },
}

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb]">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 lg:pt-36 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-[#5a687c]">
          <Link href="/" className="hover:text-[#066bef] transition-colors">
            Início
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#1d283a]">Serviços</span>
        </nav>
      </div>

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-[#066bef] uppercase mb-4">Nossos Serviços</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1d283a] mb-4 tracking-tight text-balance">
            Soluções completas em engenharia e regularização
          </h1>
          <p className="text-[#5a687c] max-w-2xl mx-auto text-lg">
            14 serviços organizados em 4 áreas. Escolha a categoria que mais se aproxima da sua necessidade.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category) => (
        <section key={category.slug} id={category.slug} className="px-4 sm:px-6 lg:px-8 py-10 scroll-mt-28">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 shrink-0 rounded-lg bg-[#ecf4fe] border border-[#066bef]/25 flex items-center justify-center">
                <category.icon className="w-5 h-5 text-[#066bef]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1d283a]">{category.title}</h2>
            </div>
            <p className="text-[#5a687c] mb-8 ml-14">{category.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.slugs.map((slug) => {
                const data = getServiceBySlug(slug)
                if (!data) return null
                const Icon = iconMap[data.icon]
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="group relative p-7 rounded-2xl bg-white border border-[#e0e5eb] hover:border-[#066bef]/50 transition-all duration-500"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#f9fafb] border border-[#e0e5eb] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#066bef]/30 transition-all duration-500">
                      <Icon className="w-5 h-5 text-[#066bef]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1d283a] group-hover:text-[#066bef] transition-colors mb-2">
                      {data.badge}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5a687c] mb-5 line-clamp-3">{data.subtitle}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#066bef]">
                      Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#066bef]/25 bg-white p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-[#1d283a] mb-3 text-balance">Não sabe qual serviço precisa?</h2>
          <p className="text-[#5a687c] mb-7 leading-relaxed max-w-xl mx-auto">
            Fale com um engenheiro responsável técnico e descubra o caminho mais rápido para o seu caso — sem
            compromisso.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5562998062169&text=Ol%C3%A1%2C%20quero%20saber%20qual%20servi%C3%A7o%20preciso%20contratar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#066bef] text-white font-bold text-sm hover:bg-[#0559c7] transition-all duration-300 shadow-[0_8px_24px_rgba(6,107,239,0.25)] hover:shadow-[0_10px_30px_rgba(6,107,239,0.35)]"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com um especialista
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
