import { getAllPosts } from "@/lib/blog"
import type { ServiceData } from "@/lib/services-data"
import { ServiceTemplateClient } from "@/components/service-template-client"

// Roda no servidor: busca os artigos do blog ligados a este serviço
// (campo serviceUrl do artigo) e repassa para o template da página.
export function ServiceTemplate({ data }: { data: ServiceData }) {
  const relatedPosts = getAllPosts()
    .filter((post) => post.serviceUrl === `/${data.slug}`)
    .map((post) => ({ slug: post.slug, title: post.title, readTime: post.readTime }))

  return <ServiceTemplateClient data={data} relatedPosts={relatedPosts} />
}
