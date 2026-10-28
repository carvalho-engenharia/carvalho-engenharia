import type { Metadata } from "next"
import Image from "next/image"
import { VEShell, veMetadata } from "@/components/vistoria-entrega/ve-shell"
import { EquipmentGrid, BallTestVideo } from "@/components/vistoria-entrega/ve-blocks"
import { VE_BASE, VE_IMG, equipments } from "@/lib/vistoria-entrega-data"

const PATH = `${VE_BASE}/equipamentos`

export const metadata: Metadata = veMetadata(
  PATH,
  "Equipamentos da Vistoria de Entrega de Apartamento",
  "Medidor de umidade, testador de tomadas, nível a laser, martelo de percussão e mais: veja a função de cada equipamento usado na vistoria de entrega de apartamento em Goiânia.",
)

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Equipamentos usados na vistoria de entrega de apartamento",
  itemListElement: equipments.map((eq, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: eq.name,
    description: eq.function,
    url: `https://www.carvalho-engenharia.com${PATH}#${eq.id}`,
  })),
}

export default function Page() {
  return (
    <VEShell
      active="equipamentos"
      crumb="Equipamentos"
      badge="Vistoria de Entrega · Equipamentos"
      title="Equipamentos da vistoria e a função de cada um"
      subtitle="Uma vistoria de entrega séria mede, não só olha. Cada equipamento abaixo revela um tipo de defeito que passaria despercebido numa visita comum."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <figure className="mb-10 grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-6 items-center">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#e0e5eb] bg-[#f3f5f8]">
          <Image
            src="/images/vistoria/equipamentos-vistoria-entrega-apartamento-goiania.webp"
            alt="Kit de equipamentos da vistoria: trena a laser, medidor de umidade, detector de tensão, multímetro, martelo de borracha, nível e nível a laser"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
            priority
          />
        </div>
        <figcaption className="text-[#5a687c] leading-relaxed">
          <p className="font-semibold text-[#1d283a] mb-2">O kit que vai até o seu apartamento</p>
          <p>
            Medição elétrica, detecção de umidade, nivelamento, prumo e teste de percussão. Os resultados entram no laudo
            com fotos, para que a construtora não tenha como contestar.
          </p>
        </figcaption>
      </figure>

      <EquipmentGrid detailed />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#1d283a] mb-6 text-center">Veja um teste acontecendo</h2>
        <BallTestVideo />
      </div>
    </VEShell>
  )
}
