import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog: Regularização de Imóveis e Alvarás em Goiânia",
  description:
    "Artigos sobre regularização de obras, alvarás de construção e habite-se em Goiânia. Tire suas dúvidas com a Carvalho Engenharia.",
  alternates: {
    canonical: "https://www.carvalho-engenharia.com/blog",
  },
  openGraph: {
    title: "Blog: Regularização de Imóveis e Alvarás em Goiânia | Carvalho Engenharia",
    description:
      "Artigos sobre regularização de obras, alvarás de construção e habite-se em Goiânia. Tire suas dúvidas com a Carvalho Engenharia.",
    type: "website",
    url: "https://www.carvalho-engenharia.com/blog",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blog da Carvalho Engenharia",
      },
    ],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured);
  // Só o post em destaque sai da lista; outros marcados como "featured" continuam aparecendo.
  const rest = posts.filter((p) => p !== featured);

  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#1d283a]">
      <Navbar />

      {/* Header */}
      <section className="px-6 pt-32 lg:pt-44 pb-16 max-w-5xl mx-auto">
        <p className="text-[#066bef] text-sm font-semibold uppercase tracking-widest mb-3">
          Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Tudo sobre regularização <br className="hidden md:block" />
          de obras em Goiânia
        </h1>
        <p className="text-[#5a687c] text-lg max-w-2xl">
          Artigos técnicos e práticos sobre alvarás, habite-se e regularização
          de obras — escritos pela equipe da Carvalho Engenharia.
        </p>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="px-6 pb-16 max-w-5xl mx-auto">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <article className="rounded-2xl border border-[#e0e5eb] bg-white p-8 md:p-12 hover:border-[#066bef]/50 transition-colors duration-300">
              <span className="inline-block bg-[#066bef] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                Destaque
              </span>
              <p className="text-[#066bef] text-sm font-medium mb-2">
                {featured.category}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#066bef] transition-colors">
                {featured.title}
              </h2>
              <p className="text-[#5a687c] mb-6 max-w-2xl">{featured.description}</p>
              <div className="flex items-center gap-4 text-sm text-[#5a687c]">
                <span>{new Date(featured.date).toLocaleDateString("pt-BR")}</span>
                <span>·</span>
                <span>{featured.readTime} de leitura</span>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* Post grid */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="h-full rounded-2xl border border-[#e0e5eb] bg-white p-7 hover:border-[#066bef]/40 transition-colors duration-300">
                <p className="text-[#066bef] text-xs font-semibold uppercase tracking-wider mb-3">
                  {post.category}
                </p>
                <h2 className="text-xl font-bold mb-3 group-hover:text-[#066bef] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-[#5a687c] text-sm mb-6 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#5a687c] mt-auto">
                  <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-[#e0e5eb] bg-white px-6 py-14">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Sua obra tem pendência?</h2>
          <p className="text-[#5a687c] mb-7">
            A Carvalho Engenharia resolve regularização, alvará e habite-se em
            Goiânia. Fale com o engenheiro e receba a análise do seu caso.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5562998062169&text=Ol%C3%A1!%20Vim%20pelo%20blog%20e%20quero%20uma%20an%C3%A1lise%20do%20meu%20caso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#066bef] hover:bg-[#0559c7] text-white font-bold px-8 py-3 rounded-full transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
