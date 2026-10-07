import { Barcode, CreditCard, ListChecks } from "lucide-react"

// As três formas de pagamento. Para mudar qualquer condição, edite só aqui.
const options = [
  {
    icon: ListChecks,
    title: "Por etapas",
    highlight: "3 pagamentos",
    description:
      "Você paga uma parte a cada entrega: no levantamento, no protocolo e na conclusão, com a emissão dos documentos.",
    note: "A última parte só é paga com o processo concluído.",
  },
  {
    icon: Barcode,
    title: "Boleto bancário",
    highlight: "em até 6x*",
    description: "O valor do serviço dividido em parcelas mensais no boleto.",
    note: "*O número de parcelas depende do valor do serviço.",
  },
  {
    icon: CreditCard,
    title: "Cartão de crédito",
    highlight: "parcelado",
    description: "O valor do serviço parcelado no seu cartão de crédito.",
    note: "As condições vêm detalhadas na sua proposta.",
  },
]

const CLOSING_NOTE = "Você escolhe uma das três. A forma escolhida fica registrada na sua proposta, antes da contratação."

/** Bloco completo, usado na home: três opções lado a lado. */
export function PaymentMethods() {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option) => (
          <li
            key={option.title}
            className="flex flex-col rounded-2xl border border-[#e0e5eb] bg-white p-7"
          >
            <div className="w-12 h-12 rounded-lg bg-[#edeff3] border border-[#e0e5eb] flex items-center justify-center mb-5">
              <option.icon className="w-6 h-6 text-[#066bef]" />
            </div>
            <h4 className="text-lg font-bold text-[#1d283a]">
              {option.title} <span className="text-[#066bef]">{option.highlight}</span>
            </h4>
            <p className="text-sm leading-relaxed text-[#5a687c] mt-2 flex-1">{option.description}</p>
            <p className="text-xs leading-relaxed text-[#3d4c5f] mt-4 pt-4 border-t border-[#edeff3]">{option.note}</p>
          </li>
        ))}
      </ul>

      <p className="text-sm text-[#3d4c5f] mt-6 text-center max-w-2xl mx-auto">{CLOSING_NOTE}</p>
    </div>
  )
}

/** Linha curta, usada no topo das páginas de serviço. */
export function PaymentMethodsLine() {
  return (
    <p className="flex items-start gap-2 text-sm text-[#5a687c]">
      <CreditCard className="w-4 h-4 mt-0.5 shrink-0 text-[#066bef]" />
      <span>
        Três formas de pagamento: <span className="font-semibold text-[#1d283a]">por etapas</span>,{" "}
        <span className="font-semibold text-[#1d283a]">boleto em até 6x</span> (conforme o valor do serviço) ou{" "}
        <span className="font-semibold text-[#1d283a]">cartão de crédito</span>.
      </span>
    </p>
  )
}
