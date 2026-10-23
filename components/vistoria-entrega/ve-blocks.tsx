import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import {
  equipments,
  veGallery,
  veHref,
  veSubpages,
  checklistByRoom,
  veSteps,
  VE_IMG,
  type Equipment,
} from "@/lib/vistoria-entrega-data"

// Navegação entre as páginas de vistoria de entrega (visão geral + sitelinks).
export function VENav({ active }: { active: string }) {
  return (
    <nav aria-label="Vistoria de entrega" className="px-4 sm:px-6 lg:px-8">
      <ul className="max-w-5xl mx-auto flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {veSubpages.map((p) => {
          const isActive = p.slug === active
          return (
            <li key={p.slug} className="shrink-0">
              <Link
                href={veHref(p.slug)}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  isActive
                    ? "bg-[#066bef] border-[#066bef] text-white"
                    : "bg-white border-[#e0e5eb] text-[#3d4c5f] hover:border-[#066bef]/50 hover:text-[#066bef]"
                }`}
              >
                {p.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function EquipmentCard({ eq, detailed }: { eq: Equipment; detailed: boolean }) {
  return (
    <article id={eq.id} className="scroll-mt-32 flex flex-col bg-white border border-[#e0e5eb] rounded-2xl overflow-hidden">
      <div className={`grid ${detailed && eq.inUseImage ? "grid-cols-2" : "grid-cols-1"} gap-px bg-[#e0e5eb]`}>
        <div className="relative aspect-[4/3] bg-[#f3f5f8]">
          <Image
            src={eq.image}
            alt={eq.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            // foto de produto (sem "uso-" no nome) aparece inteira; foto em uso preenche o quadro
            className={eq.image.includes("/uso-") ? "object-cover" : "object-contain"}
          />
        </div>
        {detailed && eq.inUseImage && (
          <div className="relative aspect-[4/3] bg-[#f3f5f8]">
            <Image src={eq.inUseImage} alt={eq.inUseAlt ?? eq.name} fill sizes="(max-width: 768px) 50vw, 400px" className="object-cover" />
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="text-[11px] font-mono uppercase tracking-widest text-[#066bef]">{eq.category}</p>
        <h3 className="text-lg font-bold text-[#1d283a] leading-snug">{eq.name}</h3>
        <p className="text-sm text-[#3d4c5f] leading-relaxed">
          <span className="font-semibold text-[#1d283a]">Para que serve: </span>
          {eq.function}
        </p>
        {detailed && (
          <>
            <p className="text-sm text-[#5a687c] leading-relaxed">
              <span className="font-semibold text-[#1d283a]">Como usamos: </span>
              {eq.howWeUse}
            </p>
            <div>
              <p className="text-sm font-semibold text-[#1d283a] mb-2">O que ele revela:</p>
              <ul className="flex flex-col gap-1.5">
                {eq.finds.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#3d4c5f] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#066bef]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </article>
  )
}

export function EquipmentGrid({ detailed = false, limit }: { detailed?: boolean; limit?: number }) {
  const list = limit ? equipments.slice(0, limit) : equipments
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${detailed ? "" : "lg:grid-cols-3"} gap-5`}>
      {list.map((eq) => (
        <EquipmentCard key={eq.id} eq={eq} detailed={detailed} />
      ))}
    </div>
  )
}

export function BallTestVideo() {
  return (
    <figure className="bg-white border border-[#e0e5eb] rounded-2xl overflow-hidden max-w-sm mx-auto">
      <video
        src={`${VE_IMG}/teste-esferas-box.mp4`}
        poster={`${VE_IMG}/teste-esferas-box-poster.jpg`}
        controls
        muted
        playsInline
        preload="none"
        className="w-full h-auto bg-black"
      />
      <figcaption className="p-4 text-sm text-[#5a687c] leading-relaxed">
        Teste de caimento do box: as esferas precisam rolar até o ralo. Onde elas param, a água vai empoçar.
      </figcaption>
    </figure>
  )
}

export function GalleryGrid({ limit }: { limit?: number }) {
  const list = limit ? veGallery.slice(0, limit) : veGallery
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((g) => (
        <figure key={g.src} className="flex flex-col gap-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[#e0e5eb] bg-[#f3f5f8]">
            <Image src={g.src} alt={g.alt} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
          </div>
          <figcaption className="text-xs sm:text-sm text-[#5a687c] leading-snug">{g.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export function RoomChecklist() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {checklistByRoom.map((r) => (
        <div key={r.room} className="bg-white border border-[#e0e5eb] rounded-2xl p-6">
          <h3 className="text-lg font-bold text-[#1d283a] mb-4">{r.room}</h3>
          <ul className="flex flex-col gap-2.5">
            {r.items.map((it) => (
              <li key={it} className="flex items-start gap-2.5 text-sm text-[#3d4c5f] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#066bef]" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function StepsList() {
  return (
    <ol className="flex flex-col gap-5">
      {veSteps.map((s, i) => (
        <li key={s.title} className="flex items-start gap-4 bg-white border border-[#e0e5eb] rounded-2xl p-5">
          <span className="w-8 h-8 shrink-0 rounded-full bg-[#ecf4fe] border border-[#066bef]/30 text-[#066bef] text-sm font-bold flex items-center justify-center">
            {i + 1}
          </span>
          <div>
            <h3 className="font-bold text-[#1d283a] mb-1">{s.title}</h3>
            <p className="text-sm text-[#5a687c] leading-relaxed">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#066bef] hover:text-[#0559c7] transition-colors"
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </Link>
  )
}

// Blocos extras exibidos na página principal (dentro do template de serviço).
export function VEOverviewBlocks() {
  return (
    <>
      <section className="py-8">
        <VENav active="" />
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1d283a] mb-2">Equipamentos usados na vistoria</h2>
          <p className="text-[#5a687c] leading-relaxed mb-6 max-w-3xl">
            Cada equipamento tem uma função: revelar um tipo de defeito que não aparece a olho nu.
          </p>
          <EquipmentGrid limit={6} />
          <MoreLink href={veHref("equipamentos")}>Ver todos os equipamentos e o que cada um encontra</MoreLink>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#1d283a] mb-3">Teste na prática</h2>
            <p className="text-[#5a687c] leading-relaxed mb-3">
              Não basta olhar o box: soltamos esferas no piso para ver para onde a água vai escorrer. O mesmo vale para
              a varanda e a área de serviço.
            </p>
            <MoreLink href={veHref("o-que-verificamos")}>Ver o checklist completo por ambiente</MoreLink>
          </div>
          <BallTestVideo />
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1d283a] mb-6">Fotos de vistorias reais</h2>
          <GalleryGrid limit={6} />
          <MoreLink href={veHref("fotos")}>Ver todas as fotos</MoreLink>
        </div>
      </section>
    </>
  )
}
