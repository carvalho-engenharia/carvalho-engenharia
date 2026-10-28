export const GOOGLE_ADS_ID = "AW-18469456431"

export const WHATSAPP_CONVERSION = `${GOOGLE_ADS_ID}/WD7eCNiPs44dEK-U9uZE`
export const PHONE_CONVERSION = `${GOOGLE_ADS_ID}/gw7jCNuPs44dEK-U9uZE`

// Rótulo da conversão "Formulário enviado" (AW-.../xxxx). Vazio até a ação ser criada no Google Ads:
// enquanto estiver vazio, o envio do formulário só dispara o evento FORM_EVENT (sem conversão no Ads).
export const FORM_CONVERSION = ""

// Eventos enviados à tag do Google (GA4). Marcar como evento principal no painel, se desejado.
export const PHONE_EVENT = "clique_telefone"
export const EMAIL_EVENT = "clique_email"
export const FORM_EVENT = "envio_formulario"

export function trackEvent(name: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name)
}

export function trackConversion(sendTo: string) {
  if (!sendTo || typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", "conversion", { send_to: sendTo, transport_type: "beacon" })
}
