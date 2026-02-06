import { getNotionPageBySlug, getNotionPageBlocks } from "@/lib/notion";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  
  // Fetch blog metadata
  const blog = await getNotionPageBySlug(slug);
  
  if (!blog || !blog.published) {
    notFound();
  }

  // Fetch blog content blocks
  const blocks = await getNotionPageBlocks(blog.id);
  const content = blocks.map(block => block.content).join("\n\n");

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-zinc-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl relative z-10">
        {/* Header */}
        <header className="mb-12">
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {blog.date && (
              <time className="text-sm text-zinc-500 font-medium">
                {new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            )}
            <span className="text-zinc-700">•</span>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-xs font-medium text-purple-300 hover:border-purple-500/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-white via-purple-100 to-purple-300 bg-clip-text text-transparent leading-tight">
            {blog.title}
          </h1>
          
          {/* Summary */}
          {blog.summary && (
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light">
              {blog.summary}
            </p>
          )}
        </header>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="relative w-full mb-12 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800/50 bg-zinc-900/50 backdrop-blur">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <article className="prose prose-invert prose-lg lg:prose-xl max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-4xl prose-h1:mb-4 prose-h1:bg-gradient-to-r prose-h1:from-purple-200 prose-h1:to-pink-200 prose-h1:bg-clip-text prose-h1:text-transparent
          prose-h2:text-3xl prose-h2:mb-3 prose-h2:mt-12 prose-h2:text-purple-100
          prose-h3:text-2xl prose-h3:mb-2 prose-h3:mt-8 prose-h3:text-purple-200
          prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300 prose-a:transition-colors
          prose-strong:text-white prose-strong:font-semibold
          prose-code:text-pink-400 prose-code:bg-zinc-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
          prose-pre:bg-zinc-900/50 prose-pre:border prose-pre:border-zinc-800 prose-pre:backdrop-blur prose-pre:rounded-xl
          prose-ul:list-disc prose-ul:text-zinc-300
          prose-ol:list-decimal prose-ol:text-zinc-300
          prose-li:text-zinc-300 prose-li:marker:text-purple-500
          prose-blockquote:border-l-purple-500 prose-blockquote:text-zinc-400 prose-blockquote:italic
        ">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>

        {/* Divider */}
        <div className="mt-16 mb-8 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-zinc-500 mb-4">Thanks for reading!</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Explore More Articles
          </Link>
        </div>
      </div>
    </main>
  );
}
