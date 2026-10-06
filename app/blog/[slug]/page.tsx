import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.carvalho-engenharia.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author ?? "Caio Maracaípe"],
      url: `https://www.carvalho-engenharia.com/blog/${slug}`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const ctaTitle = post.ctaTitle || "Precisa regularizar sua obra?";
  const ctaText =
    post.ctaText ||
    "A Carvalho Engenharia resolve de ponta a ponta em Goiânia. Fale com o engenheiro pelo WhatsApp.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5562998062169&text=${encodeURIComponent(
    `Olá! Li o artigo "${post.title}" e quero uma avaliação`
  )}`;

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: "https://www.carvalho-engenharia.com/og-image.jpg",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author ?? "Caio Maracaípe",
      jobTitle: post.authorTitle ?? "Engenheiro Civil — CREA 1017786453D-GO",
    },
    publisher: {
      "@type": "Organization",
      name: "Carvalho Engenharia",
      logo: {
        "@type": "ImageObject",
        url: "https://www.carvalho-engenharia.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.carvalho-engenharia.com/blog/${post.slug}`,
    },
    articleSection: post.category,
  }

  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#1d283a]">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <div className="px-6 pt-28 lg:pt-36 max-w-3xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#5a687c] mb-10">
          <Link href="/" className="hover:text-[#066bef] transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#066bef] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[#1d283a] truncate">{post.title}</span>
        </nav>
      </div>

      {/* Article header */}
      <header className="px-6 pb-10 max-w-3xl mx-auto">
        <p className="text-[#066bef] text-sm font-semibold uppercase tracking-widest mb-3">
          {post.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-[#5a687c] text-lg mb-6">{post.description}</p>
        <div className="flex items-center gap-4 text-sm text-[#5a687c] border-b border-[#e0e5eb] pb-8">
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
            <div className="w-10 h-10 rounded-full bg-[#ecf4fe] flex items-center justify-center text-[#066bef] font-bold text-sm shrink-0">
              {post.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1d283a]">{post.author}</p>
              <p className="text-xs text-[#5a687c]">{post.authorTitle}</p>
            </div>
          </div>
        )}
      </header>

      {/* Article body */}
      <article className="px-6 pb-20 max-w-3xl mx-auto prose prose-headings:font-bold prose-headings:text-[#1d283a] prose-h2:text-2xl prose-h3:text-xl prose-p:text-[#3d4c5f] prose-p:leading-relaxed prose-li:text-[#3d4c5f] prose-strong:text-[#1d283a] prose-a:text-[#066bef] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={post.content} />
      </article>

      {/* CTA box */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-[#066bef]/25 bg-white p-8 text-center">
          <h2 className="text-xl font-bold mb-2">{ctaTitle}</h2>
          <p className="text-[#5a687c] mb-6 text-sm">{ctaText}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#066bef] hover:bg-[#0559c7] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm"
            >
              Falar no WhatsApp
            </a>
            {post.serviceUrl && (
              <Link
                href={post.serviceUrl}
                className="inline-block border border-[#e0e5eb] bg-white hover:border-[#066bef] text-[#1d283a] font-bold px-8 py-3 rounded-full transition-colors text-sm"
              >
                Ver como funciona o serviço
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-[#e0e5eb] px-6 py-16 max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-8 text-[#1d283a]">
            Leia também
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <article className="rounded-xl border border-[#e0e5eb] bg-white p-6 hover:border-[#066bef]/40 transition-colors h-full">
                  <p className="text-[#066bef] text-xs font-semibold uppercase tracking-wider mb-2">
                    {p.category}
                  </p>
                  <h3 className="font-bold leading-snug group-hover:text-[#066bef] transition-colors">
                    {p.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
