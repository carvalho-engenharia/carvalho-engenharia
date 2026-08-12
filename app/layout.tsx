import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SchemaOrg } from "@/components/schema-org"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CookieBanner } from "@/components/cookie-banner"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carvalho-engenharia.com"),
  title: {
    default: "Regularização de Imóveis e Despachante Imobiliário | Goiânia",
    template: "%s | Carvalho Engenharia",
  },
  description:
    "Regularização de imóveis, despachante imobiliário, INSS de obra, avaliação e gerenciamento de projetos em Goiânia. +10 anos de experiência. CREA 1017786453D-GO.",
  keywords: [
    // Alto volume (1 mil–10 mil buscas/mês)
    "regularização de imóveis Goiânia",
    "despachante imobiliário Goiânia",
    "INSS de obra Goiânia",
    "avaliador de imóvel Goiânia",
    "gerenciamento de projetos Goiânia",
    // Médio volume (100–1 mil buscas/mês)
    "gerenciamento de obra Goiânia",
    "consultoria em engenharia civil Goiânia",
    "emissão de ART Goiânia",
    "projetos estruturais Goiânia",
    // Baixo volume (10–100 buscas/mês)
    "vistoria técnica de imóvel Goiânia",
    // Sem volume testado, mas core do serviço
    "alvará de construção Goiânia",
    "habite-se Goiânia",
    "averbação de construção",
    "desmembramento e remembramento Goiânia",
    "projetos arquitetônicos Goiânia",
    // Institucional / marca
    "carta de ocupação Goiânia",
    "engenheiro civil Goiânia",
    "Carvalho Engenharia",
    "Caio Maracaípe",
    "CREA Goiânia",
  ],
  authors: [{ name: "Caio Maracaípe", url: "https://www.carvalho-engenharia.com" }],
  creator: "Carvalho Engenharia",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.carvalho-engenharia.com",
    siteName: "Carvalho Engenharia",
    title: "Regularização de Imóveis e Despachante Imobiliário | Goiânia",
    description:
      "Regularização de imóveis, despachante imobiliário, INSS de obra, avaliação e gerenciamento de projetos em Goiânia. +10 anos de experiência. CREA 1017786453D-GO.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carvalho Engenharia — Regularização de Imóveis e Despachante Imobiliário em Goiânia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regularização de Imóveis e Despachante Imobiliário | Goiânia",
    description:
      "Regularização de imóveis, despachante imobiliário, INSS de obra, avaliação e gerenciamento de projetos em Goiânia. +10 anos de experiência. CREA 1017786453D-GO.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.carvalho-engenharia.com",
  },
  verification: {
    google: "_8llKmEMAfxglCw0iqE8xCEWcsVpN4-4UpJ6FBIZt1o",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SchemaOrg />
        {children}
        <CookieBanner />
        <WhatsAppFloat />
        <SpeedInsights />
      </body>
    </html>
  )
}
