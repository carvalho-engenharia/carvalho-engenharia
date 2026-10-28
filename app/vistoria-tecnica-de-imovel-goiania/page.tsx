import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"
import { ServiceTemplate } from "@/components/service-template"
import { getServiceBySlug, buildServiceSchema } from "@/lib/services-data"

const SLUG = "vistoria-tecnica-de-imovel-goiania"

export function generateMetadata(): Metadata {
  const data = getServiceBySlug(SLUG)
  if (!data) return {}

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://www.carvalho-engenharia.com/${SLUG}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "website",
      url: `https://www.carvalho-engenharia.com/${SLUG}`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: data.h1,
        },
      ],
    },
  }
}

export default function Page() {
  const data = getServiceBySlug(SLUG)
  if (!data) notFound()

  const schemas = buildServiceSchema(data)

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServiceTemplate data={data}>
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/vistoria/vistoria-entrega-apartamento-medidor-umidade-parede-goiania.webp"
              alt="Engenheiro civil medindo a umidade da parede de um apartamento novo durante vistoria técnica em Goiânia"
              width={1600}
              height={1200}
              sizes="(max-width: 768px) 100vw, 512px"
              loading="lazy"
              className="w-full h-auto rounded-2xl border border-[#e0e5eb]"
            />
            <div>
              <h2 className="text-2xl font-bold text-[#1d283a] mb-3">Vai receber as chaves de um apartamento novo?</h2>
              <p className="text-[#5a687c] leading-relaxed mb-4">
                Temos uma vistoria específica para a entrega de apartamento, com equipamentos de medição, laudo com
                fotos e ART.
              </p>
              <Link
                href="/vistoria-de-entrega-de-apartamento-goiania"
                className="inline-flex items-center gap-2 text-[#066bef] font-semibold text-sm hover:underline"
              >
                Ver a vistoria de entrega de apartamento
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </ServiceTemplate>
    </>
  )
}
