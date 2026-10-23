// Conteúdo das páginas de Vistoria de Entrega de Apartamento.
// A página principal é /vistoria-de-entrega-de-apartamento-goiania (cadastrada em services-data.ts).
// As subpáginas abaixo existem para servir de sitelinks no Google Ads (cada uma com URL própria).

export const VE_BASE = "/vistoria-de-entrega-de-apartamento-goiania"
export const VE_IMG = "/vistoria-entrega"

export type VESubpage = {
  slug: string // "" = página principal
  label: string // texto curto usado na navegação entre as páginas
}

export const veSubpages: VESubpage[] = [
  { slug: "", label: "Visão geral" },
  { slug: "equipamentos", label: "Equipamentos" },
  { slug: "o-que-verificamos", label: "O que verificamos" },
  { slug: "como-funciona", label: "Como funciona" },
  { slug: "fotos", label: "Fotos de vistorias" },
]

export function veHref(slug: string) {
  return slug ? `${VE_BASE}/${slug}` : VE_BASE
}

export const veWhatsappMessage =
  "Olá! Vou receber as chaves de um apartamento em Goiânia e quero agendar uma vistoria de entrega."

// ---------------------------------------------------------------------------
// Equipamentos
// ---------------------------------------------------------------------------

export type Equipment = {
  id: string
  name: string
  category: "Elétrica" | "Umidade e hidráulica" | "Medidas e prumo" | "Pisos e revestimentos" | "Registro"
  image: string
  imageAlt: string
  // foto do equipamento sendo usado em vistoria real (opcional)
  inUseImage?: string
  inUseAlt?: string
  function: string // para que serve, em uma frase
  howWeUse: string // como usamos na vistoria
  finds: string[] // o que ele revela
}

