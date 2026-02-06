import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogPostCard } from "@/components/BlogPostCard";
import { TechMarquee } from "@/components/TechMarquee";
import { getNotionPages } from "@/lib/notion";
import { 
  ArrowRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Terminal,
  Cpu,
  Sparkles
} from "lucide-react";

export default async function Home() {
  const allProjects = await getNotionPages("Project");
  const projects = allProjects.filter(p => p.published);
  
  const allBlogPosts = await getNotionPages("Blog");
  const blogPosts = allBlogPosts.filter(p => p.published).slice(0, 3);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30">
      
      {/* Navbar Placeholder - Simple & Floating */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2 font-prompt text-lg font-bold">
            <div className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse" />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Krittamet
            </span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
          <Button size="sm" className="bg-white text-black hover:bg-zinc-200 rounded-full font-medium">
            Contact Me
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-20">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] opacity-50 animate-pulse" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl">
          <Badge variant="outline" className="border-indigo-500/30 bg-indigo-500/10 text-indigo-300 px-4 py-1 rounded-full text-sm backdrop-blur-md">
            <Sparkles className="w-3 h-3 mr-2 inline" /> Available for Hire
          </Badge>
          
          <h1 className="font-prompt text-5xl md:text-8xl font-black tracking-tight leading-tight">
            Building the <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Web3 Future
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            I'm <span className="text-zinc-100 font-semibold">Krittamet (xspeed)</span>. A UI Engineer & Web3 Developer crafting pixel-perfect interfaces and decentralized experiences.
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <Link href="#projects">
              <Button size="lg" className="h-12 px-8 text-lg bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] transition-all hover:scale-105">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-full">
              <Github className="mr-2 w-4 h-4" /> GitHub
            </Button>
          </div>
        </div>

        {/* Floating Abstract Elements */}
        <div className="absolute bottom-10 animate-bounce text-zinc-600">
           <Cpu className="w-6 h-6 opacity-50" />
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <TechMarquee />
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-32">
        <div className="flex flex-col items-start gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-prompt">
            Selected <span className="text-zinc-500">Works</span>
          </h2>
          <p className="text-zinc-400 max-w-xl">
            A showcase of my recent experiments, production apps, and contributions to the open-source ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.summary}
                tags={project.tags}
                link={project.slug.startsWith('http') ? project.slug : `#`}
                year={project.date ? new Date(project.date).getFullYear().toString() : undefined}
              />
            ))
          ) : (
            <p className="text-zinc-500 col-span-full">No projects found.</p>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 bg-zinc-900/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-5xl font-bold font-prompt mb-6 sticky top-24">
                Career <span className="text-zinc-500">Timeline</span>
              </h2>
            </div>
            
            <div className="md:w-2/3 space-y-12">
              {/* Experience Item 1 */}
              <div className="relative border-l-2 border-zinc-800 pl-8 pb-2">
                <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-zinc-950" />
                <span className="block text-sm text-indigo-400 font-mono mb-2">2024 - Present</span>
                <h3 className="text-xl font-bold text-zinc-100">Senior Frontend Engineer</h3>
                <p className="text-zinc-400 mt-1">TechCompany A • Bangkok</p>
                <p className="text-zinc-400 mt-4 leading-relaxed">
                  Leading the frontend team in building scalable Web3 applications. Implemented new design system using Shadcn UI which improved development velocity by 40%.
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="relative border-l-2 border-zinc-800 pl-8 pb-2">
                <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-zinc-700 ring-4 ring-zinc-950" />
                <span className="block text-sm text-zinc-500 font-mono mb-2">2022 - 2024</span>
                <h3 className="text-xl font-bold text-zinc-100">Web Developer</h3>
                <p className="text-zinc-400 mt-1">Agency Studio B • Remote</p>
                <p className="text-zinc-400 mt-4 leading-relaxed">
                  Developed high-performance marketing sites for global clients. Specialized in animation and interactive experiences using GSAP and React.
                </p>
              </div>
              
              {/* Experience Item 3 */}
               <div className="relative border-l-2 border-zinc-800 pl-8">
                <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-zinc-700 ring-4 ring-zinc-950" />
                <span className="block text-sm text-zinc-500 font-mono mb-2">2021 - 2022</span>
                <h3 className="text-xl font-bold text-zinc-100">Junior Developer</h3>
                <p className="text-zinc-400 mt-1">Freelance</p>
                <p className="text-zinc-400 mt-4 leading-relaxed">
                  Started journey in web development. Built various E-commerce and landing pages for SMEs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section id="blog" className="container mx-auto px-6 py-32 border-t border-zinc-800/50">
        <div className="flex flex-col items-start gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-prompt">
            Latest <span className="text-zinc-500">Insights</span>
          </h2>
          <p className="text-zinc-400 max-w-xl">
            Sharing my thoughts on development, design, and the evolving Web3 landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <BlogPostCard 
                key={post.id}
                title={post.title}
                summary={post.summary}
                tags={post.tags}
                coverImage={post.coverImage}
                slug={post.slug}
                date={post.date}
              />
            ))
          ) : (
            <p className="text-zinc-500 col-span-full">No blog posts found.</p>
          )}
        </div>
        
        {blogPosts.length > 0 && (
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-zinc-900">
                Read All Posts <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}
      </section>

      {/* Footer / CTA */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-12 rounded-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h2 className="relative z-10 text-4xl md:text-5xl font-bold font-prompt mb-6">
            Ready to collaborate?
          </h2>
          <p className="relative z-10 text-zinc-400 mb-8 max-w-lg mx-auto">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
             <Button variant="outline" className="h-12 w-12 rounded-full border-zinc-700 p-0 hover:border-indigo-500 hover:text-indigo-400">
               <Twitter className="h-5 w-5" />
             </Button>
             <Button variant="outline" className="h-12 w-12 rounded-full border-zinc-700 p-0 hover:border-indigo-500 hover:text-indigo-400">
               <Linkedin className="h-5 w-5" />
             </Button>
             <Button variant="outline" className="h-12 w-12 rounded-full border-zinc-700 p-0 hover:border-indigo-500 hover:text-indigo-400">
               <Mail className="h-5 w-5" />
             </Button>
          </div>
        </div>
        
        <p className="mt-12 text-zinc-600 text-sm">
          © {new Date().getFullYear()} Krittamet. Built with Next.js & Shadcn UI.
        </p>
      </section>

    </main>
  );
}
