export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Carvalho Engenharia",
    description:
      "Especialistas em Alvará de Construção, Habite-se, Regularização de Obras e Projetos de Engenharia em Goiânia e Aparecida de Goiânia. Mais de 10 anos de experiência. CREA 1017786453D-GO.",
    url: "https://www.carvalho-engenharia.com",
    telephone: "+55-62-99806-2169",
    email: "contato@carvalho-engenharia.com",
    openingHours: "Mo-Fr 08:00-18:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Dep. Jamel Cecílio, 3310, Sala 301 - Edifício Office Flamboyant, Jardim Goiás",
      addressLocality: "Goiânia",
      addressRegion: "GO",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -16.6997,
      longitude: -49.2481,
    },
    areaServed: [
      { "@type": "City", name: "Goiânia" },
      { "@type": "City", name: "Aparecida de Goiânia" },
      { "@type": "City", name: "Anápolis" },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "64",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Engenharia e Regularização de Imóveis",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Regularização de Imóveis", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Despachante Imobiliário", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "INSS de Obra", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Avaliador de Imóvel", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gerenciamento de Projetos", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Averbação de Imóvel", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Projeto Estrutural", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Projeto Arquitetônico", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gerenciamento de Obra", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoria em Engenharia Civil", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emissão de ART", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vistoria Técnica de Imóvel", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alvará de Construção e Habite-se", url: "https://www.carvalho-engenharia.com/#servicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desmembramento e Remembramento", url: "https://www.carvalho-engenharia.com/#servicos" } },
      ],
    },
    founder: {
      "@type": "Person",
      name: "Caio Maracaípe",
      jobTitle: "Engenheiro Civil — CREA 1017786453D-GO",
    },
    sameAs: [
      "https://www.instagram.com/carvalho.eng",
      "https://share.google/XiHUDZzpLsAOmXMyd",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