export const equipments: Equipment[] = [
  {
    id: "medidor-de-umidade",
    name: "Medidor de umidade digital",
    category: "Umidade e hidráulica",
    image: `${VE_IMG}/medidor-umidade.webp`,
    imageAlt: "Medidor de umidade digital com leitura em porcentagem e temperatura",
    inUseImage: `${VE_IMG}/uso-umidade.webp`,
    inUseAlt: "Engenheiro medindo a umidade da parede ao lado da torneira da área de serviço",
    function:
      "Mede o teor de umidade dentro da parede, do piso e do gesso, sem quebrar nada.",
    howWeUse:
      "Encostamos o aparelho ao redor de torneiras, registros, ralos, box e paredes que fazem divisa com áreas molhadas. Comparamos a leitura com a de uma parede seca do mesmo ambiente.",
    finds: [
      "Vazamento em tubulação embutida antes de aparecer mancha",
      "Infiltração vinda de fachada, sacada ou apartamento vizinho",
      "Impermeabilização falha em box e área de serviço",
    ],
  },
  {
    id: "testador-de-tomadas",
    name: "Testador de tomadas com teste de DR",
    category: "Elétrica",
    image: `${VE_IMG}/testador-tomadas.webp`,
    imageAlt: "Testador de tomadas digital mostrando tensão de 211 V e teste de DR",
    inUseImage: `${VE_IMG}/uso-testador-tomadas.webp`,
    inUseAlt: "Engenheiro conectando o testador em uma tomada do quarto",
    function:
      "Conecta na tomada e mostra a tensão, se fase, neutro e terra estão no lugar certo e se o disjuntor DR desarma como deveria.",
    howWeUse:
      "Testamos tomada por tomada, em todos os cômodos. O aparelho acende luzes diferentes para cada tipo de erro e mostra a tensão no visor.",
    finds: [
      "Tomada sem aterramento ou com fio terra solto",
      "Fase e neutro invertidos",
      "Tomada sem energia ou com tensão errada (127 V × 220 V)",
      "DR que não desarma — risco de choque em áreas molhadas",
    ],
  },
  {
    id: "multimetro",
    name: "Multímetro digital True RMS",
    category: "Elétrica",
    image: `${VE_IMG}/multimetro.webp`,
    imageAlt: "Multímetro digital True RMS com pontas de prova",
    function:
      "Mede tensão, corrente, resistência e continuidade em qualquer ponto da instalação elétrica.",
    howWeUse:
      "Usamos onde o testador de tomadas não alcança: pontos de chuveiro, ar-condicionado, cooktop, forno e quadro de distribuição.",
    finds: [
      "Ponto de chuveiro ou ar-condicionado sem tensão ou com tensão diferente da especificada",
      "Circuito interrompido ou mal conectado",
      "Divergência entre o quadro e o projeto elétrico",
    ],
  },
  {
    id: "detector-de-tensao",
    name: "Caneta detectora de tensão",
    category: "Elétrica",
    image: `${VE_IMG}/detector-tensao.webp`,
    imageAlt: "Caneta detectora de tensão sem contato",
    function:
      "Detecta fio energizado só de aproximar, sem contato e sem abrir a caixa.",
    howWeUse:
      "Verificamos interruptores, pontos de luz e fios deixados para instalação de luminárias, com segurança para o morador.",
    finds: [
      "Interruptor cortando o neutro em vez da fase",
      "Fio energizado em ponto que deveria estar desligado",
      "Pontos de luz sem alimentação",
    ],
  },
  {
    id: "nivel-laser",
    name: "Nível a laser de 2 linhas",
    category: "Medidas e prumo",
    image: `${VE_IMG}/nivel-laser.webp`,
    imageAlt: "Nível a laser verde de duas linhas",
    function:
      "Projeta uma linha horizontal e uma vertical perfeitamente retas na parede.",
    howWeUse:
      "Posicionamos o laser no ambiente e comparamos paredes, rodapés, juntas de porcelanato, bancadas e batentes com a linha de referência.",
    finds: [
      "Parede fora de prumo ou com barriga",
      "Rodapé, bancada e soleira desnivelados",
      "Juntas de revestimento desalinhadas",
      "Batente de porta torto, que faz a porta raspar ou abrir sozinha",
    ],
  },
  {
    id: "trena-laser",
    name: "Trena a laser",
    category: "Medidas e prumo",
    image: `${VE_IMG}/trena-laser.webp`,
    imageAlt: "Trena a laser digital",
    function: "Mede distâncias, áreas e pé-direito com precisão de milímetros.",
    howWeUse:
      "Medimos os ambientes e conferimos com a planta e o memorial descritivo da construtora.",
    finds: [
      "Área menor que a vendida em planta",
      "Pé-direito abaixo do especificado",
      "Vãos de portas e janelas fora da medida",
    ],
  },
  {
    id: "nivel-de-mao",
    name: "Nível de bolha",
    category: "Medidas e prumo",
    image: `${VE_IMG}/uso-nivel-banheiro.webp`,
    imageAlt: "Nível de bolha apoiado na bancada do banheiro",
    inUseImage: `${VE_IMG}/uso-nivel-cozinha.webp`,
    inUseAlt: "Engenheiro conferindo o nível da bancada da cozinha",
    function: "Confere se uma superfície está nivelada ou no prumo.",
    howWeUse:
      "Apoiamos sobre bancadas de banheiro e cozinha, soleiras, peitoris e prateleiras embutidas.",
    finds: [
      "Bancada que acumula água ou escorre para o lado errado",
      "Cuba ou louça instalada torta",
      "Peitoril com caimento para dentro do apartamento",
    ],
  },
  {
    id: "martelo-de-borracha",
    name: "Martelo de borracha (teste de percussão)",
    category: "Pisos e revestimentos",
    image: `${VE_IMG}/uso-martelo-piso.webp`,
    imageAlt: "Engenheiro batendo levemente no porcelanato com martelo de borracha",
    inUseImage: `${VE_IMG}/uso-martelo-sala.webp`,
    inUseAlt: "Teste de percussão no piso da sala",
    function:
      "Revela, pelo som, peças de piso e revestimento que não estão bem coladas.",
    howWeUse:
      "Damos batidas leves em cada peça de porcelanato e de revestimento de parede. Som firme é peça bem assentada; som oco é peça com falha de argamassa.",
    finds: [
      "Porcelanato oco, que tende a trincar ou soltar com o tempo",
      "Revestimento de parede com risco de desplacamento",
    ],
  },
  {
    id: "esferas",
    name: "Esferas para teste de caimento",
    category: "Umidade e hidráulica",
    image: `${VE_IMG}/uso-esferas-box.webp`,
    imageAlt: "Esferas espalhadas no piso do box para testar o caimento até o ralo",
    function: "Mostram na prática para onde a água vai escorrer no piso.",
    howWeUse:
      "Soltamos as esferas no box, na sacada e na área de serviço. Elas precisam rolar em direção ao ralo.",
    finds: [
      "Box com caimento invertido — água escorre para fora",
      "Pontos baixos onde a água vai empoçar",
      "Sacada com caimento para dentro do apartamento",
    ],
  },
  {
    id: "lanterna",
    name: "Lanterna de inspeção",
    category: "Umidade e hidráulica",
    image: `${VE_IMG}/uso-lanterna.webp`,
    imageAlt: "Engenheiro inspecionando com lanterna a parte de baixo da bancada do banheiro",
    function: "Ilumina pontos escondidos e luz rasante mostra defeitos de acabamento.",
    howWeUse:
      "Olhamos embaixo de bancadas, dentro de shafts e armários e passamos luz rasante em paredes e pisos.",
    finds: [
      "Gotejamento em sifão e ligação flexível",
      "Falta de vedação e silicone",
      "Ondulações na pintura e no gesso que não aparecem com luz comum",
    ],
  },
  {
    id: "regua-e-esquadro",
    name: "Régua de alumínio e esquadro",
    category: "Pisos e revestimentos",
    image: `${VE_IMG}/uso-regua-checklist.webp`,
    imageAlt: "Régua de alumínio, nível e checklist da vistoria sobre a bancada",
    function: "Confere planicidade de pisos e paredes e o esquadro dos cantos.",
    howWeUse:
      "Apoiamos a régua sobre o piso e a parede para medir frestas, e o esquadro nos cantos de ambientes, portas e janelas.",
    finds: [
      "Desnível entre peças de porcelanato (dente)",
      "Paredes e cantos fora de esquadro",
    ],
  },
  {
    id: "fita-de-marcacao",
    name: "Fita de marcação",
    category: "Registro",
    image: `${VE_IMG}/uso-fita-marcacao.webp`,
    imageAlt: "Engenheiro marcando com fita um defeito no piso",
    function: "Marca no local exato cada defeito encontrado.",
    howWeUse:
      "Cada não conformidade recebe uma marcação, fotografada e numerada no laudo.",
    finds: ["Facilita a construtora localizar e corrigir cada item, sem discussão"],
  },
  {
    id: "checklist",
    name: "Checklist técnico e laudo com ART",
    category: "Registro",
    image: `${VE_IMG}/uso-prancheta.webp`,
    imageAlt: "Engenheiro preenchendo o checklist da vistoria na prancheta",
    function: "Garante que nenhum item do apartamento fique sem ser verificado.",
    howWeUse:
      "Seguimos um checklist por ambiente. Tudo vira um laudo com fotos, descrição de cada problema e ART do engenheiro responsável.",
    finds: ["Documento formal para cobrar os reparos da construtora"],
  },
]

