"use client";

import { useState, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Douglas Arizote Arantes",
    initials: "DA",
    color: "#4285F4",
    rating: 5,
    time: "Há 4 dias",
    text: "",
  },
  {
    name: "Deise Maria",
    initials: "DM",
    color: "#EA4335",
    rating: 5,
    time: "Há 2 semanas",
    text: "",
  },
  {
    name: "Mulheres Que Amaram A Deus",
    initials: "MD",
    color: "#34A853",
    rating: 5,
    time: "Há 3 semanas",
    text: "",
  },
  {
    name: "Juracy Soares",
    initials: "JS",
    color: "#FBBC04",
    rating: 5,
    time: "Há 3 semanas",
    text: "",
  },
  {
    name: "Dennis Santiago",
    initials: "DS",
    color: "#9C27B0",
    rating: 5,
    time: "Há 3 semanas",
    text: "",
  },
  {
    name: "So Artes Gráficas Lagoa",
    initials: "SA",
    color: "#4285F4",
    rating: 5,
    time: "Há 4 dias",
    text: "Excelente profissional.",
  },
  {
    name: "Luana Cristina",
    initials: "LC",
    color: "#EA4335",
    rating: 5,
    time: "Há 4 dias",
    text: "Quero registrar minha satisfação com a Carvalho Engenharia. O atendimento do engenheiro Caio tem sido muito atencioso e profissional desde o início. Sempre esclarece minhas dúvidas e transmite segurança durante todo o processo de regularização do imóvel. Recomendo pelo comprometimento, organização e excelente atendimento. Parabéns pelo trabalho!",
  },
  {
    name: "Marilene Silva",
    initials: "MS",
    color: "#34A853",
    rating: 5,
    time: "Há 1 semana",
    text: "Excelente profissional, sempre muito prestativo!",
  },
  {
    name: "Francielle França",
    initials: "FF",
    color: "#FBBC04",
    rating: 5,
    time: "Há 2 semanas",
    text: "Conheço o profissionalismo e a dedicação do trabalho desenvolvido. É uma pessoa comprometida, responsável e muito...",
  },
  {
    name: "Cleone",
    initials: "CL",
    color: "#9C27B0",
    rating: 5,
    time: "Há 2 semanas",
    text: "Excelente atendimento, muito profissionalismo e qualidade no serviço prestado. Recomendo!",
  },
  {
    name: "Cris Maracaipe",
    initials: "CM",
    color: "#00BCD4",
    rating: 5,
    time: "Há 2 semanas",
    text: "Excelente prestação de serviço, entregou resultado de qualidade conforme prazo acordado. Recomendo.",
  },
  {
    name: "Simone Si",
    initials: "SS",
    color: "#FF5722",
    rating: 5,
    time: "Há 2 semanas",
    text: "Excelente profissional.",
  },
  {
    name: "Fátima Regina Costa de Oliveira",
    initials: "FR",
    color: "#607D8B",
    rating: 5,
    time: "Há 2 semanas",
    text: "Ótima experiência, recomendo muito! Sem sombra de dúvidas, o melhor!",
  },
  {
    name: "Jessivaldo Leão",
    initials: "JL",
    color: "#FF7043",
    rating: 5,
    time: "Há 2 semanas",
    text: "Empresa extremamente qualificada e profissional. Equipe técnica preparada, atendimento transparente e entrega...",
  },
  {
    name: "Gervásio Kuerten",
    initials: "GK",
    color: "#26A69A",
    rating: 5,
    time: "Há 2 semanas",
    text: "A equipe da Carvalho fez todo o combinado com êxito. Cumpre todas as obrigações e deveres contratados. Agradeço muito pelo apoio no projeto elaborado.",
  },
  {
    name: "Adalberto Jaime",
    initials: "AJ",
    color: "#5C6BC0",
    rating: 5,
    time: "Há 2 semanas",
    text: "Super recomendo. Pode confiar. Compromisso e qualidade. 100%",
  },
  {
    name: "Lindomar Stein",
    initials: "LS",
    color: "#E91E63",
    rating: 5,
    time: "Há 2 semanas",
    text: "Resolveu prontamente todas minhas pendências nos dois empreendimentos, e prestou toda consultoria necessária até finalizar o processo. Recomendo!",
  },
  {
    name: "Cleiton Limirio",
    initials: "CL",
    color: "#795548",
    rating: 5,
    time: "Há 2 semanas",
    text: "Trabalho sério e transparente, fiz a regularização do meu imóvel com eles. Investimento justo, serviço prestado com...",
  },
  {
    name: "Rogivan Barbosa",
    initials: "RB",
    color: "#F57C00",
    rating: 5,
    time: "Há 2 semanas",
    text: "Um ótimo trabalho bem feito. Uma profissional excelente e super indico.",
  },
  {
    name: "Marcos Oliveira",
    initials: "MO",
    color: "#4285F4",
    rating: 5,
    time: "Há 2 semanas",
    text: "Empresa muito séria e comprometida, trabalho nota 10.",
  },
  {
    name: "Lucas Maracaipe",
    initials: "LM",
    color: "#EA4335",
    rating: 5,
    time: "Há 3 semanas",
    text: "Empresa muito boa, com excelentes profissionais. Gostei muito do empenho e do atendimento prestados.",
  },
  {
    name: "Victor Corrêa",
    initials: "VC",
    color: "#34A853",
    rating: 5,
    time: "Há 3 semanas",
    text: "Profissional muito competente, atencioso e comprometido com resultados. A qualidade do trabalho e o conhecimento técnico...",
  },
  {
    name: "Leo Amoral",
    initials: "LA",
    color: "#FBBC04",
    rating: 5,
    time: "Há 3 semanas",
    text: "Muito bom!!",
  },
  {
    name: "Ana Luiza Machado Cardoso",
    initials: "AL",
    color: "#9C27B0",
    rating: 5,
    time: "Há 3 semanas",
    text: "O atendimento foi rápido, explicaram todo o processo em linguagem simples e me mantiveram informada em cada etapa junto à prefeitura. Recomendo!",
  },
  {
    name: "Diego Moura",
    initials: "DM",
    color: "#00BCD4",
    rating: 5,
    time: "Há 3 semanas",
    text: "Fui muito bem atendido pelo Caio. O serviço foi feito com bastante atenção, clareza e profissionalismo. Ele me orientou...",
  },
  {
    name: "Grazi Martins",
    initials: "GM",
    color: "#FF5722",
    rating: 5,
    time: "Há 3 semanas",
    text: "Muito profissionalismo e muita dedicação. Eu super recomendo...",
  },
  {
    name: "Eliane Santos",
    initials: "ES",
    color: "#607D8B",
    rating: 5,
    time: "Há 3 semanas",
    text: "Excelente profissional, cumpre os prazos, dá toda assistência que precisa na regularização do imóvel.",
  },
  {
    name: "Felipe Rodrigues Duarte",
    initials: "FD",
    color: "#FF7043",
    rating: 5,
    time: "Há 3 semanas",
    text: "Excelente atendimento.",
  },
  {
    name: "Agueda Lima",
    initials: "AL",
    color: "#26A69A",
    rating: 5,
    time: "Há 3 semanas",
    text: "O Caio é um excelente profissional! Muito competente, atencioso e pontual. Explicou tudo com clareza, realizou o serviço...",
  },
  {
    name: "Maristela Rodrigues",
    initials: "MR",
    color: "#5C6BC0",
    rating: 5,
    time: "Há 3 semanas",
    text: "Quero deixar registrado o meu sincero agradecimento pelo excelente trabalho realizado. Desde o primeiro contato, o...",
  },
  {
    name: "Idelma Alves",
    initials: "IA",
    color: "#E91E63",
    rating: 5,
    time: "Há 3 semanas",
    text: "Excelente profissional, comprometido, pontual, recomendo o serviço.",
  },
  {
    name: "Daniel Correa",
    initials: "DC",
    color: "#795548",
    rating: 5,
    time: "Há 3 semanas",
    text: "Atendimento sempre com excelência!",
  },
  {
    name: "Jonathan Matheus",
    initials: "JM",
    color: "#F57C00",
    rating: 5,
    time: "Há 3 semanas",
    text: "Uma empresa extremamente competente, com atendimento ágil, atencioso e muito profissional. Trabalham com processo de...",
  },
  {
    name: "Felipe Macedo",
    initials: "FM",
    color: "#4285F4",
    rating: 5,
    time: "Há 26 semanas",
    text: "Excelente experiência! Fui muito bem atendido do início ao fim. Todo o processo foi transparente e sem complicações. A equipe cuidou da regularização do meu imóvel com muita competência e ainda acompanharam de perto a liberação do alvará na prefeitura. Super recomendo!",
  },
  {
    name: "Derick Bressan",
    initials: "DB",
    color: "#EA4335",
    rating: 5,
    time: "Há 26 semanas",
    text: "Profissionais sérios, honestos e muito humanos. Explicaram cada etapa, me mantiveram informada o tempo todo e conseguiram desatar todos os nós que meu imóvel tinha (escritura, inventário, prefeitura…). Saí de lá com o maior sorriso e o imóvel 100% regularizado. Vocês são incríveis!",
  },
  {
    name: "Ralf Leal",
    initials: "RL",
    color: "#34A853",
    rating: 5,
    time: "Há 26 semanas",
    text: "Gostaria de expressar minha profunda admiração pelo trabalho realizado por essa equipe incrível! A dedicação e o cuidado com cada detalhe dos projetos, a atenção especial na regularização dos imóveis e a agilidade no desembaraço de documentos no cartório são impressionantes. O acompanhamento de obras e a liberação de alvarás nas prefeituras demonstram um compromisso constante com a excelência e com o sucesso de seus clientes. É raro encontrar uma empresa que se importa tanto com o processo como um todo, tornando a experiência mais tranquila e eficiente para todos. Parabéns por fazer a diferença de maneira tão humana e profissional!",
  },
  {
    name: "Gabriel Ribeiro",
    initials: "GR",
    color: "#FBBC04",
    rating: 5,
    time: "Há 26 semanas",
    text: "A equipe da Carvalho é simplesmente excepcional! Sempre atenciosos, eles tornam o processo de regularização e liberação de alvarás simples e sem estresse. Cada etapa é tratada com dedicação e transparência, sempre com foco em oferecer o melhor para o cliente. Altamente recomendados!",
  },
  {
    name: "Welington Machado",
    initials: "WM",
    color: "#9C27B0",
    rating: 5,
    time: "Há 26 semanas",
    text: "Excelente profissional",
  },
  {
    name: "Gabriel S. Miranda",
    initials: "GM",
    color: "#00BCD4",
    rating: 5,
    time: "Há 26 semanas",
    text: "Profissional ao extremo",
  },
  {
    name: "Marcelo Ferreira",
    initials: "MF",
    color: "#FF5722",
    rating: 5,
    time: "Há 26 semanas",
    text: "Serviço nota mil! Fizeram meu projeto, cuidaram de toda a papelada na prefeitura e no cartório e eu praticamente não precisei me preocupar com nada. Atendimento gentil, rápido e super humano. Finalmente uma empresa que entende que do outro lado tem gente de verdade com suas angústias. Parabéns!",
  },
  {
    name: "João Luiz Chicco",
    initials: "JL",
    color: "#607D8B",
    rating: 5,
    time: "Há 26 semanas",
    text: "A Carvalho Engenharia, sob a orientação do engenheiro Caio, faz toda a diferença! Eles não apenas entregam um trabalho de qualidade, mas também se dedicam de coração, sempre prontos para ajudar e esclarecer todas as dúvidas. É uma sensação de tranquilidade saber que estamos em mãos tão competentes e cuidadosas. Recomendo de olhos fechados!",
  },
  {
    name: "Libio Felipe",
    initials: "LF",
    color: "#FF7043",
    rating: 5,
    time: "Há 26 semanas",
    text: "Ótimo profissional, me auxiliou do começo ao fim! Recomendo.",
  },
  {
    name: "Adan Rodrigues de oliveira",
    initials: "AR",
    color: "#26A69A",
    rating: 5,
    time: "Há 26 semanas",
    text: "Ótimo atendimento, cumpri prazos, e serviço bem executado",
  },
  {
    name: "Leandro Melo (Leo Henrique)",
    initials: "LM",
    color: "#5C6BC0",
    rating: 5,
    time: "Há 25 semanas",
    text: "Entregou o projeto dentro do prazo, com detalhes. Com certeza irei contratar novamente. Agradeço a atenção aos detalhes. Confiável, eu recomendo.",
  },
  {
    name: "Luis Paulo",
    initials: "LP",
    color: "#E91E63",
    rating: 5,
    time: "Há 25 semanas",
    text: "Gostaria de expressar meu sincero agradecimento e profunda admiração pelo trabalho de engenharia de altíssima qualidade que foi entregue. É evidente o rigor técnico, a meticulosidade e o comprometimento dedicados a este projeto. O projeto final não apenas atendeu, mas superou as especificações técnicas iniciais, mantendo uma precisão dimensional/funcional impecável, em total conformidade com as normas (ABNT, ISO) e regulamentações vigentes. A entrega de toda a documentação técnica foi realizada com uma clareza e um nível de detalhe que facilitará enormemente as próximas etapas. Este resultado é um testemunho do excelente profissionalismo e da experiência técnica inquestionável. Parabéns!",
  },
  {
    name: "Sandro Jose de Oliveira",
    initials: "SJ",
    color: "#795548",
    rating: 5,
    time: "Há 25 semanas",
    text: "Fui bem atendido desde o inicio da contratacao ate o final. Eles tem um exelente pos venda, o que conta muito nessa hora. Indico essa Empresa, para todos que querem fazer um projeto e nao ter dor de cabeça.",
  },
  {
    name: "Rafael Reis Reis",
    initials: "RR",
    color: "#F57C00",
    rating: 5,
    time: "Há 25 semanas",
    text: "Atendimento de excelência, profissional super competente e comprometido, indico a todos os amigos",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < count ? "#FBBC04" : "#E0E0E0"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg width="60" height="20" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
      <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
      <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65H35.29z"/>
    </svg>
  );
}

