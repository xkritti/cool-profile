import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon?: React.ReactNode;
}

export function ProjectCard({ title, description, tags, link, icon }: ProjectCardProps) {
  return (
    <Link href={link} target="_blank" className="block group h-full">
      <Card className="h-full bg-zinc-900/40 border-zinc-800 transition-all duration-300 hover:border-indigo-500/50 hover:bg-zinc-900/60 hover:shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] relative overflow-hidden">
        
        {/* Glow Effect Background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-pink-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>

        <CardHeader>
          <div className="flex justify-between items-start mb-3">
            <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-indigo-400 group-hover:text-indigo-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-colors">
              {icon || <FolderGit2 className="h-5 w-5" />}
            </div>
            <ArrowUpRight className="h-5 w-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>
          <CardTitle className="text-xl font-bold text-zinc-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-pink-300 transition-all">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <CardDescription className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors line-clamp-3">
            {description}
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
