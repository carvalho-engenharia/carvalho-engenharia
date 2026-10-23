import type { MetadataRoute } from "next"
import fs from "fs"
import path from "path"
import { services } from "@/lib/services-data"
import { veSubpages, veHref } from "@/lib/vistoria-entrega-data"

const BASE_URL = "https://www.carvalho-engenharia.com"

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "content", "blog")

  try {
    return fs
      .readdirSync(blogDir)
      .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
      .map((file) => file.replace(/\.mdx?$/, ""))
  } catch {
    // Pasta ainda não existe no momento do build — retorna vazio em vez de quebrar
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/servicos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/documentacao-necessaria`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/alvaras-emitidos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/#depoimentos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/#contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getBlogSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  // Subpáginas da vistoria de entrega (a principal já entra em serviceRoutes)
  const vistoriaEntregaRoutes: MetadataRoute.Sitemap = veSubpages
    .filter((p) => p.slug)
    .map((p) => ({
      url: `${BASE_URL}${veHref(p.slug)}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }))

  return [...staticRoutes, ...serviceRoutes, ...vistoriaEntregaRoutes, ...blogRoutes]
}
