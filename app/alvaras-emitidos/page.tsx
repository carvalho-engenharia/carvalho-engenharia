import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DocumentsGallery } from "@/components/documents-gallery"

// Tipos de alvará explicados na página, cada um com link para a página de serviço correspondente.
const alvaraTypes = [
  {
    title: "Alvará de Construção",
    href: "/alvara-de-construcao-e-habite-se-goiania",
    linkLabel: "Alvará de construção e Habite-se em Goiânia",
    text: "É a licença da Prefeitura que autoriza o início de uma obra. Antes de emiti-lo, a Prefeitura confere se o projeto atende ao Plano Diretor, à Lei de Uso e Ocupação do Solo e ao Código de Obras de Goiânia. Ao fim da obra, o Habite-se atesta que a edificação foi construída conforme o aprovado.",
  },
  {
    title: "Alvará de Regularização",
    href: "/regularizacao-de-imoveis-goiania",
    linkLabel: "Regularização de imóveis em Goiânia",
    text: "É o caminho para construções feitas sem alvará ou diferentes do projeto aprovado. Parte de um levantamento técnico do que existe hoje e termina com a construção reconhecida pela Prefeitura e averbada na matrícula, liberando venda, financiamento e inventário.",
  },
  {
    title: "Alvará de Localização e Funcionamento",
    href: "/alvara-de-funcionamento-goiania",
    linkLabel: "Alvará de funcionamento em Goiânia",
    text: "Autoriza uma empresa a exercer a sua atividade em um endereço específico. Depende de a atividade ser permitida naquela zona da cidade e de o imóvel estar regular, que é onde a maior parte dos pedidos trava.",
  },
  {
    title: "Alvará Sanitário",
    href: "/alvara-sanitario-goiania",
    linkLabel: "Alvará sanitário em Goiânia",
    text: "Emitido pela Vigilância Sanitária, atesta que clínicas, consultórios, restaurantes, salões e outros estabelecimentos de interesse à saúde atendem às normas de higiene e segurança. Para várias atividades, exige a análise de um projeto do espaço físico antes da vistoria.",
  },
  {
    title: "Alvará de Reforma",
    href: "/alvara-de-reforma-goiania",
    linkLabel: "Alvará de reforma em Goiânia",
    text: "Necessário quando a reforma altera a área construída, a estrutura, a fachada ou a planta aprovada. Sem ele, a área nova não pode ser averbada e o imóvel passa a ter divergência entre o que existe e o que está documentado.",
  },
  {
    title: "Alvará de Demolição",
    href: "/alvara-de-demolicao-goiania",
    linkLabel: "Alvará de demolição em Goiânia",
    text: "Autoriza a remoção total ou parcial de uma edificação. Depois da demolição, ela precisa ser averbada no cartório; caso contrário, a construção continua constando na matrícula do imóvel.",
  },
]

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

      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-t border-[#e0e5eb]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1d283a] mb-3">Tipos de alvará que emitimos em Goiânia</h2>
          <p className="text-[#5a687c] leading-relaxed mb-10">
            Cada alvará tem uma finalidade e exige documentos diferentes. Veja para que serve cada um e como
            conduzimos o processo junto à Prefeitura.
          </p>
          <div className="flex flex-col gap-8">
            {alvaraTypes.map((alvara) => (
              <article key={alvara.href}>
                <h3 className="text-lg font-semibold text-[#1d283a] mb-2">{alvara.title}</h3>
                <p className="text-[#3d4c5f] leading-relaxed mb-2">{alvara.text}</p>
                <Link
                  href={alvara.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#066bef] hover:underline"
                >
                  {alvara.linkLabel}
                  <ChevronRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
