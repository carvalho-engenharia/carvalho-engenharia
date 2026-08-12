"use client"

import { useState } from "react"
import {
  Building2,
  FileWarning,
  Hammer,
  Calculator,
  Briefcase,
  FileDiff,
  Banknote,
  Store,
  MessageCircle,
  ArrowRight,
  CalendarClock,
  FileCheck2,
  FileText,
  Ruler,
  AlertTriangle,
  MapPin,
  X,
} from "lucide-react"

const problems = [
  {
    icon: Hammer,
    question: "Construiu sem alvará de construção?",
    description:
      "Obra erguida sem licença pode ser embargada e gera multa. Regularizamos junto à Prefeitura de Goiânia e Aparecida de Goiânia, obtendo o alvará retroativo e garantindo a legalidade total da edificação.",
    keywords: "obra sem alvará Goiânia, regularização de obra, alvará de construção",
  },
  {
    icon: Building2,
    question: "Fez ampliação ou reforma sem projeto aprovado?",
    description:
      "Ampliações e reformas precisam de aprovação prévia. Elaboramos o projeto de regularização, aprovamos na prefeitura e providenciamos o aditivo ao alvará original para que a obra fique 100% legalizada.",
    keywords: "regularização de ampliação, reforma sem alvará, projeto de regularização",
  },
  {
    icon: Store,
    question: "Estabelecimento sem Carta de Ocupação ou Habite-se?",
    description:
      "Sem carta de ocupação ou habite-se, sua atividade comercial fica exposta a multas e interdições. Obtemos a documentação junto à prefeitura e garantimos a continuidade da operação sem riscos.",
    keywords: "carta de ocupação, habite-se empresa, regularização comercial Goiânia",
  },
  {
    icon: Banknote,
    question: "Quer vender ou financiar o imóvel mas há pendências?",
    description:
      "Bancos exigem documentação regularizada para financiamento. Resolvemos averbação de construção, habite-se e escritura para que a venda ou refinanciamento ocorra sem entraves junto à Caixa e demais instituições.",
    keywords: "financiamento imóvel irregular, averbação de construção, venda de imóvel irregular",
  },
  {
    icon: CalendarClock,
    question: "Sua construção é antiga e nunca teve alvará?",
    description:
      "Imóveis construídos há mais tempo podem ser regularizados pelo Alvará de Aceite, um processo mais simples. A data de corte varia entre Goiânia e Aparecida de Goiânia — veja qual se aplica ao seu caso.",
    keywords: "alvará de aceite, construção antiga sem alvará, regularização Goiânia Aparecida",
    modalKey: "aceite",
  },
  {
    icon: FileCheck2,
    question: "Sua construção é recente e está em desacordo com o projeto?",
    description:
      "Edificações mais novas, sem alvará ou em desacordo com o Plano Diretor, são regularizadas pelo Alvará de Regularização. Cuidamos do levantamento técnico, ART e todo o processo.",
    keywords: "alvará de regularização, construção em desacordo, plano diretor Goiânia",
    modalKey: "regularizacao",
  },
  {
    icon: Calculator,
    question: "Precisa de um Laudo de Avaliação de Imóvel?",
    description:
      "Bancos, inventários e partilhas exigem laudo técnico de avaliação. Emitimos o Laudo de Avaliação de Imóvel assinado por engenheiro civil habilitado (CREA), com validade bancária e jurídica.",
    keywords: "avaliador de imóvel Goiânia, laudo de avaliação de imóvel, avaliação de imóvel para financiamento",
  },
  {
    icon: Briefcase,
    question: "Cansado de burocracia em cartório e prefeitura?",
    description:
      "Assessoria completa em cartórios e prefeituras, do protocolo ao acompanhamento até a conclusão. Cuidamos de toda a tramitação documental para você não perder tempo com filas e exigências.",
    keywords: "despachante imobiliário Goiânia, assessoria cartório e prefeitura, tramitação documental imóvel",
  },
  {
    icon: FileDiff,
    question: "Imóvel não confere com a escritura ou matrícula?",
    description:
      "Divergências entre o imóvel físico e os documentos geram problemas em inventários, heranças e vendas. Fazemos a retificação de área, desmembramento ou remembramento para regularizar a documentação.",
    keywords: "retificação de área, divergência escritura imóvel, desmembramento Goiânia",
  },
  {
    icon: FileWarning,
    question: "Precisa do INSS de obra?",
    description:
      "A regularização fiscal de obras exige cálculo e recolhimento do INSS junto à Receita Federal. Emitimos CNO, CND e SERO, evitando pendências para habite-se e financiamento.",
    keywords: "INSS de obra Goiânia, CNO CND obra, regularização fiscal de obra",
  },
]