export default function GoogleReviews() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const visibleCount = 3;
  const total = reviews.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = () => {
    setCurrent((c) => (c - 1 + total) % total);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, next]);

  const getVisible = () => {
    return Array.from({ length: visibleCount }).map(
      (_, i) => reviews[(current + i) % total]
    );
  };

  return (
    <section id="depoimentos" className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <GoogleLogo />
            <span className="text-[#5a687c] text-sm font-medium">Avaliações</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-5xl font-bold text-[#1d283a]">5,0</span>
            <div className="flex flex-col gap-1">
              <StarRating count={5} />
              <span className="text-[#5a687c] text-sm">{total} avaliações</span>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {getVisible().map((review, idx) => (
            <div
              key={`${review.name}-${current}-${idx}`}
              className="bg-[#f9fafb] border border-[#e0e5eb] rounded-2xl p-5 flex flex-col gap-3 hover:bg-[#edeff3] transition-colors duration-300"
              style={{
                animation: "fadeInUp 0.4s ease forwards",
                animationDelay: `${idx * 80}ms`,
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                  style={{ backgroundColor: review.color }}
                >
                  {review.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-[#1d283a] font-medium text-sm leading-tight truncate">
                    {review.name}
                  </p>
                  <span className="text-[#5a687c] text-xs">{review.time}</span>
                </div>
              </div>

              <StarRating count={review.rating} />

              {review.text && (
                <p className="text-[#3d4c5f] text-sm leading-relaxed flex-1 line-clamp-6">
                  {review.text}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-[#e0e5eb] flex items-center justify-center text-[#5a687c] hover:text-[#1d283a] hover:border-[#066bef]/40 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-[#066bef]"
                    : "w-1.5 bg-[#e0e5eb] hover:bg-[#c7cfd9]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-[#e0e5eb] flex items-center justify-center text-[#5a687c] hover:text-[#1d283a] hover:border-[#066bef]/40 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="https://share.google/XiHUDZzpLsAOmXMyd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#5a687c] hover:text-[#1d283a] transition-colors"
          >
            Ver todas no Google
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
