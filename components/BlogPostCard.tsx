import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface BlogPostCardProps {
  title: string;
  summary: string;
  tags: string[];
  coverImage: string;
  slug: string;
  date: string;
}

export function BlogPostCard({ title, summary, tags, coverImage, slug, date }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group h-full">
      <Card className="h-full bg-zinc-900/30 border-zinc-800 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/50 hover:bg-zinc-900/60 hover:shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] relative overflow-hidden">
        {coverImage && (
          <img 
            src={coverImage} 
            alt={title} 
            className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <CardHeader className="flex-col items-start">
          <p className="text-zinc-500 text-sm mb-2">{new Date(date).toLocaleDateString()}</p>
          <CardTitle className="text-xl font-bold font-prompt text-zinc-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-pink-300 transition-all">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <CardDescription className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors line-clamp-3">
            {summary}
          </CardDescription>
        </CardContent>
        
        <CardFooter className="flex flex-wrap gap-2 pt-0 mt-auto">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-zinc-950/50 border-zinc-800/50 text-zinc-500 group-hover:text-indigo-200 group-hover:bg-indigo-900/20 group-hover:border-indigo-500/20 transition-all"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
