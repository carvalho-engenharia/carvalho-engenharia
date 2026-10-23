import type { Metadata } from "next"
import { VEShell, veMetadata } from "@/components/vistoria-entrega/ve-shell"
import { GalleryGrid, BallTestVideo } from "@/components/vistoria-entrega/ve-blocks"
import { VE_BASE } from "@/lib/vistoria-entrega-data"

export const metadata: Metadata = veMetadata(
  `${VE_BASE}/fotos`,
  "Fotos de Vistorias de Entrega de Apartamento",
  "Fotos de vistorias de entrega de apartamento feitas pela Carvalho Engenharia em Goiânia: testes de umidade, tomadas, pisos, caimento do box e portas.",
)

export default function Page() {
  return (
    <VEShell
      active="fotos"
      crumb="Fotos"
      badge="Vistoria de Entrega · Trabalhos realizados"
      title="Fotos de vistorias de entrega reais"
      subtitle="Registros de vistorias feitas pelo engenheiro responsável em apartamentos novos de Goiânia. Essas mesmas fotos, com a marcação de cada problema, vão para o laudo."
    >
      <GalleryGrid />
      <div className="mt-12">
        <BallTestVideo />
      </div>
    </VEShell>
  )
}
