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
  icon:
    | "regularizacao"
    | "despachante"
    | "averbacao"
    | "inss"
    | "arquitetonico"
    | "estrutural"
    | "avaliador"
    | "consultoria"
    | "desmembramento"
    | "art"
    | "obra"
    | "projetos"
    | "alvara"
    | "vistoria"
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
    metaTitle: "Regularização de Imóveis em Goiânia",
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
    metaTitle: "Despachante Imobiliário em Goiânia",
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
    metaTitle: "Averbação de Imóvel em Goiânia",
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
    metaTitle: "INSS de Obra em Goiânia: CNO, SERO e CND",
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
    metaTitle: "Projeto Arquitetônico em Goiânia",
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
    metaTitle: "Projeto Estrutural em Goiânia",
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
  {
    slug: "avaliador-de-imovel-goiania",
    icon: "avaliador",
    badge: "Avaliador de Imóvel",
    metaTitle: "Avaliador de Imóvel em Goiânia: Laudo de Avaliação",
    metaDescription:
      "Laudo de Avaliação de Imóvel assinado por engenheiro civil habilitado (CREA), com ART, para financiamento, inventário, partilha ou venda em Goiânia.",
    h1: "Avaliador de Imóvel em Goiânia",
    subtitle:
      "Financiamento bancário, inventário, partilha de bens, seguro — várias situações exigem um laudo de avaliação assinado por profissional habilitado. Emitimos com ART, seguindo a metodologia técnica reconhecida.",
    intro: [
      "O laudo de avaliação de imóvel é um documento técnico que determina o valor de mercado de um imóvel, elaborado por um profissional habilitado com registro ativo no CREA. Segue metodologias reconhecidas, como a NBR 14653, e considera localização, estado de conservação, área construída, padrão construtivo e valores de mercado de imóveis comparáveis.",
    ],
    steps: [
      "Solicitação e envio dos documentos básicos do imóvel",
      "Visita técnica ao local para levantamento das características",
      "Pesquisa de mercado com imóveis comparáveis na região",
      "Aplicação da metodologia técnica adequada ao caso",
      "Emissão do laudo assinado, com ART",
    ],
    sections: [
      {
        heading: "Quando você precisa de um laudo de avaliação",
        bullets: [
          "Financiamento bancário — bancos exigem avaliação própria ou aceitam laudo de profissional habilitado, dependendo da instituição",
          "Inventário e partilha — para dividir bens entre herdeiros de forma justa",
          "Divórcio e partilha de bens — mesma lógica do inventário, aplicada à separação de patrimônio",
          "Seguro — seguradoras podem exigir laudo para determinar o valor segurado",
          "Compra e venda — para negociar com segurança, sem depender só da percepção subjetiva de valor",
          "Processos judiciais — ações que envolvem disputa de valor patrimonial",
        ],
      },
      {
        heading: "O que garante que um laudo seja válido",
        bullets: [
          "Assinatura de profissional habilitado, com ART registrada no CREA",
          "Metodologia reconhecida (comparativa de dados de mercado, involutiva, de custo, conforme o caso)",
          "Visita técnica ao imóvel, com registro fotográfico e descritivo das características",
          "Fundamentação técnica clara do valor apresentado",
        ],
        paragraphs: [
          "Um laudo sem ART ou feito por quem não tem habilitação técnica pode ser rejeitado por bancos, cartórios e processos judiciais — o que gera atraso e necessidade de refazer o trabalho.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quanto tempo demora para ficar pronto um laudo de avaliação?",
        answer:
          "Varia conforme a complexidade do imóvel e a disponibilidade de dados de mercado comparáveis, mas normalmente leva de alguns dias a poucas semanas após a visita técnica.",
      },
      {
        question: "O laudo de avaliação serve para qualquer banco?",
        answer:
          "A maioria dos bancos aceita laudo de profissional habilitado com ART, mas alguns fazem sua própria avaliação interna. Vale confirmar com a instituição antes de contratar.",
      },
      {
        question: "Preciso de avaliação para vender meu imóvel?",
        answer:
          "Não é obrigatório, mas ajuda a negociar com mais segurança e evita subvalorizar ou supervalorizar o imóvel no anúncio.",
      },
    ],
    relatedSlugs: ["regularizacao-de-imoveis-goiania", "averbacao-de-imovel-goiania", "consultoria-engenharia-civil-goiania"],
    whatsappMessage: "Olá! Preciso de um laudo de avaliação de imóvel em Goiânia.",
  },
  {
    slug: "gerenciamento-de-projetos-goiania",
    icon: "projetos",
    badge: "Gerenciamento de Projetos",
    metaTitle: "Gerenciamento de Projetos de Engenharia em Goiânia",
    metaDescription:
      "Coordenação técnica entre projeto arquitetônico, estrutural, elétrico e hidrossanitário em Goiânia, evitando retrabalho e agilizando a aprovação municipal.",
    h1: "Gerenciamento de Projetos de Engenharia em Goiânia",
    subtitle:
      "Um dos maiores motivos de atraso e custo extra em obras é a falta de coordenação entre os projetos. Centralizamos a compatibilização entre disciplinas antes da obra começar, quando corrigir é só ajustar um desenho.",
    intro: [
      "Gerenciamento de projetos de engenharia é a coordenação técnica de todas as etapas e disciplinas de um projeto de construção — desde a concepção arquitetônica até os projetos complementares (estrutural, elétrico, hidrossanitário) — garantindo que tudo esteja compatibilizado, dentro do prazo e pronto para aprovação nos órgãos competentes.",
    ],
    sections: [
      {
        heading: "Por que a compatibilização entre disciplinas importa",
        paragraphs: [
          "Um exemplo comum: o projeto elétrico posiciona um quadro de distribuição exatamente onde o projeto estrutural previu um pilar. Se isso só é percebido na obra, a solução vira improviso — e improviso em engenharia custa caro e pode comprometer a segurança da edificação. O gerenciamento de projetos identifica esses conflitos antes da obra começar, na fase de projeto.",
        ],
      },
      {
        heading: "O que está incluído",
        bullets: [
          "Coordenação entre projeto arquitetônico, estrutural, elétrico e hidrossanitário",
          "Verificação de compatibilidade entre as disciplinas",
          "Acompanhamento de prazos de cada etapa",
          "Interface com os profissionais responsáveis por cada projeto complementar",
          "Preparação da documentação completa para aprovação junto à Prefeitura",
        ],
      },
      {
        heading: "Gerenciamento de projetos x gerenciamento de obra",
        paragraphs: [
          "São etapas diferentes, embora complementares: o gerenciamento de projetos acontece antes da obra começar, na fase de planejamento e aprovação. Já o gerenciamento de obra acompanha a execução física, no canteiro. Muitos clientes contratam os dois em sequência, com o mesmo responsável técnico.",
        ],
      },
    ],
    faqs: [
      {
        question: "Gerenciamento de projetos é obrigatório por lei?",
        answer:
          "Não é uma exigência legal em si, mas a compatibilização entre disciplinas é essencial para que o projeto seja aprovado sem exigências repetidas da Prefeitura, e para evitar erros de execução.",
      },
      {
        question: "Quanto tempo leva o gerenciamento de um projeto até a aprovação?",
        answer:
          "Varia conforme a complexidade da edificação e o número de disciplinas envolvidas, mas projetos bem coordenados desde o início tendem a passar pela aprovação municipal com menos rodadas de exigência.",
      },
      {
        question: "Posso contratar gerenciamento de projetos mesmo já tendo os projetos prontos?",
        answer:
          "Sim — nesse caso, o trabalho foca em revisar a compatibilidade entre os projetos existentes e identificar conflitos antes da aprovação ou da execução.",
      },
    ],
    relatedSlugs: ["projeto-arquitetonico-goiania", "projeto-estrutural-goiania", "gerenciamento-de-obra-goiania"],
    whatsappMessage: "Olá! Preciso de gerenciamento de projetos de engenharia em Goiânia.",
  },
  {
    slug: "gerenciamento-de-obra-goiania",
    icon: "obra",
    badge: "Gerenciamento de Obra",
    metaTitle: "Gerenciamento de Obra em Goiânia",
    metaDescription:
      "Acompanhamento técnico de obras em Goiânia: cronograma, custo e qualidade, com responsabilidade técnica (ART) registrada no CREA, do início ao fim da execução.",
    h1: "Gerenciamento de Obra em Goiânia",
    subtitle:
      "Contratar uma equipe para construir é só parte do trabalho. Acompanhamos tecnicamente a execução — cronograma, custos e qualidade — para a obra não atrasar, estourar orçamento ou sair diferente do que foi planejado.",
    intro: [
      "Gerenciamento de obra é o acompanhamento técnico da execução de uma construção, do início ao fim, feito por um profissional habilitado com ART registrada. Cobre três frentes principais — cronograma, custo e qualidade — garantindo que a obra siga o que foi projetado e aprovado, dentro do prazo e do orçamento combinados.",
    ],
    sections: [
      {
        heading: "O que está incluído",
        bullets: [
          "Planejamento e acompanhamento do cronograma físico-financeiro",
          "Fiscalização da qualidade da execução, conforme normas técnicas",
          "Controle de custos e comparação com o orçamento previsto",
          "Verificação de conformidade com o projeto aprovado pela Prefeitura",
          "Interface com fornecedores, empreiteiros e equipe de obra",
          "Emissão de ART do responsável técnico pela execução",
        ],
      },
      {
        heading: "Gerenciamento de obra x mestre de obras",
        paragraphs: [
          "O mestre de obras coordena a equipe no dia a dia do canteiro — organiza tarefas, materiais e mão de obra. O gerenciamento técnico, feito por um engenheiro, vai além: garante que a execução está de acordo com o projeto, as normas técnicas e a legislação, além de assumir a responsabilidade técnica formal (ART) perante o CREA e a Prefeitura. Os dois papéis não competem — em obras maiores, é comum ter as duas funções trabalhando juntas.",
        ],
      },
      {
        heading: "Quando contratar",
        bullets: [
          "Construções novas, de qualquer porte",
          "Reformas estruturais ou ampliações",
          "Quando você não vai acompanhar pessoalmente a execução no dia a dia",
          "Quando a obra exige emissão de ART para o Habite-se ou INSS de obra",
        ],
      },
    ],
    faqs: [
      {
        question: "Gerenciamento de obra é obrigatório por lei?",
        answer:
          "A responsabilidade técnica (ART) é exigida para diversos tipos de construção, principalmente para obtenção de alvará, Habite-se e regularização junto ao INSS. Consulte um responsável técnico para confirmar a exigência do seu caso.",
      },
      {
        question: "Quanto custa o gerenciamento de obra?",
        answer:
          "O valor costuma ser calculado como percentual do custo total da obra ou por escopo de acompanhamento, variando conforme porte e complexidade.",
      },
      {
        question: "O gerenciamento de obra inclui o projeto também?",
        answer:
          "Pode incluir, dependendo do contrato — muitos clientes optam por contratar gerenciamento de projetos e de obra em conjunto, com o mesmo responsável técnico.",
      },
    ],
    relatedSlugs: ["gerenciamento-de-projetos-goiania", "projeto-estrutural-goiania", "emissao-de-art-goiania"],
    whatsappMessage: "Olá! Preciso de gerenciamento de obra em Goiânia.",
  },
  {
    slug: "consultoria-engenharia-civil-goiania",
    icon: "consultoria",
    badge: "Consultoria em Engenharia Civil",
    metaTitle: "Consultoria em Engenharia Civil em Goiânia",
    metaDescription:
      "Consultoria técnica para patologias construtivas, viabilidade de empreendimentos e pareceres técnicos em Goiânia. Engenheiro civil habilitado no CREA.",
    h1: "Consultoria em Engenharia Civil em Goiânia",
    subtitle:
      "Nem toda situação exige um projeto completo — às vezes o que você precisa é de uma opinião técnica confiável antes de tomar uma decisão. É esse o papel da consultoria em engenharia civil.",
    intro: [
      "Consultoria em engenharia civil é um serviço de análise e parecer técnico prestado por um engenheiro civil habilitado, sem necessariamente envolver a elaboração de um projeto completo ou a execução de uma obra. O objetivo é dar embasamento técnico para uma decisão.",
    ],
    sections: [
      {
        heading: "Quando a consultoria é indicada",
        bullets: [
          "Patologias construtivas — trincas, infiltrações, umidade, desplacamento de revestimento",
          "Viabilidade de empreendimentos — antes de comprar um terreno ou investir em um projeto",
          "Compra de imóvel usado — parecer técnico que identifica problemas não visíveis a olho leigo",
          "Dúvida entre soluções técnicas — comparação de caminhos possíveis para resolver um problema construtivo",
          "Segunda opinião técnica — avaliação independente de um orçamento, projeto ou diagnóstico já existente",
        ],
      },
      {
        heading: "O que você recebe",
        bullets: [
          "Visita técnica ao local, quando aplicável",
          "Análise da situação apresentada",
          "Parecer técnico por escrito, com a fundamentação da avaliação",
          "Recomendações de próximos passos, quando cabível",
        ],
      },
      {
        heading: "Consultoria x laudo pericial x projeto",
        bullets: [
          "Consultoria — análise e recomendação técnica, mais ágil e pontual",
          "Laudo pericial — documento técnico mais formal, usado para fins jurídicos, bancários ou de avaliação de imóvel",
          "Projeto — conjunto de desenhos técnicos detalhados para execução de uma obra, aprovação municipal etc.",
        ],
      },
    ],
    faqs: [
      {
        question: "Consultoria em engenharia civil serve para resolver disputa com vizinho ou construtora?",
        answer:
          "Pode servir como base técnica inicial, mas para processos judiciais formais geralmente é necessário um laudo pericial com metodologia específica.",
      },
      {
        question: "Quanto tempo leva uma consultoria?",
        answer:
          "Depende da complexidade da situação, mas costuma ser mais rápida que um projeto completo — muitas vezes resolvida em uma ou poucas visitas técnicas.",
      },
      {
        question: "Preciso de consultoria antes de comprar qualquer imóvel?",
        answer:
          "Não é obrigatório, mas é especialmente recomendado para imóveis mais antigos, com sinais visíveis de problema estrutural, ou quando o valor do negócio justifica reduzir o risco antes de fechar.",
      },
    ],
    relatedSlugs: ["avaliador-de-imovel-goiania", "projeto-estrutural-goiania", "regularizacao-de-imoveis-goiania"],
    whatsappMessage: "Olá! Preciso de consultoria em engenharia civil em Goiânia.",
  },
  {
    slug: "emissao-de-art-goiania",
    icon: "art",
    badge: "Emissão de ART",
    metaTitle: "Emissão de ART em Goiânia",
    metaDescription:
      "Emissão de ART (Anotação de Responsabilidade Técnica) para projetos, execuções e reformas em Goiânia, registrada no CREA com agilidade.",
    h1: "Emissão de ART em Goiânia",
    subtitle:
      "ART é o documento que formaliza a responsabilidade técnica de um engenheiro sobre um projeto, execução ou reforma. Sem ela, a documentação é rejeitada por Prefeitura, cartório e bancos.",
    intro: [
      "ART é a Anotação de Responsabilidade Técnica, um documento obrigatório registrado no CREA que formaliza a responsabilidade técnica de um engenheiro ou profissional habilitado sobre um projeto, execução, reforma ou serviço de engenharia. Na prática, é o que garante que existe um profissional legalmente responsável por aquele trabalho.",
    ],
    steps: [
      "O profissional habilitado assume formalmente a responsabilidade pelo serviço junto ao CREA",
      "A ART é registrada e paga (o valor varia conforme o tipo e a complexidade do serviço)",
      "O documento fica vinculado ao projeto, execução ou laudo, servindo como comprovação legal",
    ],
    sections: [
      {
        heading: "Quando a ART é obrigatória",
        bullets: [
          "Projetos de construção, reforma ou ampliação",
          "Execução de obras (construção, reforma, demolição)",
          "Aprovação de alvará de construção ou regularização junto à Prefeitura",
          "Laudos técnicos, vistorias e avaliações de imóvel",
          "Projetos estruturais, elétricos e hidrossanitários",
          "Regularização de INSS de obra",
        ],
      },
      {
        heading: "Por que contratar alguém sem ART é arriscado",
        bullets: [
          "Sem responsabilidade legal formalizada — se algo der errado, não há registro formal do responsável técnico",
          "Documentação rejeitada — Prefeitura, cartório e bancos exigem ART para aceitar projetos, laudos e processos",
          "Sem seguro de responsabilidade civil profissional",
          "Impossibilidade de regularizar depois sem levantamento técnico posterior",
        ],
      },
    ],
    faqs: [
      {
        question: "Toda reforma pequena precisa de ART?",
        answer:
          "Reformas estruturais, elétricas ou que envolvam responsabilidade técnica normalmente exigem. Reparos simples, sem alteração estrutural, podem não exigir — mas vale confirmar com um profissional.",
      },
      {
        question: "Quem pode emitir ART?",
        answer:
          "Engenheiros e outros profissionais habilitados com registro ativo no CREA, dentro das atribuições da sua formação.",
      },
      {
        question: "A ART tem validade?",
        answer:
          "A ART em si não expira, mas está vinculada ao serviço específico que ela cobre — cada novo projeto ou execução exige uma nova ART.",
      },
    ],
    relatedSlugs: ["gerenciamento-de-obra-goiania", "projeto-estrutural-goiania", "regularizacao-de-imoveis-goiania"],
    whatsappMessage: "Olá! Preciso de emissão de ART em Goiânia.",
  },
  {
    slug: "desmembramento-remembramento-goiania",
    icon: "desmembramento",
    badge: "Desmembramento e Remembramento",
    metaTitle: "Desmembramento e Remembramento de Terreno em Goiânia",
    metaDescription:
      "Divisão (desmembramento) ou unificação (remembramento) de lotes em Goiânia, com aprovação na Prefeitura e registro em cartório. Serviço técnico completo.",
    h1: "Desmembramento e Remembramento em Goiânia",
    subtitle:
      "Quer dividir um terreno grande em lotes menores, ou unificar dois lotes vizinhos? Cuidamos do projeto, da aprovação na Prefeitura e do registro em cartório.",
    intro: [
      "Desmembramento (ou desdobro) é o processo de dividir um único lote em dois ou mais lotes independentes, cada um com sua própria matrícula. Remembramento é o processo inverso: a unificação de dois ou mais lotes vizinhos em um único lote, com uma matrícula unificada.",
    ],
    documents: [
      "Certidão de registro do(s) lote(s) atualizada",
      "Planta de desmembramento ou remembramento, com ART do responsável técnico",
      "Documento de Uso do Solo",
      "Documentos pessoais do(s) proprietário(s) ou CNPJ, se pessoa jurídica",
      "Comprovação de regularidade fiscal do imóvel (IPTU em dia)",
    ],
    sections: [
      {
        heading: "Quando cada processo é necessário",
        bullets: [
          "Desmembramento — divisão de herança entre herdeiros, venda de parte de um terreno, adequação de um lote para diferentes usos",
          "Remembramento — unificação de lotes para viabilizar um projeto maior, simplificação da gestão de propriedades adjacentes",
        ],
      },
      {
        heading: "Como funciona o processo em Goiânia",
        paragraphs: [
          "Ambos os processos passam pela análise da Prefeitura de Goiânia, que verifica se a divisão ou unificação está de acordo com o Plano Diretor e a legislação de parcelamento do solo — incluindo área mínima de lote, testada mínima e infraestrutura disponível. Depois da aprovação municipal, o processo segue para o Cartório de Registro de Imóveis, onde as novas matrículas são efetivamente registradas.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quanto tempo leva um processo de desmembramento ou remembramento?",
        answer:
          "Varia conforme a complexidade e o volume de processos em análise na Prefeitura, mas geralmente envolve etapas de aprovação municipal seguidas de registro em cartório, o que pode levar alguns meses.",
      },
      {
        question: "Posso desmembrar um lote em quantas partes eu quiser?",
        answer:
          "Não — a legislação municipal define área mínima e testada mínima para cada lote resultante, então o número de divisões possíveis depende do tamanho do terreno original.",
      },
      {
        question: "Remembramento serve para juntar lotes de proprietários diferentes?",
        answer:
          "Normalmente não diretamente — antes é necessário que os lotes pertençam ao mesmo proprietário, para depois seguir com o remembramento.",
      },
    ],
    relatedSlugs: ["regularizacao-de-imoveis-goiania", "projeto-arquitetonico-goiania", "averbacao-de-imovel-goiania"],
    whatsappMessage: "Olá! Preciso de desmembramento ou remembramento de um terreno em Goiânia.",
  },
  {
    slug: "alvara-de-construcao-e-habite-se-goiania",
    icon: "alvara",
    badge: "Alvará de Construção e Habite-se",
    metaTitle: "Alvará de Construção e Habite-se em Goiânia",
    metaDescription:
      "Aprovação de projeto, alvará de construção e habite-se em Goiânia junto à SEPLANH. Passo a passo, documentos exigidos e regularização de obras sem alvará.",
    h1: "Alvará de Construção e Habite-se em Goiânia",
    subtitle:
      "Nenhuma obra pode começar sem alvará, nem ser ocupada sem Habite-se. Cuidamos da aprovação de projeto, do alvará e do Habite-se junto à SEPLANH — e também da regularização de obras já executadas sem licença.",
    intro: [
      "O alvará de construção é a licença emitida pela Prefeitura que autoriza a execução de uma obra, avaliando se o projeto está em conformidade com o Plano Diretor, a Lei de Uso e Ocupação do Solo e o Código de Obras de Goiânia. O Habite-se — o Auto de Conclusão de Obra — é o documento que atesta, depois de vistoria, que a edificação foi construída conforme o aprovado e está apta para uso. Sem os dois, a construção é considerada irregular desde o início.",
    ],
    steps: [
      "Consulta prévia de viabilidade (Certidão de Uso do Solo do terreno)",
      "Elaboração do projeto arquitetônico dentro dos parâmetros urbanísticos",
      "Recolhimento da ART de projeto no CREA-GO",
      "Protocolo do requerimento e pagamento das taxas na SEPLANH",
      "Análise técnica da Prefeitura e emissão do alvará",
      "Execução da obra e, ao final, vistoria técnica para emissão do Habite-se",
    ],
    documents: [
      "RG e CPF (pessoa física) ou CNPJ e contrato social (pessoa jurídica)",
      "Escritura definitiva ou contrato de compra e venda registrado",
      "Certidão de ônus e inteiro teor da matrícula atualizada (até 90 dias)",
      "IPTU do exercício atual e Certidão Negativa de Débitos municipais",
      "Certidão de Uso do Solo emitida pela SEPLANH",
      "Projeto arquitetônico completo e ART do responsável técnico",
    ],
    sections: [
      {
        heading: "Quando o alvará é obrigatório",
        bullets: [
          "Construção de edificações novas (residencial, comercial, industrial)",
          "Ampliações que aumentem a área construída",
          "Reformas estruturais que alterem estrutura, fachada ou planta original",
          "Demolições de edificações existentes",
          "Regularização de obras já executadas sem licença",
        ],
      },
      {
        heading: "Já construiu sem alvará? Também tem solução",
        paragraphs: [
          "É mais comum do que parece: residências construídas integralmente sem alvará, ampliações sem projeto aprovado, coberturas e varandas não documentadas. Na maioria dos casos, desde que a obra respeite os parâmetros urbanísticos do município, é possível regularizar — com levantamento da situação real do imóvel, elaboração do projeto de regularização, aprovação na Prefeitura e, na sequência, emissão do Habite-se e averbação em cartório.",
        ],
      },
      {
        heading: "Erros mais comuns que atrasam a aprovação",
        bullets: [
          "Projeto fora dos recuos obrigatórios (afastamento frontal, lateral e de fundos)",
          "Taxa de permeabilidade insuficiente no lote",
          "Documentação do imóvel desatualizada (matrícula vencida ou com divergências)",
          "ART com especialidade errada",
          "Planta sem escala ou sem todas as cotas",
        ],
      },
    ],
    faqs: [
      {
        question: "Quanto tempo leva para sair o alvará em Goiânia?",
        answer:
          "Varia conforme a complexidade: residências simples costumam levar de 30 a 60 dias, projetos comerciais de 60 a 120 dias. Pendências e exigências reiniciam o prazo a cada rodada de correção.",
      },
      {
        question: "Posso construir enquanto o alvará está em análise?",
        answer:
          "Não. Iniciar a obra antes de obter o alvará é considerado construção irregular e sujeita o proprietário a embargo imediato e multa.",
      },
      {
        question: "Minha obra já foi construída sem alvará. Ainda dá para regularizar?",
        answer:
          "Na maioria dos casos sim, desde que a obra respeite os parâmetros urbanísticos do município. Um engenheiro civil avalia a situação e indica o caminho — geralmente via projeto de regularização, seguido de Habite-se e averbação.",
      },
      {
        question: "Habite-se e Carta de Ocupação são a mesma coisa?",
        answer:
          "Cumprem a mesma função — atestar que o imóvel está apto para uso — mas o Habite-se é para imóveis residenciais e a Carta de Ocupação para imóveis comerciais, industriais e de serviços.",
      },
    ],
    relatedSlugs: ["regularizacao-de-imoveis-goiania", "averbacao-de-imovel-goiania", "inss-de-obra-goiania"],
    whatsappMessage: "Olá! Preciso de ajuda com alvará de construção ou Habite-se em Goiânia.",
  },
  {
    slug: "vistoria-tecnica-de-imovel-goiania",
    icon: "vistoria",
    badge: "Vistoria Técnica de Imóvel",
    metaTitle: "Vistoria Técnica de Imóvel em Goiânia",
    metaDescription:
      "Vistoria técnica e inspeção predial em Goiânia: recebimento de chaves, laudos de patologias e verificação de fachadas, com laudo assinado por engenheiro civil.",
    h1: "Vistoria Técnica de Imóvel em Goiânia",
    subtitle:
      "Antes de assinar o recebimento de um imóvel novo, ou diante de trincas e infiltrações num imóvel existente, uma vistoria técnica documenta exatamente o estado real da construção — com laudo assinado por engenheiro civil habilitado.",
    intro: [
      "A vistoria técnica é uma inspeção detalhada do imóvel, feita por um engenheiro civil, que registra e documenta o estado de conservação da construção — estrutura, instalações, acabamentos e possíveis patologias. O resultado é um laudo técnico, com registro fotográfico e descrição das condições encontradas, que serve como prova formal do estado do imóvel naquele momento.",
    ],
    sections: [
      {
        heading: "Quando a vistoria técnica é indicada",
        bullets: [
          "Recebimento de chaves de imóvel novo — antes de assinar o termo de entrega da construtora",
          "Compra de imóvel usado — para identificar problemas antes de fechar negócio",
          "Início ou fim de locação — vistoria de entrada e saída para documentar o estado do imóvel",
          "Suspeita de patologia construtiva — trincas, infiltrações, umidade ou desplacamento de revestimento",
          "Antes de obras vizinhas — vistoria cautelar para documentar o estado do seu imóvel antes de uma construção ao lado",
        ],
      },
      {
        heading: "O que a vistoria verifica",
        bullets: [
          "Estrutura aparente — trincas, fissuras e sinais de comprometimento estrutural",
          "Instalações elétricas e hidrossanitárias visíveis",
          "Esquadrias, revestimentos, pisos e acabamentos",
          "Fachadas e áreas comuns, quando aplicável",
          "Conformidade com o que foi contratado ou com o memorial descritivo da construtora",
        ],
      },
      {
        heading: "Vistoria cautelar de imóveis vizinhos",
        paragraphs: [
          "Antes de uma obra começar ao lado do seu imóvel, é recomendável documentar o estado atual da construção com uma vistoria cautelar. Esse laudo serve como prova técnica caso a obra vizinha cause qualquer dano posterior — trincas, rachaduras ou outros problemas que só apareceriam depois do início dos trabalhos.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quanto tempo leva uma vistoria técnica?",
        answer:
          "A visita em si costuma levar algumas horas, dependendo do tamanho do imóvel. O laudo completo, com registro fotográfico e descritivo, é entregue em seguida.",
      },
      {
        question: "A vistoria técnica tem validade jurídica?",
        answer:
          "Sim, quando assinada por profissional habilitado com ART, o laudo tem valor como prova técnica em disputas com construtora, vizinhos ou locador/locatário.",
      },
      {
        question: "Preciso de vistoria mesmo se o imóvel parece estar em ordem?",
        answer:
          "É especialmente recomendada nesses casos — muitos problemas construtivos não são visíveis a olho leigo, e documentar o estado do imóvel evita disputas futuras sobre responsabilidade por danos.",
      },
    ],
    relatedSlugs: ["consultoria-engenharia-civil-goiania", "avaliador-de-imovel-goiania", "regularizacao-de-imoveis-goiania"],
    whatsappMessage: "Olá! Preciso de uma vistoria técnica de imóvel em Goiânia.",
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
