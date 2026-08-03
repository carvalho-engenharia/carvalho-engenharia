"use client"

import {
  Search,
  Wrench,
  FileText,
  FileCheck2,
  Building2,
  ClipboardList,
  HardHat,
  Store,
  HeartPulse,
  Footprints,
  MapPin,
  Layers,
  Users,
  TrafficCone,
  Recycle,
} from "lucide-react"

const services = [
  {
    title: "Aprovação de Projetos",
    description:
      "Protocolamos e acompanhamos a aprovação do seu projeto junto à Prefeitura de Goiânia, conforme o Código de Obras e Edificações — a etapa de licenciamento que antecede o Alvará de Construção.",
    icon: FileCheck2,
  },
  {
    title: "Projetos de Engenharia",
    description:
      "Projetos Estruturais, Elétricos e Hidrossanitários completos para residências e comércios. Do croqui ao projeto executivo aprovado.",
    icon: Wrench,
  },
  {
    title: "Alvará de Construção",
    description:
      "Obtenção do Alvará de Construção e de toda a família de licenças da LC nº 364/2023: Alvará de Acréscimo, Autorização de Reforma, Revalidação de Alvará, Autorização para Tapumes e Canteiro de Obras, Alvará de Demolição, além de Habite-se e Carta de Ocupação.",
    icon: FileText,
  },
  {
    title: "Alvarás junto às Prefeituras",
    description:
      "Assessoria completa junto à Prefeitura de Goiânia e Aparecida de Goiânia: Desmembramento, Remembramento, Modificação de Projeto (com ou sem acréscimo, inclusive as built), Licenças Ambientais (Prévia, de Instalação e Única), retificação de áreas e averbação em cartório.",
    icon: Building2,
  },
  {
    title: "Regularização de Imóveis",
    description:
      "Regularização de obras construídas sem alvará, ampliações e reformas não documentadas. INSS de obras e conformidade com a legislação vigente.",
    icon: ClipboardList,
  },
  {
    title: "Perícias e Vistorias Técnicas",
    description:
      "Laudos técnicos detalhados para avaliar a segurança e conformidade do seu imóvel. Relatórios assinados por Engenheiro Civil com registro CREA.",
    icon: Search,
  },
  {
    title: "Acompanhamento de Obras",
    description:
      "Gestão e execução de obras residenciais e comerciais do início ao fim. ART (Anotação de Responsabilidade Técnica) e controle de qualidade em cada etapa.",
    icon: HardHat,
  },
  {
    title: "Alvará de Localização e Funcionamento",
    description:
      "Nenhum comércio, indústria ou prestação de serviço pode abrir as portas em Goiânia sem esse alvará (art. 111 da LC nº 014/1992). Cuidamos do enquadramento de risco, uso do solo e protocolo junto à SEDEC — inclusive o processo simplificado para MEI e baixo risco.",
    icon: Store,
  },
  {
    title: "Alvará Sanitário (Vigilância Sanitária)",
    description:
      "Obrigatório para estabelecimentos cuja atividade possa impactar a saúde — alimentação, saúde, estética e afins (Lei nº 8.741/2008 e Portaria Municipal SMS 63/2023). Assessoria completa na classificação de risco, documentação e renovação anual junto à Vigilância Sanitária Municipal.",
    icon: HeartPulse,
  },
  {
    title: "Regularização de Calçada",
    description:
      "Adequação da calçada conforme a Lei Complementar nº 324/2019 e a Instrução Normativa nº 025/2025 — hoje exigida para emissão do Alvará de Aceite, Alvará de Regularização e Certidão de Conclusão de Obra.",
    icon: Footprints,
  },
  {
    title: "Regularização de Vazios Urbanos",
    description:
      "Terreno parado na Macrozona Construída pode gerar IPTU progressivo e até desapropriação (LC nº 371/2024). Apresentamos projeto de edificação, parcelamento ou aplicamos a Outorga Onerosa de Alteração de Uso para evitar a penalização.",
    icon: MapPin,
  },
  {
    title: "Aprovação de Loteamento",
    description:
      "Parcelamento do solo para transformar uma gleba em lotes individuais, conforme a LC nº 363/2023 — do projeto urbanístico à aprovação e registro em cartório.",
    icon: Layers,
  },
  {
    title: "Estudo de Impacto de Vizinhança (EIV)",
    description:
      "Exigido para empreendimentos de maior porte conforme a LC nº 349/2022 (arts. 254 e 257) — analisamos os efeitos do projeto na vizinhança e conduzimos a aprovação junto à Prefeitura.",
    icon: Users,
  },
  {
    title: "Estudo de Impacto de Trânsito (EIT)",
    description:
      "Complementar ao EIV para empreendimentos que geram fluxo relevante de veículos, conforme a Lei nº 10.977/2023 — elaboração e protocolo junto aos órgãos competentes.",
    icon: TrafficCone,
  },
  {
    title: "PGRCC — Plano de Gerenciamento de Resíduos",
    description:
      "Documento técnico obrigatório para aprovação de projeto e emissão do Alvará de Construção ou Demolição (Lei Federal nº 12.305/2010 e Resolução CONAMA nº 307/2002), elaborado com ART do responsável técnico.",
    icon: Recycle,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,107,239,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#066bef] uppercase mb-4">
            Nossos Serviços
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d283a] mb-4 tracking-tight">
            Soluções completas{" "}
            <span className="text-[#066bef]">em engenharia</span>
          </h2>
          <p className="text-[#5a687c] max-w-2xl mx-auto">
            Da perícia técnica ao acompanhamento de obras. Cuidamos de todo o processo para que você não precise se preocupar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#f9fafb] border border-[#e0e5eb] hover:border-[#066bef]/50 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#066bef]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#edeff3] border border-[#e0e5eb] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#066bef]/30 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-[#066bef]" />
                </div>

                <h3 className="text-xl font-bold text-[#066bef] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#5a687c] group-hover:text-[#3d4c5f] transition-colors mb-6">
                  {service.description}
                </p>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-1 text-sm text-[#066bef] hover:underline"
                >
                  Solicitar orçamento →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