// ---------------------------------------------------------------------------
// O que verificamos (por ambiente)
// ---------------------------------------------------------------------------

export const checklistByRoom: { room: string; items: string[] }[] = [
  {
    room: "Banheiros",
    items: [
      "Caimento do piso do box e funcionamento do ralo",
      "Vazão e pressão de chuveiro, torneiras e descarga",
      "Vazamentos em sifões, flexíveis e registros",
      "Nível e fixação de bancadas e cubas",
      "Rejuntes, silicone e vedação do box",
      "Umidade nas paredes ao redor dos pontos hidráulicos",
    ],
  },
  {
    room: "Cozinha e área de serviço",
    items: [
      "Nível da bancada e da cuba",
      "Pontos de água, esgoto e gás",
      "Tomadas de bancada e pontos de cooktop, forno e coifa",
      "Caimento do piso e ralos da área de serviço",
      "Tanque, torneiras e registros",
    ],
  },
  {
    room: "Salas, quartos e varanda",
    items: [
      "Porcelanato oco, trincado, lascado ou com dente entre peças",
      "Prumo e planicidade de paredes e qualidade da pintura",
      "Gesso, sancas e forro: fissuras e ondulações",
      "Caimento da varanda e vedação da porta de correr",
      "Rodapés, soleiras e peitoris",
    ],
  },
  {
    room: "Portas e esquadrias",
    items: [
      "Abertura, fechamento e folgas de portas",
      "Fechaduras (inclusive digitais), dobradiças e batentes",
      "Esquadrias de alumínio: trilhos, roldanas, vedação e travas",
      "Vidros sem riscos ou trincas",
    ],
  },
  {
    room: "Instalações elétricas",
    items: [
      "Tensão, polaridade e aterramento de todas as tomadas",
      "Funcionamento do DR e identificação dos circuitos no quadro",
      "Interruptores e pontos de luz",
      "Pontos de chuveiro e ar-condicionado",
    ],
  },
  {
    room: "Documentação",
    items: [
      "Conferência das áreas com a planta e o memorial descritivo",
      "Itens de acabamento prometidos no contrato",
      "Manual do proprietário e prazos de garantia",
    ],
  },
]

// ---------------------------------------------------------------------------
// Como funciona
// ---------------------------------------------------------------------------