type CityKey = "goiania" | "aparecida"

const cityLabels: Record<CityKey, string> = {
  goiania: "Goiânia",
  aparecida: "Aparecida de Goiânia",
}

const modalContent = {
  aceite: {
    title: "Alvará de Aceite",
    tagline: "O caminho mais simples para regularizar construções mais antigas",
    byCity: {
      goiania: {
        marco: "Construções concluídas até 19/10/1995",
        lei: "Regulamentado pela Lei Complementar nº 314/2018 (Prefeitura de Goiânia), com base na Lei Orgânica do Município.",
        sections: [
          {
            icon: FileText,
            heading: "Documentos exigidos",
            items: [
              "Comprovação da época da construção (foto aérea, IPTU antigo, conta de luz/água antiga ou outro documento idôneo)",
              "Croqui simplificado do imóvel para edificações menores, dispensando projeto de arquitetura completo",
              "Cópia da matrícula ou escritura do imóvel",
              "Certidão de remembramento, desmembramento ou remanejamento, caso o imóvel ocupe mais de um lote",
            ],
          },
          {
            icon: Ruler,
            heading: "Pontos de atenção",
            items: [
              "O Alvará de Aceite é concedido uma única vez por imóvel",
              "Não é concedido para construções que obstruam área pública, logradouro ou Área de Preservação Permanente (APP)",
              "Imóveis em áreas aeroportuárias dependem de autorização prévia do Departamento de Aviação Civil",
            ],
          },
          {
            icon: AlertTriangle,
            heading: "Custas",
            items: [
              "Para construções horizontais, normalmente incidem apenas taxas administrativas. Edificações verticais têm multa formal específica (podendo chegar a 1.000%-1.500% da taxa) — fazemos essa simulação antes de você decidir",
              "Incidem apenas as taxas administrativas do processo junto à Seplanh",
            ],
          },
        ],
      },
      aparecida: {
        marco: "Construções concluídas com data anterior a 09/10/2018",
        lei: "Previsto no Código de Obras e Edificações do Município (Lei Complementar nº 171/2019, art. 80), que atualizou a LC 105/2015.",
        sections: [
          {
            icon: FileText,
            heading: "Documentos exigidos",
            items: [
              "Certidão de uso do solo",
              "Projeto de levantamento em escala mínima de 1:100, com elevação da fachada frontal indicando o nome da via",
              "Documento idôneo que comprove a existência e a época da edificação",
            ],
          },
          {
            icon: Ruler,
            heading: "Como o processo tramita",
            items: [
              "Solicitação feita pelo Portal Vapt Vupt ou diretamente na Secretaria de Planejamento e Regulação Urbana",
              "Imóveis acima de 5.000 m² podem usar a tramitação híbrida prevista na Resolução CGPD nº 001/2025",
            ],
          },
          {
            icon: AlertTriangle,
            heading: "Taxas",
            items: [
              "Receita 22590 — Alvará de Aceite: 16,00 UVFA/m² para a área em desacordo + 0,40 UVFA/m² para a área já em conformidade",
              "Valor gerado após a análise técnica do processo pela Secretaria de Regulação Urbana",
            ],
          },
        ],
      },
    },
    footer:
      "A data de corte é diferente em cada município. Fazemos uma avaliação inicial gratuita para confirmar se o seu imóvel se enquadra no Alvará de Aceite de Goiânia ou de Aparecida de Goiânia.",
  },
  regularizacao: {
    title: "Alvará de Regularização",
    tagline: "Para construções mais recentes, sem alvará ou em desacordo com o projeto aprovado",
    byCity: {
      goiania: {
        marco:
          "Edificações estruturalmente definidas após 19/10/1995, em desacordo com o Plano Diretor (LC 349/2022) e o Código de Obras (LC 364/2023)",
        lei: "Instituído pela Lei Complementar nº 314/2018, com atualizações trazidas pelas LC 349/2022, LC 364/2023 e LC 368/2023.",
        sections: [
          {
            icon: FileText,
            heading: "Documentos exigidos",
            items: [
              "Levantamento arquitetônico completo (plantas e elevações atualizadas)",
              "ART do responsável técnico",
              "Imagem de cobertura do imóvel via Google Earth com data compatível, ou documento equivalente que comprove a edificação",
              "Certidão de remembramento, desmembramento ou remanejamento, se o imóvel ocupar mais de um lote",
            ],
          },
          {
            icon: Ruler,
            heading: "Critérios técnicos",
            items: [
              "Só podem ser regularizados imóveis com até 7 pavimentos e altura máxima de 21 metros",
              "Edificações acima de 250 m² que não ocupem toda a área do terreno precisam de poço de infiltração ou caixa de recarga para permeabilidade do solo",
              "Não é concedido para construções em vias não oficializadas sem prévia regularização do parcelamento do solo, nem em áreas que obstruam logradouro público ou APP",
            ],
          },
          {
            icon: AlertTriangle,
            heading: "Multas e taxas",
            items: [
              "Cobrança composta por taxa de aprovação de projetos + multa formal por descumprimento do Plano Diretor e Código de Obras",
              "Para área entre 200 m² e 500 m², a multa formal de ofício corresponde a 400% do valor da taxa de aprovação de projetos",
              "Áreas de até 200 m² podem ter isenção da multa em situações específicas, como imóveis de Planta Popular ou localizados em Áreas Especiais de Interesse Social (AEIS I e II)",
            ],
          },
        ],
      },
      aparecida: {
        marco:
          "Construções posteriores a 09/10/2018, em desacordo com o Código de Obras e Edificações (LC 171/2019) e a Lei de Uso e Ocupação do Solo",
        lei: "Regido pela Lei Complementar nº 171/2019 (Código de Obras e Edificações de Aparecida de Goiânia).",
        sections: [
          {
            icon: FileText,
            heading: "Documentos exigidos",
            items: [
              "Certidão de uso do solo",
              "Projeto de levantamento em escala mínima de 1:100, com elevação da fachada frontal",
              "Documentação que comprove a existência da edificação, conforme exigido pelo Código de Obras",
            ],
          },
          {
            icon: Ruler,
            heading: "Como o processo tramita",
            items: [
              "Análise feita pela Secretaria de Planejamento e Regulação Urbana, com possibilidade de protocolo pelo Portal Vapt Vupt",
              "Imóveis acima de 5.000 m² podem seguir o rito de tramitação híbrida da Resolução CGPD nº 001/2025",
            ],
          },
          {
            icon: AlertTriangle,
            heading: "Taxas",
            items: [
              "Receita 22590: 16,00 UVFA/m² para a área em desacordo + 0,40 UVFA/m² para a área já em conformidade",
              "Valor final apurado após análise técnica do processo",
            ],
          },
        ],
      },
    },
    footer:
      "Fazemos o levantamento técnico completo e simulamos o custo estimado antes de dar entrada no processo, já considerando as regras específicas de Goiânia ou de Aparecida de Goiânia.",
  },
} as const

