import { getAllPosts } from "@/lib/blog"
import type { ServiceData } from "@/lib/services-data"
import { ServiceTemplateClient } from "@/components/service-template-client"

// Roda no servidor: busca os artigos do blog ligados a este serviço
// (campo serviceUrl do artigo) e repassa para o template da página.
// O "guia completo" é o artigo em destaque (featured) ou, sem destaque, o mais recente;
// os demais aparecem em "Leia também".
export function ServiceTemplate({ data }: { data: ServiceData }) {
  const posts = getAllPosts()
    .filter((post) => post.serviceUrl === `/${data.slug}`)
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .map((post) => ({ slug: post.slug, title: post.title, readTime: post.readTime }))

  const [guidePost, ...relatedPosts] = posts

  return <ServiceTemplateClient data={data} guidePost={guidePost} relatedPosts={relatedPosts} />
}
