import Link from "next/link";
import { getNotionPages } from "@/lib/notion";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Krittamet",
  description: "Latest insights and articles on Web3, development, and more.",
};

export default async function BlogPage() {
  const blogPosts = await getNotionPages("Blog");

  return (
    <div className="container mx-auto px-6 py-32 min-h-screen">
      <div className="flex flex-col items-start gap-4 mb-16">
        <h1 className="text-3xl md:text-5xl font-bold font-prompt">
          My <span className="text-zinc-500">Blog</span>
        </h1>
        <p className="text-zinc-400 max-w-xl">
          Thoughts, insights, and technical deep-dives into the world of Web3, frontend, and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            summary={post.summary}
            tags={post.tags}
            coverImage={post.coverImage}
            slug={post.slug}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
}