export function PainPoints() {
  const [openModal, setOpenModal] = useState<keyof typeof modalContent | null>(null)
  const [activeCity, setActiveCity] = useState<CityKey>("goiania")

  return (
    <section
      id="problemas"
      className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-[#e0e5eb]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[500px] rounded-full bg-[#066bef]/4 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#066bef]/30 bg-[#066bef]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#066bef] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#066bef] font-semibold font-mono">
              // quem deve regularizar
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1d283a] mb-4 tracking-tight text-balance">
            Seu imóvel se enquadra em{" "}
            <span className="text-[#066bef]">alguma dessas situações?</span>
          </h2>
          <p className="text-[#5a687c] max-w-2xl mx-auto text-lg text-balance">
            Situações irregulares têm solução. Veja os casos mais comuns que atendemos em Goiânia e Aparecida de
            Goiânia, e como resolvemos cada um.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {problems.map((problem, index) => {
            const isClickable = Boolean((problem as any).modalKey)
            const Wrapper = isClickable ? "button" : "div"

            return (
              <Wrapper
                key={index}
                type={isClickable ? "button" : undefined}
                onClick={
                  isClickable
                    ? () => {
                        setActiveCity("goiania")
                        setOpenModal((problem as any).modalKey as keyof typeof modalContent)
                      }
                    : undefined
                }
                className={`group relative p-6 rounded-2xl bg-[#f9fafb] border border-[#e0e5eb] hover:border-[#066bef]/40 hover:shadow-[0_0_30px_rgba(6,107,239,0.07)] transition-all duration-500 flex flex-col text-left ${
                  isClickable ? "cursor-pointer" : ""
                }`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[#066bef]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-[#edeff3] border border-[#e0e5eb] flex items-center justify-center mb-4 group-hover:border-[#066bef]/30 group-hover:bg-[#066bef]/10 transition-all duration-500">
                    <problem.icon className="w-5 h-5 text-[#066bef]" />
                  </div>

                  {/* Question — SEO: H3 com pergunta real */}
                  <h3 className="text-sm font-semibold text-[#1d283a] mb-3 leading-snug group-hover:text-[#066bef] transition-colors duration-300">
                    {problem.question}
                  </h3>

                  {/* Answer */}
                  <p className="text-xs text-[#5a687c] leading-relaxed group-hover:text-[#5a687c] transition-colors duration-300 flex-1">
                    {problem.description}
                  </p>

                  {isClickable && (
                    <span className="mt-3 text-xs font-semibold text-[#066bef]">Ver detalhes completos →</span>
                  )}
                </div>
              </Wrapper>
            )
          })}
        </div>

        {/* CTA — Diagnóstico gratuito */}
        <div className="relative rounded-2xl border border-[#066bef]/25 bg-[#ecf4fe] overflow-hidden">
          {/* Glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,107,239,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#066bef]/40 to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-14">
            {/* Left */}
            <div className="text-center lg:text-left max-w-xl">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#066bef] mb-3">
                // avaliação gratuita
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1d283a] mb-3 leading-tight">
                Não sabe se o seu imóvel precisa de regularização?
              </h3>
              <p className="text-[#5a687c] text-base leading-relaxed">
                Solicite uma <strong className="text-[#1d283a] font-semibold">avaliação gratuita</strong> da situação do seu imóvel.
                Analisamos a documentação e a obra e indicamos o caminho mais rápido para a regularização —{" "}
                <span className="text-[#066bef]">sem compromisso</span>.
              </p>

              <ul className="mt-5 flex flex-col sm:flex-row gap-3 text-sm text-[#5a687c] justify-center lg:justify-start">
                {["Avaliação sem custo", "Resposta ágil", "Atendimento presencial em Goiânia"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#066bef] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — CTAs */}
            <div className="flex flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href="https://wa.me/5562998062169?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20gratuita%20da%20situa%C3%A7%C3%A3o%20do%20meu%20im%C3%B3vel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#066bef] text-white font-bold text-sm hover:bg-[#0559c7] transition-all duration-300 shadow-[0_8px_24px_rgba(6,107,239,0.25)] hover:shadow-[0_10px_30px_rgba(6,107,239,0.35)] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar avaliação gratuita
              </a>
              <a
                href="#contato"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-[#e0e5eb] text-[#5a687c] text-sm font-medium hover:border-[#066bef]/40 hover:text-[#066bef] hover:bg-[#066bef]/5 transition-all duration-300 whitespace-nowrap"
              >
                Ou envie uma mensagem
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Modal — Alvará de Aceite / Alvará de Regularização */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white border border-[#e0e5eb] shadow-xl p-6 shadow-2xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenModal(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#edeff3] border border-[#e0e5eb] text-[#5a687c] transition hover:text-[#1d283a] hover:border-[#066bef]/40"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="text-xs font-semibold uppercase tracking-wider text-[#066bef]">
              {modalContent[openModal].tagline}
            </span>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#1d283a]">
              {modalContent[openModal].title}
            </h3>

            {/* City tabs */}
            <div className="mt-5 flex gap-2 rounded-lg bg-[#edeff3] border border-[#e0e5eb] p-1">
              {(Object.keys(cityLabels) as CityKey[]).map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setActiveCity(city)}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition ${
                    activeCity === city
                      ? "bg-[#066bef] text-white"
                      : "text-[#5a687c] hover:text-[#1d283a]"
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {cityLabels[city]}
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-[#066bef]/20 bg-[#066bef]/5 p-4">
              <p className="text-sm font-semibold text-[#1d283a]">
                {modalContent[openModal].byCity[activeCity].marco}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#5a687c]">
                {modalContent[openModal].byCity[activeCity].lei}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-5">
              {modalContent[openModal].byCity[activeCity].sections.map((section) => (
                <div key={section.heading} className="rounded-xl border border-[#e0e5eb] bg-[#edeff3]/50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <section.icon className="h-4 w-4 text-[#066bef]" />
                    <h4 className="text-sm font-semibold text-[#1d283a]">{section.heading}</h4>
                  </div>
                  <ul className="ml-1 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-[#5a687c]">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-xl bg-[#066bef]/10 border border-[#066bef]/20 p-4 text-sm leading-relaxed text-[#1d283a]">
              {modalContent[openModal].footer}
            </p>

            <a
              href="#contato"
              onClick={() => setOpenModal(null)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#066bef] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0559c7]"
            >
              Solicitar avaliação gratuita
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
