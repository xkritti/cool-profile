import { getNotionPageBySlug } from "@/lib/notion";
import { NotionRenderer } from "@/components/NotionRenderer";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getNotionPageBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Blog | Krittamet`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getNotionPageBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-32 min-h-screen">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-prompt text-4xl md:text-6xl font-black mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-zinc-500 text-sm mb-8">
          Published on {new Date(post.date).toLocaleDateString()}
        </p>
        {post.coverImage && (
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-64 object-cover rounded-xl mb-12"
          />
        )}
        <NotionRenderer content={post.summary} /> {/* Simplified for mock data */}

        <div className="mt-16 text-center">
          <a href="/blog" className="text-indigo-400 hover:underline">
            &larr; Back to all posts
          </a>
        </div>
      </article>
    </div>
  );
}
