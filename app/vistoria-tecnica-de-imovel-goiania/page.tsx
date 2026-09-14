import type { Metadata } from "next"
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
      <ServiceTemplate data={data} />
    </>
  )
}
