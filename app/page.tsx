import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail, Layers, Code2, Rocket } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "DeFi Aggregator",
    description: "A comprehensive dashboard for tracking assets across multiple chains with real-time price feeds and portfolio analytics.",
    tags: ["Next.js", "Web3.js", "Tailwind"],
    link: "https://github.com/xspeed/defi",
    icon: <Layers className="h-5 w-5" />
  },
  {
    title: "NFT Marketplace",
    description: "High-performance marketplace for trading digital assets with zero-gas fee optimizations and instant liquidity.",
    tags: ["Solidity", "IPFS", "React"],
    link: "https://github.com/xspeed/nft",
    icon: <Rocket className="h-5 w-5" />
  },
  {
    title: "Smart Contract Auditor",
    description: "Automated analysis tool for detecting common vulnerabilities in EVM smart contracts using static analysis.",
    tags: ["Python", "Rust", "AI"],
    link: "https://github.com/xspeed/audit",
    icon: <Code2 className="h-5 w-5" />
  },
];

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "TechGiant Corp",
    period: "2023 - Present",
    desc: "Leading the frontend architecture for the core product, improving performance by 40%.",
  },
  {
    role: "Web3 Developer",
    company: "BlockInnovate",
    period: "2021 - 2023",
    desc: "Developed secure smart contracts and DApps for decentralized finance protocols.",
  },
  {
    role: "Full Stack Developer",
    company: "StartUp Inc",
    period: "2019 - 2021",
    desc: "Built scalable web applications using MERN stack and implemented CI/CD pipelines.",
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Solidity", "Rust", "GraphQL", "PostgreSQL", "AWS"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Navbar / Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            xspeed
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#stack" className="hover:text-white transition-colors">Stack</Link>
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden text-zinc-400">
             <span className="sr-only">Menu</span>
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <section id="about" className="py-24 flex flex-col items-center text-center">
          <div className="relative mb-8 group cursor-default">
             <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 opacity-60 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
             <div className="relative px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-indigo-300">
               Available for hire
             </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">Future</span> <br />
            of Digital Experiences.
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed">
            I'm <span className="text-zinc-100 font-semibold">Krittamet (xspeed)</span>. A Creative Developer & Web3 Enthusiast crafting beautiful, high-performance interfaces and decentralized applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] h-12 px-8 text-base">
              View Projects <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white h-12 px-8 text-base">
              Contact Me
            </Button>
          </div>

          <div className="mt-16 flex gap-8 text-zinc-500">
            <Link href="https://github.com" target="_blank" className="hover:text-white transition-all hover:-translate-y-1"><Github className="h-6 w-6" /></Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition-all hover:-translate-y-1"><Twitter className="h-6 w-6" /></Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-600 transition-all hover:-translate-y-1"><Linkedin className="h-6 w-6" /></Link>
            <Link href="mailto:contact@example.com" className="hover:text-pink-400 transition-all hover:-translate-y-1"><Mail className="h-6 w-6" /></Link>
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <section id="stack" className="py-24 border-t border-zinc-900/50">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">Technologies</h2>
            <p className="text-zinc-500">My favorite weapons of choice.</p>
          </div>
          
          <div className="relative overflow-hidden group max-w-5xl mx-auto">
             <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
             <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
             
             <div className="flex gap-12 animate-marquee whitespace-nowrap py-4">
                {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
                  <span key={i} className="text-xl md:text-4xl font-bold text-zinc-800 uppercase tracking-widest select-none hover:text-indigo-500/80 transition-colors duration-300 cursor-default">
                    {tech}
                  </span>
                ))}
             </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="work" className="py-24 border-t border-zinc-900/50">
          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
              <Badge variant="outline" className="mb-6 text-indigo-400 border-indigo-500/20 bg-indigo-500/10 px-3 py-1">Career Path</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Work <br/> Experience</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                A timeline of my professional journey, highlighting key roles and impacts I've made in the industry.
              </p>
            </div>
            
            <div className="lg:w-2/3 space-y-12 relative pl-8 border-l border-zinc-800">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[37px] top-2 h-4 w-4 rounded-full border-4 border-zinc-900 bg-zinc-700 group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_rgba(24,24,27,1)]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                    <span className="text-sm font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">{exp.period}</span>
                  </div>
                  <div className="text-indigo-300 font-medium mb-4 text-lg">{exp.company}</div>
                  <p className="text-zinc-400 text-base leading-relaxed max-w-xl">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-zinc-900/50">
           <div className="max-w-6xl mx-auto">
             <div className="flex items-center justify-between mb-16">
               <div>
                 <Badge variant="outline" className="mb-4 text-pink-400 border-pink-500/20 bg-pink-500/10 px-3 py-1">Portfolio</Badge>
                 <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
               </div>
               <Button variant="ghost" className="hidden md:flex text-zinc-400 hover:text-white group">
                 View All <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </Button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, index) => (
                 <ProjectCard 
                   key={index}
                   title={project.title}
                   description={project.description}
                   tags={project.tags}
                   link={project.link}
                   icon={project.icon}
                 />
               ))}
             </div>
             
             <div className="mt-12 text-center md:hidden">
                <Button variant="outline" className="w-full">View All Projects</Button>
             </div>
           </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 bg-zinc-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Krittamet (xspeed). All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-zinc-500">
             <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms</Link>
             <Link href="https://github.com/xspeed" className="hover:text-white transition-colors">Github</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
