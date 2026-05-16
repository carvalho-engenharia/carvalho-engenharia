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
    default: "Carvalho Engenharia | Alvará, Habite-se e Regularização de Imóveis em Goiânia",
    template: "%s | Carvalho Engenharia",
  },
  description:
    "Especialistas em Alvará de Construção, Habite-se, Regularização de Obras e Projetos de Engenharia em Goiânia e Aparecida de Goiânia. Mais de 10 anos de experiência. CREA 1017786453D-GO.",
  keywords: [
    "alvará de construção Goiânia",
    "habite-se Goiânia",
    "regularização de imóveis Goiânia",
    "regularização de obras Goiânia",
    "projetos de engenharia Goiânia",
    "carta de ocupação Goiânia",
    "averbação de construção",
    "INSS de obras",
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
    title: "Carvalho Engenharia | Alvará, Habite-se e Regularização de Imóveis em Goiânia",
    description:
      "Alvará de Construção, Habite-se, Regularização de Obras e Projetos de Engenharia em Goiânia. Mais de 10 anos de experiência. CREA 1017786453D-GO.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carvalho Engenharia — Alvará, Habite-se e Regularização de Imóveis em Goiânia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carvalho Engenharia | Alvará, Habite-se e Regularização de Imóveis em Goiânia",
    description:
      "Alvará de Construção, Habite-se, Regularização de Obras e Projetos de Engenharia em Goiânia. Mais de 10 anos de experiência. CREA 1017786453D-GO.",
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
