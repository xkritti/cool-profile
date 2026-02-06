import { getNotionPageBySlug, getNotionPageBlocks } from "@/lib/notion";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = params;
  
  // Fetch blog metadata
  const blog = await getNotionPageBySlug(slug);
  
  if (!blog || !blog.published) {
    notFound();
  }

  // Fetch blog content blocks
  const blocks = await getNotionPageBlocks(blog.id);
  const content = blocks.map(block => block.content).join("\n\n");

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            {blog.title}
          </h1>
          
          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
            {blog.date && (
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            )}
            {blog.tags.length > 0 && (
              <div className="flex gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          {blog.summary && (
            <p className="text-lg text-gray-300 mb-6">{blog.summary}</p>
          )}

          {/* Cover Image */}
          {blog.coverImage && (
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>

        {/* Back button */}
        <div className="mt-12">
          <a
            href="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
