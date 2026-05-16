import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
  author: string;
  authorTitle: string;
  ogImage: string;
  content: string;
};

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        readTime: data.readTime,
        featured: data.featured ?? false,
        author: data.author ?? "Carvalho Engenharia",
        authorTitle: data.authorTitle ?? "",
        ogImage: data.ogImage ?? "",
        content,
      } as Post;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category,
    readTime: data.readTime,
    featured: data.featured ?? false,
    author: data.author ?? "Carvalho Engenharia",
    authorTitle: data.authorTitle ?? "",
    ogImage: data.ogImage ?? "",
    content,
  };
}
