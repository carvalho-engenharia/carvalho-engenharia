"use client"

import {
  Building2,
  FileWarning,
  Hammer,
  MapPinOff,
  TreePine,
  FileDiff,
  Banknote,
  Store,
  MessageCircle,
  ArrowRight,
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
      "Sem carta de ocupação ou habite-se não é possível renovar o alvará de funcionamento. Obtemos a documentação junto à prefeitura e garantimos a continuidade da sua atividade comercial sem riscos.",
    keywords: "carta de ocupação, habite-se empresa, alvará de funcionamento Goiânia",
  },
  {
    icon: Banknote,
    question: "Quer vender ou financiar o imóvel mas há pendências?",
    description:
      "Bancos exigem documentação regularizada para financiamento. Resolvemos averbação de construção, habite-se e escritura para que a venda ou refinanciamento ocorra sem entraves junto à Caixa e demais instituições.",
    keywords: "financiamento imóvel irregular, averbação de construção, venda de imóvel irregular",
  },
  {
    icon: MapPinOff,
    question: "Muro avançou na calçada ou chanfro de esquina?",
    description:
      "Muros fora do alinhamento são irregulares e impedem a regularização do imóvel. Elaboramos o projeto de adequação, obtemos o alvará específico e regularizamos a situação junto ao município.",
    keywords: "muro calçada irregular, chanfro esquina, regularização de muro",
  },
  {
    icon: TreePine,
    question: "Imóvel sem área permeável ou fora dos recuos?",
    description:
      "A legislação municipal exige recuos e área permeável mínima. Analisamos a situação do seu imóvel, identificamos as adequações necessárias e conduzimos todo o processo de regularização.",
    keywords: "área permeável, recuos obrigatórios, regularização imóvel Goiânia",
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
    question: "Precisa do INSS de obra ou de um laudo técnico?",
    description:
      "A regularização fiscal de obras exige cálculo e recolhimento do INSS. Também elaboramos laudos técnicos e perícias detalhadas para fins jurídicos, bancários ou de segurança da edificação.",
    keywords: "INSS de obra, laudo técnico engenharia, perícia imóvel Goiânia",
  },
]

export function PainPoints() {
  return (
    <section
      id="problemas"
      className="py-24 sm:py-32 bg-[#060606] relative overflow-hidden border-t border-[#111111]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[500px] rounded-full bg-[#00aaff]/4 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00aaff]/30 bg-[#00aaff]/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#00aaff] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#00aaff] font-semibold font-mono">
              // quem deve regularizar
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4 tracking-tight text-balance">
            Seu imóvel se enquadra em{" "}
            <span className="text-[#00aaff]">alguma dessas situações?</span>
          </h2>
          <p className="text-[#888888] max-w-2xl mx-auto text-lg text-balance">
            Situações irregulares têm solução. Veja os casos mais comuns que atendemos em Goiânia e como resolvemos cada um.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-[#0a0a0a]/60 border border-[#1a1a1a] hover:border-[#00aaff]/40 hover:shadow-[0_0_30px_rgba(0,170,255,0.07)] transition-all duration-500 flex flex-col"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#00aaff]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center mb-4 group-hover:border-[#00aaff]/30 group-hover:bg-[#00aaff]/10 transition-all duration-500">
                  <problem.icon className="w-5 h-5 text-[#00aaff]" />
                </div>

                {/* Question */}
                <h3 className="text-sm font-semibold text-[#fafafa] mb-3 leading-snug group-hover:text-[#00aaff] transition-colors duration-300">
                  {problem.question}
                </h3>

                {/* Answer */}
                <p className="text-xs text-[#666666] leading-relaxed group-hover:text-[#888888] transition-colors duration-300 flex-1">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — Diagnóstico gratuito */}
        <div className="relative rounded-2xl border border-[#00aaff]/25 bg-[#0a0f14] overflow-hidden">
          {/* Glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,170,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aaff]/40 to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-14">
            {/* Left */}
            <div className="text-center lg:text-left max-w-xl">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#00aaff] mb-3">
                // avaliação gratuita
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#fafafa] mb-3 leading-tight">
                Não sabe se o seu imóvel precisa de regularização?
              </h3>
              <p className="text-[#888888] text-base leading-relaxed">
                Solicite uma <strong className="text-[#fafafa] font-semibold">avaliação gratuita</strong> da situação do seu imóvel.
                Analisamos a documentação e a obra e indicamos o caminho mais rápido para a regularização —{" "}
                <span className="text-[#00aaff]">sem compromisso</span>.
              </p>

              <ul className="mt-5 flex flex-col sm:flex-row gap-3 text-sm text-[#888888] justify-center lg:justify-start">
                {["Avaliação sem custo", "Resposta ágil", "Atendimento presencial em Goiânia"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00aaff] flex-shrink-0" />
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
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#00aaff] text-[#080808] font-bold text-sm hover:bg-[#33bbff] transition-all duration-300 shadow-[0_0_30px_rgba(0,170,255,0.4)] hover:shadow-[0_0_45px_rgba(0,170,255,0.6)] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar avaliação gratuita
              </a>
              <a
                href="#contato"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-[#1a1a1a] text-[#888888] text-sm font-medium hover:border-[#00aaff]/40 hover:text-[#00aaff] hover:bg-[#00aaff]/5 transition-all duration-300 whitespace-nowrap"
              >
                Ou envie uma mensagem
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
