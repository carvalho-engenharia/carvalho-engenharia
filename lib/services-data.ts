export type FAQItem = {
  question: string
  answer: string
}

export type ServiceSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LegislationNote = {
  label: string
  text: string
}

export type ServiceData = {
  slug: string
  icon: "regularizacao" | "despachante" | "averbacao" | "inss" | "arquitetonico" | "estrutural"
  badge: string
  metaTitle: string
  metaDescription: string
  h1: string
  subtitle: string
  intro: string[]
  legislation?: LegislationNote
  steps?: string[]
  documents?: string[]
  sections: ServiceSection[]
  faqs: FAQItem[]
  relatedSlugs: string[]
  whatsappMessage: string
}

export const services: ServiceData[] = [
  {
    slug: "regularizacao-de-imoveis-goiania",
    icon: "regularizacao",
    badge: "Regularização de Imóveis",
    metaTitle: "Regularização de Imóveis em Goiânia | Carvalho Engenharia",
    metaDescription:
      "Regularização de imóveis irregulares em Goiânia: sem alvará, sem Habite-se ou sem averbação. Engenheiro responsável técnico cuida de todo o processo junto à Prefeitura e ao Cartório.",
    h1: "Regularização de Imóveis em Goiânia",
    subtitle:
      "Se a construção não corresponde ao que está registrado na Prefeitura ou no Cartório, o imóvel está irregular — e isso trava financiamento, venda e inventário. Cuidamos de todo o processo, do levantamento técnico à averbação final.",
    intro: [
      "É uma das situações mais comuns entre proprietários em Goiânia: comprar, herdar ou construir um imóvel e só depois descobrir que ele está irregular perante a Prefeitura. Na maioria dos casos, tem solução — e conduzida por um responsável técnico, sem retrabalho.",
    ],
    steps: [
      "Levantamento arquitetônico da construção existente",
      "Identificação do tipo de processo cabível (Alvará de Regularização ou Alvará de Aceite)",
      "Reunião da documentação e comprovação da época da construção",
      "Protocolo junto à Prefeitura de Goiânia e acompanhamento das exigências",
      "Emissão do alvará correspondente",
      "Averbação da construção na matrícula, junto ao Cartório de Registro de Imóveis",
    ],
    documents: [
      "Certidão de registro do imóvel atualizada (até 90 dias)",
      "Levantamento arquitetônico ou projeto aprovado",
      "ART/RRT do responsável técnico",
      "Comprovação da época da construção (IPTU antigo, imagem de satélite datada, etc.)",
      "Documentos pessoais do proprietário ou CNPJ, se pessoa jurídica",
    ],
    sections: [
      {
        heading: "O que torna um imóvel irregular",
        bullets: [
          "Construção feita sem alvará de construção",
          "Ampliação ou reforma não aprovada pela Prefeitura",
          "Imóvel sem Habite-se (certidão de conclusão de obra)",
          "Construção não averbada na matrícula do cartório",
          "Divergência entre a área construída real e a documentada",
        ],
      },
      {
        heading: "Por que regularizar antes de vender ou financiar",
        paragraphs: [
          "Bancos, incluindo a Caixa Econômica Federal, normalmente exigem documentação regularizada para aprovar financiamento. Processos de inventário e partilha também costumam travar quando o imóvel não está averbado — e um imóvel regularizado vale mais no mercado, além de eliminar o risco de multas e embargos da Prefeitura.",
        ],
      },
      {
        heading: "Dois caminhos, conforme a época da construção",
        paragraphs: [
          "Construções posteriores a 19/10/1995 seguem pelo Alvará de Regularização, instituído pela Lei Complementar nº 314/2018 (com atualizações da LC 349/2022 e LC 364/2023) — exige levantamento arquitetônico atualizado, ART do responsável técnico e comprovação da época da edificação.",
          "Construções anteriores a essa data seguem pelo Alvará de Aceite, um processo mais simples, regulamentado pela mesma lei complementar. Em ambos os casos, depois de emitido o alvará, a construção ainda precisa ser averbada na matrícula para a regularização ficar completa.",
        ],
      },
    ],
    faqs: [
      {
        question: "Posso vender um imóvel irregular?",
        answer:
          "Sim, mas o comprador assume o risco e normalmente não consegue financiamento bancário — o que reduz bastante o número de interessados e o valor de venda.",
      },
      {
        question: "Regularizar é caro?",
        answer:
          "O custo varia conforme o porte do imóvel e a complexidade da situação. Em geral, é bem menor do que a valorização e as opções que ele destrava, como financiamento e venda facilitada.",
      },
      {
        question: "Preciso de um engenheiro para regularizar meu imóvel?",
        answer:
          "Sim — a lei exige ART de um profissional habilitado (engenheiro ou arquiteto) para conduzir o levantamento e assinar o processo junto à Prefeitura.",
      },
      {
        question: "Quanto tempo leva o processo?",
        answer:
          "Varia conforme a complexidade do imóvel e o volume de processos na Prefeitura, mas em geral fica entre 3 e 12 meses do levantamento técnico até a averbação final em cartório.",
      },
    ],
    relatedSlugs: ["averbacao-de-imovel-goiania", "despachante-imobiliario-goiania", "inss-de-obra-goiania"],
    whatsappMessage: "Olá! Quero regularizar meu imóvel em Goiânia e gostaria de uma avaliação.",
  },
  {
    slug: "despachante-imobiliario-goiania",
    icon: "despachante",
    badge: "Despachante Imobiliário",
    metaTitle: "Despachante Imobiliário em Goiânia | Carvalho Engenharia",
    metaDescription:
      "Despachante imobiliário e responsável técnico em um só serviço: tramitação de alvarás, Habite-se, averbação e certidões em cartórios e prefeituras de Goiânia.",
    h1: "Despachante Imobiliário em Goiânia",
    subtitle:
      "Filas, formulários e exigências que mudam de um atendente para outro consomem tempo e atrasam processos. Cuidamos de toda a tramitação em cartórios e na Prefeitura — e, como somos engenheiros habilitados no CREA, também assinamos a parte técnica quando o processo exige.",
    intro: [
      "O despachante imobiliário é o profissional responsável por conduzir toda a parte burocrática de processos ligados a imóveis, atuando como intermediário entre o proprietário e órgãos como a Prefeitura, o Cartório de Registro de Imóveis e a Receita Federal.",
    ],
    sections: [
      {
        heading: "O que um despachante imobiliário faz",
        bullets: [
          "Levantamento e organização da documentação necessária",
          "Protocolo de requerimentos junto à Prefeitura",
          "Acompanhamento do andamento do processo",
          "Retirada de certidões e alvarás",
          "Resolução de exigências e pendências apontadas pelo órgão",
        ],
      },
      {
        heading: "Quando vale a pena contratar",
        bullets: [
          "Falta de tempo para idas presenciais e acompanhamento constante",
          "Desconhecimento das exigências específicas de cada tipo de alvará ou certidão",
          "Urgência — um profissional que já conhece o fluxo evita gargalos comuns",
          "Processos parados há meses depois de uma tentativa sozinho",
        ],
      },
      {
        heading: "Despachante e responsável técnico, no mesmo lugar",
        paragraphs: [
          "Uma dúvida comum é a diferença entre contratar um despachante e um engenheiro civil. Na Carvalho Engenharia, unimos os dois papéis: além de cuidar de toda a tramitação documental, somos responsáveis técnicos habilitados pelo CREA para assinar ART, elaborar projetos e levantamentos técnicos quando o processo exige — evitando que você precise contratar dois profissionais separados.",
        ],
      },
      {
        heading: "Processos que agilizamos",
        bullets: [
          "Alvará de construção, regularização e aceite",
          "Habite-se e Carta de Ocupação",
          "Averbação de construção em cartório",
          "Desmembramento e remembramento",
          "Certidões diversas junto à Prefeitura e ao cartório",
        ],
      },
    ],
    faqs: [
      {
        question: "Preciso de procuração para contratar um despachante?",
        answer:
          "Sim, normalmente é necessária uma procuração simples autorizando o profissional a representá-lo nos órgãos competentes.",
      },
      {
        question: "O despachante substitui o engenheiro responsável técnico?",
        answer:
          "Não para todos os casos. Processos que exigem ART, como aprovação de projeto ou alvará de construção, precisam de um profissional habilitado no CREA — por isso vale contratar um serviço que já reúna as duas frentes.",
      },
      {
        question: "Quanto tempo um despachante economiza no processo?",
        answer:
          "Varia por tipo de processo, mas a principal economia não é só de tempo — é de retrabalho, já que erros de documentação costumam gerar exigências que atrasam meses o andamento.",
      },
    ],
    relatedSlugs: ["regularizacao-de-imoveis-goiania", "averbacao-de-imovel-goiania", "inss-de-obra-goiania"],
    whatsappMessage: "Olá! Preciso de um despachante imobiliário em Goiânia para agilizar um processo.",
  },
  {
    slug: "averbacao-de-imovel-goiania",
    icon: "averbacao",
    badge: "Averbação de Imóvel",
    metaTitle: "Averbação de Imóvel em Goiânia | Carvalho Engenharia",
    metaDescription:
      "Averbação de construção na matrícula do imóvel em Goiânia. Entenda a diferença entre alvará, Habite-se e averbação, e o que fazer para desbloquear financiamento e venda.",
    h1: "Averbação de Imóvel em Goiânia",
    subtitle:
      "É comum ver imóveis com alvará e Habite-se em ordem, mas ainda assim recusados por bancos na hora do financiamento. Na maioria das vezes falta um passo final: a averbação da construção na matrícula do imóvel.",
    intro: [
      "Averbação de construção é o registro da construção na matrícula do imóvel, feito no Cartório de Registro de Imóveis. Enquanto o alvará e o Habite-se são emitidos pela Prefeitura, a averbação é o que efetivamente atualiza a matrícula — o documento que legalmente descreve o que existe no terreno. Sem ela, a matrícula pode continuar descrevendo um terreno vazio, mesmo com uma casa ou prédio construído há anos.",
    ],
    documents: [
      "Certidão de Registro do Imóvel de Inteiro Teor atualizada",
      "Certidão de Cadastramento emitida pela Prefeitura, para fins de averbação",
      "Termo de Habite-se e quadro de área",
      "Projeto arquitetônico aprovado",
      "Requerimento assinado pelo proprietário, com firma reconhecida",
    ],
    sections: [
      {
        heading: "Por que a averbação importa",
        bullets: [
          "Financiamento bancário: bancos exigem construção averbada para aceitar o imóvel como garantia",
          "Venda do imóvel: construção não averbada reduz o valor de mercado, pois o comprador herda o problema",
          "Inventário e partilha: a matrícula precisa refletir a realidade construída para dividir o patrimônio",
          "Segurança jurídica: a matrícula é o documento que juridicamente comprova o que existe no imóvel",
        ],
      },
      {
        heading: "Alvará, Habite-se e averbação: qual a diferença",
        bullets: [
          "Alvará de construção — autorização da Prefeitura para iniciar a obra",
          "Habite-se — certidão da Prefeitura de que a obra foi concluída e pode ser habitada",
          "Averbação — registro dessa construção na matrícula do imóvel, junto ao Cartório",
        ],
        paragraphs: [
          "Os três são etapas de um mesmo processo, mas emitidos por órgãos diferentes — e ter os dois primeiros não substitui o terceiro.",
        ],
      },
      {
        heading: "Como saber se sua construção está averbada",
        paragraphs: [
          "Basta solicitar uma certidão de matrícula atualizada no Cartório de Registro de Imóveis correspondente. Se a matrícula não menciona a área construída ou ainda descreve o imóvel como terreno, a construção não está averbada.",
        ],
      },
    ],
    faqs: [
      {
        question: "Toda construção precisa ser averbada?",
        answer:
          "Sim — qualquer construção que altera a situação física do imóvel deveria estar refletida na matrícula, mesmo que a obra já tenha sido feita há muitos anos.",
      },
      {
        question: "Posso averbar uma construção antiga, feita há décadas?",
        answer:
          "Sim, desde que seja possível comprovar a existência e a época da construção, geralmente por meio de documentos como IPTU antigo ou imagens datadas.",
      },
      {
        question: "A averbação substitui o Habite-se?",
        answer:
          "Não — normalmente é necessário ter o Habite-se (ou processo equivalente de regularização) antes de conseguir averbar a construção no cartório.",
      },
    ],
    relatedSlugs: ["regularizacao-de-imoveis-goiania", "inss-de-obra-goiania", "despachante-imobiliario-goiania"],
    whatsappMessage: "Olá! Preciso averbar a construção do meu imóvel em Goiânia.",
  },
  {
    slug: "inss-de-obra-goiania",
    icon: "inss",
    badge: "INSS de Obra",
    metaTitle: "INSS de Obra em Goiânia: CNO, SERO e CND | Carvalho Engenharia",
    metaDescription:
      "Regularização do INSS de obra em Goiânia: inscrição no CNO, aferição no SERO e emissão da CND, sem multa da Receita Federal. Responsabilidade técnica registrada no CREA.",
    h1: "INSS de Obra em Goiânia (CNO, SERO e CND)",
    subtitle:
      "Toda edificação gera uma obrigação previdenciária junto à Receita Federal, mesmo quando construída com mão de obra informal. Cuidamos da inscrição, do cálculo e da certidão final, evitando multa e pendências no Habite-se, no financiamento e na venda.",
    intro: [
      "Muita gente descobre que precisa regularizar o INSS de obra só na hora de vender o imóvel, pedir o Habite-se ou fazer um financiamento — e aí a pendência vira urgência. Essa regularização é regida pela Instrução Normativa RFB nº 2.061/2021, que trata do Cadastro Nacional de Obras.",
    ],
    steps: [
      "Inscrição da obra no CNO (se ainda não feita), em até 30 dias do início dos trabalhos",
      "Levantamento de ART, plantas, alvará e Habite-se, quando existentes",
      "Reunião de notas fiscais e comprovantes de recolhimento de INSS sobre mão de obra, se houver",
      "Aferição da obra no SERO, com cálculo do valor devido conforme área e padrão construtivo",
      "Pagamento de eventuais débitos apurados",
      "Emissão da CND de obra",
    ],
    sections: [
      {
        heading: "CNO, SERO e CND: o que significa cada sigla",
        bullets: [
          "CNO (Cadastro Nacional de Obras) — cadastro obrigatório de toda obra, feito pelo portal e-CAC da Receita Federal",
          "SERO (Sistema Eletrônico de Registro de Obras) — sistema onde é feita a aferição: o cálculo do INSS devido",
          "CND (Certidão Negativa de Débitos) — certidão emitida após a quitação de eventuais débitos, comprovando que não há pendência",
        ],
      },
      {
        heading: "Quando a CND de obra é exigida",
        bullets: [
          "Para obtenção do Habite-se em muitos municípios",
          "Para financiamento bancário do imóvel",
          "Para averbação da construção no Cartório de Registro de Imóveis",
          "Em processos de venda, quando o comprador exige documentação completa",
        ],
      },
      {
        heading: "O que acontece sem a regularização",
        paragraphs: [
          "A Receita Federal pode aplicar multa sobre o valor do INSS apurado, além de gerar pendência que trava o Habite-se, a averbação e a venda do imóvel. Quanto mais tempo passa, maior tende a ser o valor cobrado com juros e correção.",
        ],
      },
    ],
    faqs: [
      {
        question: "Toda reforma precisa de CNO?",
        answer:
          "Reformas de pequeno porte geralmente não exigem, mas construções novas, ampliações significativas e obras comerciais/industriais normalmente sim. Vale consultar um responsável técnico para o seu caso.",
      },
      {
        question: "Quanto tempo leva para regularizar o INSS de obra?",
        answer:
          "Depende do volume de documentação disponível e da complexidade da obra, mas o processo de aferição e emissão da CND costuma levar algumas semanas depois de toda a documentação reunida.",
      },
      {
        question: "Posso fazer isso sozinho, sem ajuda técnica?",
        answer:
          "É possível, mas o processo envolve sistemas específicos da Receita Federal e cálculo técnico da área construída — um responsável técnico reduz bastante o risco de erro e de cobrança indevida.",
      },
    ],
    relatedSlugs: ["averbacao-de-imovel-goiania", "regularizacao-de-imoveis-goiania", "despachante-imobiliario-goiania"],
    whatsappMessage: "Olá! Preciso regularizar o INSS de obra (CNO/SERO/CND) de um imóvel em Goiânia.",
  },
  {
    slug: "projeto-arquitetonico-goiania",
    icon: "arquitetonico",
    badge: "Projeto Arquitetônico",
    metaTitle: "Projeto Arquitetônico em Goiânia | Carvalho Engenharia",
    metaDescription:
      "Projetos arquitetônicos residenciais e comerciais em Goiânia, prontos para aprovação na Prefeitura. Planta de situação, cortes, fachadas, quadro de áreas e ART inclusos.",
    h1: "Projeto Arquitetônico em Goiânia",
    subtitle:
      "Todo processo de construção começa com um projeto arquitetônico — a base do alvará, do projeto estrutural e do Habite-se. Desenvolvemos projetos funcionais e personalizados, dentro dos parâmetros do Plano Diretor de Goiânia.",
    intro: [
      "O projeto arquitetônico é o conjunto de desenhos técnicos que representa como será a edificação — distribuição dos ambientes, dimensões, aberturas, materiais e a relação do imóvel com o terreno e a vizinhança. É a partir dele que os projetos complementares são desenvolvidos, e é ele que a Prefeitura analisa para conceder o alvará de construção.",
    ],
    sections: [
      {
        heading: "O que o projeto arquitetônico deve conter",
        bullets: [
          "Planta de situação — como a edificação se posiciona no terreno",
          "Planta baixa e de locação — distribuição interna dos ambientes",
          "Plantas dos pavimentos — detalhamento de cada andar",
          "Cortes — representação vertical, com pé-direito e níveis",
          "Fachadas — representação externa da edificação",
          "Quadro de áreas — área construída, área do terreno e índices urbanísticos",
          "ART/RRT do responsável técnico",
        ],
      },
      {
        heading: "Por que o projeto precisa atender ao Plano Diretor",
        paragraphs: [
          "Antes de desenhar qualquer coisa, o projeto precisa respeitar parâmetros da legislação municipal — recuos obrigatórios, taxa de ocupação, coeficiente de aproveitamento, gabarito de altura e área permeável mínima, entre outros. Um projeto que não considera esses limites é recusado na análise da Prefeitura, gerando retrabalho.",
        ],
      },
      {
        heading: "Projeto novo x levantamento de regularização",
        paragraphs: [
          "Quando a construção já existe e você está regularizando, o processo se chama levantamento arquitetônico: em vez de desenhar o que será construído, medimos e desenhamos o que já existe, para submeter à Prefeitura como parte do Alvará de Regularização ou de Aceite.",
        ],
      },
    ],
    faqs: [
      {
        question: "Posso alterar o projeto arquitetônico depois de aprovado?",
        answer:
          "Sim, mas alterações significativas exigem um processo de modificação de projeto junto à Prefeitura, que também precisa ser aprovado antes da execução da mudança.",
      },
      {
        question: "Quanto tempo leva para desenvolver um projeto arquitetônico?",
        answer:
          "Varia conforme a complexidade da edificação e o número de revisões até o cliente aprovar o layout final.",
      },
      {
        question: "O projeto arquitetônico já inclui o projeto estrutural?",
        answer:
          "Não — são projetos complementares desenvolvidos por profissionais diferentes, que precisam estar compatibilizados entre si.",
      },
    ],
    relatedSlugs: ["projeto-estrutural-goiania", "regularizacao-de-imoveis-goiania", "inss-de-obra-goiania"],
    whatsappMessage: "Olá! Quero um orçamento para um projeto arquitetônico em Goiânia.",
  },
  {
    slug: "projeto-estrutural-goiania",
    icon: "estrutural",
    badge: "Projeto Estrutural",
    metaTitle: "Projeto Estrutural em Goiânia | Carvalho Engenharia",
    metaDescription:
      "Projetos estruturais em concreto armado, metálico ou misto, com cálculo estrutural completo e ART registrada no CREA. Engenheiro estrutural em Goiânia.",
    h1: "Projeto Estrutural em Goiânia",
    subtitle:
      "O projeto estrutural é o que garante que a edificação fica em pé com segurança. Elaboramos projetos dimensionados para o seu terreno, compatibilizados com o projeto arquitetônico, com memorial de cálculo e ART registrada no CREA.",
    intro: [
      "O projeto estrutural é o conjunto de desenhos e cálculos técnicos que define como a edificação vai suportar as cargas a que estará sujeita — peso próprio, uso, vento e, em alguns casos, ações sísmicas — dentro das normas técnicas brasileiras. Ele define fundações, pilares, vigas, lajes e a interação entre todos esses elementos.",
    ],
    sections: [
      {
        heading: "O que o projeto estrutural deve conter",
        bullets: [
          "Plantas de fôrma — formato e posicionamento dos elementos estruturais",
          "Detalhamento de armação, para estruturas em concreto armado",
          "Memorial de cálculo, com as verificações de segurança",
          "Especificação dos materiais utilizados (resistência do concreto, tipo de aço, etc.)",
          "ART do responsável técnico pelo projeto",
        ],
      },
      {
        heading: "Concreto armado, metálico ou misto",
        bullets: [
          "Concreto armado — a solução mais comum no Brasil, com boa relação custo-benefício",
          "Estrutura metálica — indicada para prazo de execução menor, grandes vãos livres ou reformas",
          "Estrutura mista — combina os dois materiais, conforme a necessidade do projeto",
        ],
      },
      {
        heading: "O que verificar antes de aprovar um projeto estrutural",
        bullets: [
          "ART registrada por um engenheiro habilitado",
          "Compatibilidade com o projeto arquitetônico — pilares e vigas não podem conflitar com portas ou janelas",
          "Compatibilidade com projetos elétrico e hidrossanitário",
          "Memorial de cálculo disponível e acessível",
          "Conformidade com o Código de Obras do município",
        ],
      },
    ],
    faqs: [
      {
        question: "Todo projeto de construção precisa de projeto estrutural?",
        answer:
          "Praticamente sim — qualquer edificação precisa de uma estrutura dimensionada com segurança, mesmo que de forma simplificada para construções de pequeno porte.",
      },
      {
        question: "Posso usar um projeto estrutural pronto de outra obra?",
        answer:
          "Não é recomendado. Cada terreno tem características de solo, cargas e condições específicas que exigem um projeto dimensionado para aquele caso.",
      },
      {
        question: "Quanto tempo leva para desenvolver um projeto estrutural?",
        answer:
          "Varia conforme a complexidade da edificação, mas costuma acompanhar o cronograma geral do projeto arquitetônico e dos projetos complementares.",
      },
    ],
    relatedSlugs: ["projeto-arquitetonico-goiania", "regularizacao-de-imoveis-goiania", "inss-de-obra-goiania"],
    whatsappMessage: "Olá! Quero um orçamento para um projeto estrutural em Goiânia.",
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}

const BASE_URL = "https://www.carvalho-engenharia.com"

export function buildServiceSchema(data: ServiceData) {
  const url = `${BASE_URL}/${data.slug}`

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.badge,
    name: data.h1,
    description: data.metaDescription,
    url,
    provider: {
      "@type": "ProfessionalService",
      name: "Carvalho Engenharia",
      telephone: "+55-62-99806-2169",
      url: BASE_URL,
    },
    areaServed: [
      { "@type": "City", name: "Goiânia" },
      { "@type": "City", name: "Aparecida de Goiânia" },
      { "@type": "City", name: "Anápolis" },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${BASE_URL}/#servicos` },
      { "@type": "ListItem", position: 3, name: data.badge, item: url },
    ],
  }

  return [serviceSchema, faqSchema, breadcrumbSchema]
}
