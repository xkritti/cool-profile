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
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50/30 to-fuchsia-50 dark:from-zinc-950 dark:via-purple-950/20 dark:to-zinc-950 text-purple-900 dark:text-zinc-50 selection:bg-purple-300/40 dark:selection:bg-purple-500/30 transition-colors duration-500">

      {/* Hero Section */}
      <section id="about" className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16">
        {/* Sophisticated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient orb */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-purple-300/60 via-pink-300/40 to-fuchsia-300/50 dark:from-purple-600/20 dark:via-pink-600/15 dark:to-fuchsia-600/20 rounded-full blur-3xl opacity-70 dark:opacity-40 animate-pulse" />
          {/* Secondary orbs */}
          <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-pink-400/40 to-purple-400/30 dark:from-pink-500/15 dark:to-purple-500/10 rounded-full blur-3xl opacity-60 dark:opacity-30" />
          <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-fuchsia-400/35 to-purple-400/25 dark:from-fuchsia-500/12 dark:to-purple-500/8 rounded-full blur-3xl opacity-50 dark:opacity-25" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-10 max-w-5xl">
          {/* Badge */}
          <Badge variant="outline" className="border-purple-300/60 dark:border-purple-500/40 bg-white/80 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 px-6 py-2.5 rounded-full text-sm font-semibold backdrop-blur-xl shadow-xl shadow-purple-200/60 dark:shadow-purple-900/30 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2 inline animate-pulse" /> Available for Hire
          </Badge>
          
          {/* Main Heading */}
          <h1 className="font-prompt text-6xl md:text-9xl font-black tracking-tight leading-[1.1] text-purple-950 dark:text-white drop-shadow-sm">
            Building the <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-600 dark:from-purple-400 dark:via-pink-400 dark:to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x">
                Web3 Future
              </span>
              {/* Underline decoration */}
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-600 dark:from-purple-400 dark:via-pink-400 dark:to-fuchsia-400 rounded-full opacity-60" />
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-purple-800 dark:text-zinc-300 max-w-3xl leading-relaxed font-medium">
            I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-700 to-fuchsia-700 dark:from-purple-300 dark:via-pink-300 dark:to-fuchsia-300">Krittamet (xspeed)</span>. A UI Engineer & Web3 Developer crafting pixel-perfect interfaces and decentralized experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-6">
            <Link href="#projects">
              <Button size="lg" className="h-16 px-12 text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-600 hover:from-purple-700 hover:via-pink-700 hover:to-fuchsia-700 text-white rounded-2xl shadow-2xl shadow-purple-400/60 dark:shadow-purple-600/40 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/80 dark:hover:shadow-purple-500/60 group">
                View Projects 
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold border-2 border-purple-400 dark:border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-950/60 hover:border-purple-500 dark:hover:border-purple-500 rounded-2xl shadow-xl shadow-purple-200/50 dark:shadow-purple-900/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <Github className="mr-3 w-5 h-5" /> View GitHub
            </Button>
          </div>
        </div>

        {/* Floating Element */}
        <div className="absolute bottom-16 animate-bounce text-purple-400/60 dark:text-purple-500/40">
           <Cpu className="w-7 h-7" />
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="border-y-2 border-purple-200/60 dark:border-purple-900/40 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md transition-colors">
        <TechMarquee />
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-32">
        <div className="flex flex-col items-start gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-prompt">
            Selected <span className="text-zinc-400 dark:text-zinc-500">Works</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
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
