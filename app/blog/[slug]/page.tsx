import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Carvalho Engenharia`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Breadcrumb */}
      <div className="px-6 pt-10 max-w-3xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-10">
          <Link href="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-zinc-300 truncate">{post.title}</span>
        </nav>
      </div>

      {/* Article header */}
      <header className="px-6 pb-10 max-w-3xl mx-auto">
        <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
          {post.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-zinc-400 text-lg mb-6">{post.description}</p>
        <div className="flex items-center gap-4 text-sm text-zinc-500 border-b border-zinc-800 pb-8">
          <span>
            Publicado em{" "}
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span>·</span>
          <span>{post.readTime} de leitura</span>
        </div>
        {post.author && (
          <div className="flex items-center gap-3 pt-6 pb-2">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm shrink-0">
              {post.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{post.author}</p>
              <p className="text-xs text-zinc-500">{post.authorTitle}</p>
            </div>
          </div>
        )}
      </header>

      {/* Article body */}
      <article className="px-6 pb-20 max-w-3xl mx-auto prose prose-invert prose-amber prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-zinc-300 prose-p:leading-relaxed prose-li:text-zinc-300 prose-strong:text-white prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={post.content} />
      </article>

      {/* CTA box */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Precisa regularizar sua obra?</h2>
          <p className="text-zinc-400 mb-6 text-sm">
            A Carvalho Engenharia resolve de ponta a ponta em Goiânia. Avaliação
            gratuita, sem compromisso.
          </p>
          <a
            href={`https://wa.me/5562999999999?text=Olá!%20Li%20o%20artigo%20"${encodeURIComponent(post.title)}"%20e%20quero%20uma%20avaliação`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-full transition-colors text-sm"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-zinc-800 px-6 py-16 max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-8 text-zinc-300">
            Leia também
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-amber-500/40 transition-colors h-full">
                  <p className="text-amber-500 text-xs font-semibold uppercase tracking-wider mb-2">
                    {p.category}
                  </p>
                  <h3 className="font-bold leading-snug group-hover:text-amber-400 transition-colors">
                    {p.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
