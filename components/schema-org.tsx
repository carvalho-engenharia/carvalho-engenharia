export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nexus TI",
    description:
      "Empresa especializada em suporte de TI, redes, segurança da informação e infraestrutura em Goiânia. Atendimento 24h.",
    url: "https://nexusti.tec.br",
    telephone: "+55-62-99806-2169",
    email: "contato@nexusti.tec.br",
    openingHours: "Mo-Su 00:00-23:59",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goiânia",
      addressRegion: "GO",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -16.6869,
      longitude: -49.2648,
    },
    areaServed: {
      "@type": "City",
      name: "Goiânia",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "9",
      bestRating: "5",
    },
    founder: {
      "@type": "Person",
      name: "Caio Maracaipe",
      jobTitle: "Especialista em TI",
    },
    sameAs: [
      "https://www.google.com/search?kgmid=/g/11z5b8qv04",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