export const veSteps: { title: string; text: string }[] = [
  {
    title: "Agendamento",
    text: "Você nos avisa a data marcada pela construtora para a entrega das chaves. Pedimos a planta e o memorial descritivo, se você tiver.",
  },
  {
    title: "Vistoria no apartamento",
    text: "O engenheiro vai até o imóvel com os equipamentos e percorre todos os ambientes seguindo o checklist. Você pode acompanhar e tirar dúvidas na hora.",
  },
  {
    title: "Marcação e registro",
    text: "Cada problema é marcado no local, fotografado e anotado com a localização exata.",
  },
  {
    title: "Laudo com ART",
    text: "Entregamos o laudo técnico com fotos, descrição de cada não conformidade e ART do engenheiro responsável.",
  },
  {
    title: "Cobrança dos reparos",
    text: "Você envia o laudo à construtora e pede os reparos. Se precisar, fazemos uma nova vistoria para conferir se tudo foi corrigido.",
  },
]

export const veFaqs: { question: string; answer: string }[] = [
  {
    question: "Quando devo fazer a vistoria de entrega?",
    answer:
      "Antes de assinar o termo de recebimento das chaves. Depois de assinado, fica mais difícil provar que um defeito já existia na entrega.",
  },
  {
    question: "Quanto tempo dura a vistoria?",
    answer:
      "Depende do tamanho do apartamento. Um apartamento médio leva algumas horas, porque todos os ambientes, tomadas e pontos hidráulicos são testados um a um.",
  },
  {
    question: "Posso acompanhar a vistoria?",
    answer:
      "Sim, e recomendamos. Você vê cada problema no momento em que ele é encontrado e entende o que será pedido à construtora.",
  },
  {
    question: "O laudo tem validade para cobrar a construtora?",
    answer:
      "Sim. O laudo é assinado por engenheiro civil com registro no CREA e acompanha ART, o que dá a ele valor técnico para exigir os reparos.",
  },
  {
    question: "E se a construtora já fez a vistoria dela?",
    answer:
      "A vistoria da construtora é feita por quem construiu. A vistoria independente é feita por um engenheiro que trabalha para você, com equipamentos e checklist próprios.",
  },
]

// ---------------------------------------------------------------------------
// Galeria de fotos de vistorias reais
// ---------------------------------------------------------------------------

export const veGallery: { src: string; alt: string; caption: string }[] = [
  { src: `${VE_IMG}/capa-vistoria.webp`, alt: "Engenheiro com prancheta em apartamento novo no Setor Marista", caption: "Vistoria de entrega em apartamento no Setor Marista" },
  { src: `${VE_IMG}/uso-esferas-box.webp`, alt: "Teste de caimento do box com esferas", caption: "Teste de caimento do box com esferas" },
  { src: `${VE_IMG}/uso-lanterna.webp`, alt: "Inspeção com lanterna sob a bancada do banheiro", caption: "Inspeção de sifões e ligações sob a bancada" },
  { src: `${VE_IMG}/uso-nivel-banheiro.webp`, alt: "Nível de bolha sobre a bancada do banheiro", caption: "Nivelamento da bancada do banheiro" },
  { src: `${VE_IMG}/uso-umidade.webp`, alt: "Medição de umidade na parede da área de serviço", caption: "Medição de umidade ao redor dos pontos hidráulicos" },
  { src: `${VE_IMG}/uso-umidade-detalhe.webp`, alt: "Leitura do medidor de umidade ao lado da torneira", caption: "Leitura do medidor de umidade" },
  { src: `${VE_IMG}/uso-martelo-piso.webp`, alt: "Teste de percussão no porcelanato", caption: "Teste de percussão: procura de piso oco" },
  { src: `${VE_IMG}/uso-fita-marcacao.webp`, alt: "Marcação de defeito no piso com fita", caption: "Marcação de não conformidade no piso" },
  { src: `${VE_IMG}/uso-testador-tomadas.webp`, alt: "Teste de tomada com testador digital", caption: "Teste de tensão, polaridade e aterramento" },
  { src: `${VE_IMG}/uso-nivel-cozinha.webp`, alt: "Nível sobre a bancada da cozinha", caption: "Nivelamento da bancada da cozinha" },
  { src: `${VE_IMG}/uso-fechadura.webp`, alt: "Teste da fechadura digital da porta de entrada", caption: "Teste da fechadura digital" },
  { src: `${VE_IMG}/uso-porta.webp`, alt: "Verificação do alinhamento da porta", caption: "Alinhamento e folgas da porta" },
  { src: `${VE_IMG}/uso-martelo-sala.webp`, alt: "Teste de percussão no piso da sala", caption: "Percussão no piso da sala" },
  { src: `${VE_IMG}/uso-piso-sala-vista.webp`, alt: "Inspeção do piso próximo à varanda", caption: "Inspeção do piso junto à varanda" },
  { src: `${VE_IMG}/uso-regua-checklist.webp`, alt: "Régua, nível e checklist sobre a bancada", caption: "Checklist técnico e ferramentas" },
]
