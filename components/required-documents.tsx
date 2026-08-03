"use client"

import { useState } from "react"
import {
  FileCheck2,
  ClipboardList,
  CalendarClock,
  Store,
  HeartPulse,
  ChevronDown,
  FileText,
  MessageCircle,
} from "lucide-react"

const documentSets = [
  {
    key: "aprovacao",
    icon: FileCheck2,
    title: "Aprovação de Projeto e Alvará de Construção",
    subtitle: "Para construções novas em Goiânia",
    lei: "Código de Obras e Edificações de Goiânia (LC nº 364/2023) e Alvará Fácil / Alvará + Fácil",
    documents: [
      "Certidão de registro do lote atualizada (até 90 dias da emissão)",
      "Documentos pessoais (pessoa física) ou CNPJ e documentação da empresa (pessoa jurídica)",
      "Documento de Uso do Solo para aprovação de projeto",
      "Certidão de Remembramento, Desmembramento ou Decreto de Remanejamento, se o imóvel ocupar mais de um lote",
      "Projeto arquitetônico completo: planta de situação, planta baixa e locação, plantas dos pavimentos, cobertura, fachadas, quadro de áreas e dois cortes",
      "ART/RRT do responsável técnico pelo projeto",
      "Comprovação de relação jurídica com o imóvel, quando o requerente não for o proprietário",
    ],
  },
  {
    key: "regularizacao",
    icon: ClipboardList,
    title: "Alvará de Regularização",
    subtitle: "Construções posteriores a 19/10/1995, sem alvará ou em desacordo com o projeto",
    lei: "Instituído pela Lei Complementar nº 314/2018, com atualizações da LC 349/2022 e LC 364/2023",
    documents: [
      "Levantamento arquitetônico completo (plantas e elevações atualizadas)",
      "ART do responsável técnico pelo levantamento",
      "Imagem de cobertura do imóvel (ex: Google Earth com data compatível) ou documento equivalente que comprove a edificação",
      "Certidão de registro do lote atualizada (até 90 dias)",
      "Documento de Uso do Solo",
      "Certidão de Remembramento, Desmembramento ou Remanejamento, se aplicável",
    ],
  },
  {
    key: "aceite",
    icon: CalendarClock,
    title: "Alvará de Aceite",
    subtitle: "Construções anteriores a 19/10/1995",
    lei: "Instituído pela Lei Orgânica do Município (Emenda nº 12/1995) e regulamentado pela Lei Complementar nº 314/2018",
    documents: [
      "Requerimento de Alvará de Aceite, preenchido e assinado",
      "Declaração de Responsabilidade das informações",
      "Certidão de registro do lote atualizada (até 90 dias), constando a averbação da edificação",
      "Documentos pessoais (PF) ou CNPJ e documentação da empresa (PJ)",
      "Comprovação da época da construção: talão de IPTU anterior a 19/10/1995, declaração de energização anterior a essa data, ou planta aerofotogramétrica de 1992",
      "Até 200 m²: croqui cotado da situação da construção",
      "Acima de 200 m²: projeto completo do levantamento arquitetônico (planta de situação, planta baixa, plantas dos pavimentos, cobertura, fachadas, quadro de áreas e polilinha) + ART/RRT",
    ],
  },
  {
    key: "funcionamento",
    icon: Store,
    title: "Alvará de Localização e Funcionamento",
    subtitle: "Obrigatório para qualquer estabelecimento comercial, industrial ou de serviços",
    lei: "Art. 111 da Lei Complementar nº 014/1992 (Código de Posturas do Município de Goiânia)",
    documents: [
      "Cadastro no Portal do Empreendedor Goiano (JUCEG)",
      "Cartão CNPJ e Contrato Social",
      "Abertura do CAE — Cadastro de Atividade Econômica (Cadastro Mobiliário)",
      "Documento de Uso do Solo, admitindo a atividade para o local",
      "Documento de Numeração Predial Oficial",
      "Certificado de Conformidade do Corpo de Bombeiros",
      "Declaração/Termo de Responsabilidade para emissão do Alvará",
      "Licença Ambiental (quando a atividade exigir)",
      "Alvará da Vigilância Sanitária — VISA (quando a atividade exigir)",
      "Pagamento das taxas municipais",
    ],
  },
  {
    key: "sanitario",
    icon: HeartPulse,
    title: "Alvará Sanitário (Licenciamento Sanitário)",
    subtitle: "Para atividades sujeitas à fiscalização da Vigilância Sanitária",
    lei: "Portaria Municipal SMS nº 63/2023 (Secretaria Municipal de Saúde de Goiânia)",
    documents: [
      "CAE — Cadastro de Atividade Econômica atualizado",
      "Classificação de risco sanitário da atividade, conforme Portaria SMS 63/2023",
      "Atividades de baixo risco: emissão em até 72h após pagamento da taxa, sem vistoria prévia",
      "Atividades de alto risco: projeto arquitetônico e memorial descritivo do estabelecimento",
      "Atividades de alto risco: vistoria prévia obrigatória antes da emissão",
      "Autorizações da ANVISA, nos casos previstos em lei",
      "Pagamento da taxa de inspeção sanitária",
    ],
  },
]

