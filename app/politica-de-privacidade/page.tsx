import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Nexus TI coleta, utiliza e protege seus dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018).",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://nexusti.tec.br/politica-de-privacidade" },
}

const sections = [
  {
    id: "controlador",
    title: "1. Identificação do Controlador",
    content: (
      <>
        <p>
          Esta Política de Privacidade descreve como a <strong>Nexus TI</strong>, nome fantasia de Caio
          Carvalho Maracaipe — MEI, CNPJ 36.075.475/0001-94, com sede na Av. Deputado Jamel Cecilio,
          3310, Sala 301, Jardim Goiás, Goiânia/GO ("Nexus TI", "nós" ou "nosso"), coleta, utiliza,
          armazena e protege os dados pessoais fornecidos pelos visitantes e clientes do site
          nexusti.tec.br ("Usuário").
        </p>
        <p className="mt-3">
          Para dúvidas ou solicitações, entre em contato pelo e-mail:{" "}
          <a href="mailto:contato@nexusti.tec.br" className="text-[#33bbff] hover:underline">
            contato@nexusti.tec.br
          </a>
        </p>
      </>
    ),
  },
  {
    id: "base-legal",
    title: "2. Base Legal (LGPD — Lei nº 13.709/2018)",
    content: (
      <>
        <p>O tratamento dos dados pessoais realizado pela Nexus TI fundamenta-se nas seguintes bases legais:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#aaaaaa]">
          <li><strong className="text-[#dddddd]">Consentimento (art. 7º, I):</strong> quando o Usuário preenche o formulário de contato ou solicita orçamento.</li>
          <li><strong className="text-[#dddddd]">Legítimo interesse (art. 7º, IX):</strong> para envio de comunicações sobre serviços relevantes, com possibilidade de opt-out a qualquer momento.</li>
          <li><strong className="text-[#dddddd]">Execução de contrato (art. 7º, V):</strong> quando o tratamento for necessário para prestação dos serviços contratados.</li>
          <li><strong className="text-[#dddddd]">Cumprimento de obrigação legal (art. 7º, II):</strong> quando exigido por normas aplicáveis.</li>
        </ul>
      </>
    ),
  },
  {
    id: "dados",
    title: "3. Dados Coletados",
    content: (
      <>
        <p className="font-semibold text-[#eeeeee] mt-2">3.1 Dados fornecidos diretamente pelo Usuário</p>
        <p className="mt-1">Ao preencher o formulário de contato ou solicitar orçamento:</p>
        <ul className="mt-2 space-y-1 list-disc list-inside text-[#aaaaaa]">
          <li>Nome completo</li>
          <li>Endereço de e-mail</li>
          <li>Número de telefone / WhatsApp</li>
          <li>Nome da empresa (quando aplicável)</li>
          <li>Descrição da demanda ou mensagem enviada</li>
        </ul>
        <p className="font-semibold text-[#eeeeee] mt-4">3.2 Dados coletados automaticamente</p>
        <p className="mt-1">Durante a navegação no site:</p>
        <ul className="mt-2 space-y-1 list-disc list-inside text-[#aaaaaa]">
          <li>Endereço IP</li>
          <li>Tipo e versão do navegador</li>
          <li>Sistema operacional</li>
          <li>Páginas visitadas e tempo de permanência</li>
          <li>Origem do acesso (motor de busca, link direto etc.)</li>
          <li>Cookies e tecnologias semelhantes (ver Seção 7)</li>
        </ul>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "4. Finalidades do Tratamento",
    content: (
      <ul className="mt-2 space-y-2 list-disc list-inside text-[#aaaaaa]">
        <li>Responder a solicitações de contato e pedidos de orçamento</li>
        <li>Prestação dos serviços de TI contratados</li>
        <li>Envio de comunicações sobre serviços e novidades (mediante consentimento)</li>
        <li>Melhoria da experiência de navegação no site</li>
        <li>Análise de desempenho e tráfego via ferramentas de analytics</li>
        <li>Cumprimento de obrigações legais e regulatórias</li>
        <li>Prevenção de fraudes e garantia da segurança das informações</li>
      </ul>
    ),
  },
  {
    id: "compartilhamento",
    title: "5. Compartilhamento de Dados",
    content: (
      <>
        <p>A Nexus TI <strong>não vende, aluga ou comercializa</strong> dados pessoais. Os dados poderão ser compartilhados somente nas seguintes situações:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#aaaaaa]">
          <li>Com prestadores de serviços que atuam como operadores (ex.: hospedagem, e-mail), sempre com obrigações contratuais de confidencialidade.</li>
          <li>Com autoridades públicas ou judiciais, quando exigido por lei ou ordem judicial.</li>
          <li>Em caso de reorganização societária, garantidas as mesmas condições de proteção.</li>
        </ul>
      </>
    ),
  },
  {
    id: "retencao",
    title: "6. Retenção e Eliminação dos Dados",
    content: (
      <>
        <ul className="mt-2 space-y-2 list-disc list-inside text-[#aaaaaa]">
          <li><strong className="text-[#dddddd]">Dados de contato e orçamento:</strong> até 5 anos após o último contato.</li>
          <li><strong className="text-[#dddddd]">Dados de clientes com contrato ativo:</strong> durante a vigência e por até 5 anos após o encerramento.</li>
          <li><strong className="text-[#dddddd]">Dados de navegação e cookies:</strong> não superior a 24 meses.</li>
        </ul>
        <p className="mt-3">Após o prazo, os dados serão eliminados de forma segura ou anonimizados, salvo obrigação legal de guarda.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "7. Cookies e Tecnologias de Rastreamento",
    content: (
      <>
        <p>O site nexusti.tec.br utiliza cookies para:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#aaaaaa]">
          <li><strong className="text-[#dddddd]">Cookies essenciais:</strong> funcionamento correto do site.</li>
          <li><strong className="text-[#dddddd]">Cookies analíticos:</strong> análise de comportamento e melhoria da navegação (ex.: Google Analytics).</li>
          <li><strong className="text-[#dddddd]">Cookies de publicidade:</strong> exibição de conteúdo relevante em outras plataformas, quando aplicável.</li>
        </ul>
        <p className="mt-3">O Usuário pode gerenciar as preferências de cookies pelo banner exibido na primeira visita ou pelas configurações do navegador.</p>
      </>
    ),
  },
  {
    id: "direitos",
    title: "8. Direitos do Titular",
    content: (
      <>
        <p>Nos termos da LGPD (art. 18), o Usuário possui os seguintes direitos:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#aaaaaa]">
          <li><strong className="text-[#dddddd]">Confirmação:</strong> saber se tratamos seus dados.</li>
          <li><strong className="text-[#dddddd]">Acesso:</strong> obter cópia dos dados que mantemos.</li>
          <li><strong className="text-[#dddddd]">Correção:</strong> atualizar dados incompletos ou desatualizados.</li>
          <li><strong className="text-[#dddddd]">Anonimização, bloqueio ou eliminação:</strong> de dados desnecessários.</li>
          <li><strong className="text-[#dddddd]">Portabilidade:</strong> receber seus dados em formato estruturado.</li>
          <li><strong className="text-[#dddddd]">Eliminação:</strong> excluir dados tratados com base no consentimento.</li>
          <li><strong className="text-[#dddddd]">Informação sobre compartilhamento:</strong> saber com quem compartilhamos seus dados.</li>
          <li><strong className="text-[#dddddd]">Revogação do consentimento:</strong> retirar o consentimento a qualquer momento.</li>
        </ul>
        <p className="mt-3">
          Para exercer seus direitos, envie e-mail para{" "}
          <a href="mailto:contato@nexusti.tec.br" className="text-[#33bbff] hover:underline">
            contato@nexusti.tec.br
          </a>{" "}
          com o assunto <strong>"Direitos LGPD"</strong>. Responderemos em até 15 dias úteis.
        </p>
      </>
    ),
  },
  {
    id: "seguranca",
    title: "9. Segurança da Informação",
    content: (
      <>
        <p>A Nexus TI adota medidas técnicas e organizacionais para proteger os dados pessoais, incluindo:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#aaaaaa]">
          <li>Transmissão via protocolo HTTPS com certificado SSL/TLS</li>
          <li>Controle de acesso restrito aos dados pessoais</li>
          <li>Ferramentas homologadas com políticas compatíveis com a LGPD</li>
          <li>Revisão periódica dos procedimentos de segurança</li>
        </ul>
        <p className="mt-3">Em caso de incidente de segurança relevante, a Nexus TI notificará a ANPD e os titulares afetados nos termos da lei.</p>
      </>
    ),
  },
  {
    id: "transferencia",
    title: "10. Transferência Internacional de Dados",
    content: (
      <p>
        Ferramentas utilizadas pela Nexus TI, como Google Analytics e plataformas de hospedagem em nuvem,
        podem processar dados em servidores fora do Brasil. Nesses casos, garantimos que as transferências
        ocorrem apenas para países com nível de proteção adequado ou mediante cláusulas contratuais
        compatíveis com a LGPD (art. 33).
      </p>
    ),
  },
  {
    id: "links",
    title: "11. Links para Sites de Terceiros",
    content: (
      <p>
        O site nexusti.tec.br pode conter links para sites externos (ex.: LinkedIn, Instagram). Esta política
        aplica-se exclusivamente ao site da Nexus TI. Recomendamos consultar as políticas de privacidade de
        cada site visitado.
      </p>
    ),
  },
  {
    id: "alteracoes",
    title: "12. Alterações nesta Política",
    content: (
      <p>
        Esta Política de Privacidade pode ser atualizada para refletir mudanças nas práticas de tratamento de
        dados ou na legislação aplicável. A versão mais recente estará sempre disponível em{" "}
        <span className="text-[#33bbff]">nexusti.tec.br/politica-de-privacidade</span>. Alterações
        substanciais serão comunicadas pelo próprio site.
      </p>
    ),
  },
  {
    id: "contato",
    title: "13. Contato",
    content: (
      <>
        <p>Para exercer seus direitos, esclarecer dúvidas ou registrar reclamações:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-[#aaaaaa]">
          <li>
            E-mail:{" "}
            <a href="mailto:contato@nexusti.tec.br" className="text-[#33bbff] hover:underline">
              contato@nexusti.tec.br
            </a>
          </li>
          <li>
            WhatsApp:{" "}
            <a href="https://wa.me/5562998062169" className="text-[#33bbff] hover:underline">
              (62) 99806-2169
            </a>
          </li>
          <li>Endereço: Av. Deputado Jamel Cecilio, 3310, Sala 301, Jardim Goiás, Goiânia/GO</li>
        </ul>
        <p className="mt-3">
          Caso não obtenha resposta satisfatória, o Usuário pode contatar a Autoridade Nacional de Proteção
          de Dados (ANPD) pelo site{" "}
          <a
            href="https://www.gov.br/anpd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#33bbff] hover:underline"
          >
            www.gov.br/anpd
          </a>
          .
        </p>
      </>
    ),
  },
]

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#cccccc]">
      {/* Nav simples */}
      <header className="border-b border-[#1a1a1a] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="font-mono text-lg font-bold text-[#fafafa] tracking-tight">Nexus TI</span>
            <span className="w-2 h-4 bg-[#33bbff] animate-[blink_1s_steps(1)_infinite]" aria-hidden="true" />
          </Link>
          <Link
            href="/"
            className="text-sm text-[#888888] hover:text-[#33bbff] transition-colors"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Cabeçalho */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#33bbff] mb-3 font-mono">LGPD — Lei nº 13.709/2018</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#fafafa] mb-4">
            Política de Privacidade
          </h1>
          <p className="text-[#888888] text-sm">
            Versão 1.0 — última atualização: 12 de maio de 2026
          </p>
          <div className="mt-6 p-4 border border-[#1a1a1a] rounded-lg bg-[#0d0d0d] text-sm text-[#aaaaaa]">
            Esta política explica quais dados coletamos, como os utilizamos e quais são seus direitos como
            titular, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD).
          </div>
        </div>

        {/* Índice */}
        <nav className="mb-12 p-6 border border-[#1a1a1a] rounded-lg bg-[#0d0d0d]">
          <p className="text-xs uppercase tracking-widest text-[#555555] mb-4 font-mono">Índice</p>
          <ol className="space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-[#888888] hover:text-[#33bbff] transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Seções */}
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-8">
              <h2 className="text-xl font-semibold text-[#fafafa] mb-4 pb-2 border-b border-[#1a1a1a]">
                {s.title}
              </h2>
              <div className="text-[#aaaaaa] leading-relaxed text-sm">{s.content}</div>
            </section>
          ))}
        </div>

        {/* Rodapé da página */}
        <div className="mt-16 pt-8 border-t border-[#1a1a1a] text-center">
          <p className="text-xs text-[#555555]">
            © {new Date().getFullYear()} Nexus TI — CNPJ 36.075.475/0001-94
          </p>
          <Link
            href="/"
            className="inline-block mt-4 text-sm text-[#33bbff] hover:underline"
          >
            ← Voltar ao site
          </Link>
        </div>
      </main>
    </div>
  )
}
