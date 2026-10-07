import { Barcode, CreditCard } from "lucide-react"

// Textos das formas de pagamento. Para mudar qualquer condição, edite só aqui.
const methods = [
  {
    icon: Barcode,
    title: "Boleto bancário",
    highlight: "em até 6x*",
    description: "O número de parcelas depende do valor do serviço e vem definido na sua proposta.",
  },
  {
    icon: CreditCard,
    title: "Cartão de crédito",
    highlight: "parcelado",
    description: "Você também pode pagar no cartão de crédito. As condições vêm detalhadas na sua proposta.",
  },
]

const FOOTNOTE = "*Parcelamento no boleto sujeito ao valor do serviço contratado."

// Explica a relação entre o parcelamento e o pagamento em 3 etapas.
const STAGES_NOTE =
  "A forma de combinar o parcelamento com as 3 etapas de pagamento varia conforme o serviço e fica definida na sua proposta, antes da contratação."

/** Bloco completo, usado na home dentro da seção "como funciona". */
export function PaymentMethods() {
  return (
    <div className="mt-10 rounded-2xl border border-[#e0e5eb] bg-white p-6 sm:p-8">
      <h3 className="text-lg font-bold text-[#1d283a] mb-6 text-center">Formas de pagamento</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:divide-x md:divide-[#e0e5eb]">
        {methods.map((method) => (
          <div key={method.title} className="flex items-start gap-4 md:px-8 first:md:pl-0 last:md:pr-0">
            <div className="w-12 h-12 shrink-0 rounded-lg bg-[#edeff3] border border-[#e0e5eb] flex items-center justify-center">
              <method.icon className="w-6 h-6 text-[#066bef]" />
            </div>
            <div>
              <p className="text-base font-bold text-[#1d283a]">
                {method.title} <span className="text-[#066bef]">{method.highlight}</span>
              </p>
              <p className="text-sm leading-relaxed text-[#5a687c] mt-1">{method.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-[#3d4c5f] mt-6 pt-6 border-t border-[#e0e5eb] text-center max-w-2xl mx-auto">
        {STAGES_NOTE}
      </p>

      <p className="text-xs text-[#5a687c] mt-3 text-center">{FOOTNOTE}</p>
    </div>
  )
}

/** Linha curta, usada no topo das páginas de serviço. */
export function PaymentMethodsLine() {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#5a687c]">
      <CreditCard className="w-4 h-4 shrink-0 text-[#066bef]" />
      <span>
        Pagamento no <span className="font-semibold text-[#1d283a]">boleto em até 6x</span> (conforme o valor do
        serviço) ou no <span className="font-semibold text-[#1d283a]">cartão de crédito</span>.
      </span>
    </p>
  )
}
