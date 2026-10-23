import type { Metadata } from "next"
import { VEShell, veMetadata } from "@/components/vistoria-entrega/ve-shell"
import { RoomChecklist, MoreLink } from "@/components/vistoria-entrega/ve-blocks"
import { VE_BASE, veHref } from "@/lib/vistoria-entrega-data"

export const metadata: Metadata = veMetadata(
  `${VE_BASE}/o-que-verificamos`,
  "Checklist da Vistoria de Entrega de Apartamento",
  "O que é verificado na vistoria de entrega de apartamento em Goiânia: banheiros, cozinha, pisos, paredes, portas, esquadrias e instalações elétricas, ambiente por ambiente.",
)

export default function Page() {
  return (
    <VEShell
      active="o-que-verificamos"
      crumb="O que verificamos"
      badge="Vistoria de Entrega · Checklist"
      title="O que verificamos no seu apartamento"
      subtitle="Percorremos todos os ambientes com um checklist técnico. Tomadas, pontos de água, pisos e portas são testados um a um, não por amostragem."
    >
      <RoomChecklist />
      <MoreLink href={veHref("equipamentos")}>Conheça os equipamentos usados em cada teste</MoreLink>
    </VEShell>
  )
}
