"use client"

import { useEffect } from "react"
import { PHONE_CONVERSION, WHATSAPP_CONVERSION } from "@/lib/google-ads"

const WHATSAPP_PATTERNS = ["wa.me", "api.whatsapp.com", "whatsapp.com/send"]

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function sendConversion(sendTo: string) {
  if (typeof window.gtag !== "function") return
  window.gtag("event", "conversion", { send_to: sendTo, transport_type: "beacon" })
}

// Evento GA4 (só é coletado quando houver uma propriedade GA4 configurada via gtag('config', 'G-...')).
// Não há equivalente para WhatsApp: o GA4 já recebe clique_whatsapp por uma regra no painel do Google,
// e enviá-lo pelo código duplicava o evento e disparava uma segunda conversão no Google Ads.
function sendGa4Event(eventName: string, linkUrl: string) {
  if (typeof window.gtag !== "function") return
  window.gtag("event", eventName, { link_url: linkUrl, transport_type: "beacon" })
}

export function GoogleAdsConversions() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return
      const link = e.target.closest("a")
      const href = link?.getAttribute("href")?.trim().toLowerCase()
      if (!href) return

      if (WHATSAPP_PATTERNS.some((pattern) => href.includes(pattern))) {
        sendConversion(WHATSAPP_CONVERSION)
      } else if (href.startsWith("tel:")) {
        sendConversion(PHONE_CONVERSION)
        sendGa4Event("clique_telefone", href)
      }
    }

    // Fase de captura: o clique é registrado mesmo que algum componente
    // chame stopPropagation() (ex.: modais).
    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [])

  return null
}
