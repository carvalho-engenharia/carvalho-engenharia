import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SchemaOrg } from "@/components/schema-org"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CookieBanner } from "@/components/cookie-banner"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusti.tec.br"),
  title: {
    default: "Nexus TI | Suporte e Infraestrutura de TI em Goiânia",
    template: "%s | Nexus TI",
  },
  description:
    "Empresa especializada em suporte de TI, redes, segurança da informação e infraestrutura em Goiânia. Atendimento 24h, firewall, Wi-Fi corporativo, cloud e muito mais.",
  keywords: [
    "suporte TI Goiânia",
    "infraestrutura de TI",
    "segurança da informação",
    "redes corporativas Goiânia",
    "firewall empresarial",
    "Wi-Fi corporativo",
    "Microsoft 365",
    "cloud computing",
    "Nexus TI",
    "terceirização de TI",
  ],
  authors: [{ name: "Caio Maracaipe", url: "https://nexusti.tec.br" }],
  creator: "Nexus TI",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nexusti.tec.br",
    siteName: "Nexus TI",
    title: "Nexus TI | Suporte e Infraestrutura de TI em Goiânia",
    description:
      "Suporte de TI 24h em Goiânia. Redes, segurança, cloud e infraestrutura gerenciada por quem vive isso há mais de 20 anos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexus TI — Suporte e Infraestrutura de TI em Goiânia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus TI | Suporte e Infraestrutura de TI em Goiânia",
    description:
      "Suporte de TI 24h em Goiânia. Redes, segurança, cloud e infraestrutura gerenciada por quem vive isso há mais de 20 anos.",
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
    canonical: "https://nexusti.tec.br",
  },
  verification: {
    other: {
      "msvalidate.01": "89CD1EFAA07AE37EBDA26D78463312F3",
    },
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