export function RequiredDocuments() {
  const [openKey, setOpenKey] = useState<string | null>(documentSets[0].key)

  return (
    <section
      id="documentos"
      className="py-24 sm:py-32 bg-[#f9fafb] relative overflow-hidden border-t border-[#e0e5eb]"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-[#066bef]/4 blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#066bef]/30 bg-[#066bef]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#066bef] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#066bef] font-semibold font-mono">
              // documentação necessária
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1d283a] mb-4 tracking-tight text-balance">
            O que a Prefeitura de Goiânia{" "}
            <span className="text-[#066bef]">exige em cada processo</span>
          </h2>
          <p className="text-[#5a687c] max-w-2xl mx-auto text-lg text-balance">
            Reunimos os documentos exigidos pela Prefeitura de Goiânia para os processos mais comuns.
            Nós cuidamos de levantar, organizar e protocolar tudo por você.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {documentSets.map((set) => {
            const isOpen = openKey === set.key
            return (
              <div
                key={set.key}
                className={`rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen ? "border-[#066bef]/40" : "border-[#e0e5eb] hover:border-[#066bef]/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenKey(isOpen ? null : set.key)}
                  className="flex w-full items-center gap-4 p-6 text-left"
                >
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-[#edeff3] border border-[#e0e5eb] flex items-center justify-center">
                    <set.icon className="w-5 h-5 text-[#066bef]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-[#1d283a]">{set.title}</h3>
                    <p className="text-sm text-[#5a687c] mt-0.5">{set.subtitle}</p>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#5a687c] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#066bef]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="mb-4 flex items-start gap-2 rounded-xl border border-[#066bef]/20 bg-[#066bef]/5 p-3">
                      <FileText className="w-4 h-4 mt-0.5 shrink-0 text-[#066bef]" />
                      <p className="text-xs leading-relaxed text-[#5a687c]">{set.lei}</p>
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {set.documents.map((doc) => (
                        <li key={doc} className="flex items-start gap-2.5 text-sm text-[#3d4c5f] leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#066bef] shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-[#066bef]/25 bg-white p-8 text-center">
          <p className="text-[#1d283a] text-base leading-relaxed max-w-xl">
            Não sabe quais desses documentos você já tem ou como conseguir os que faltam?
            A gente levanta tudo pra você.
          </p>
          <a
            href="https://wa.me/5562998062169?text=Ol%C3%A1%2C%20quero%20ajuda%20para%20levantar%20a%20documenta%C3%A7%C3%A3o%20necess%C3%A1ria%20para%20o%20meu%20processo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#066bef] text-white font-bold text-sm hover:bg-[#0559c7] transition-all duration-300 shadow-[0_0_30px_rgba(6,107,239,0.4)] hover:shadow-[0_0_45px_rgba(6,107,239,0.6)]"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  )
}
