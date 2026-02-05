"use client";

import { BentoCard } from "./components/BentoCard";
import { Github, Linkedin, Mail, Code2, Rocket, Brain, Smartphone, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      
      {/* Header / Intro */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
      >
        <div>
          <h1 className="font-prompt text-5xl md:text-7xl font-bold tracking-tight mb-2">
            Krittamet<span className="text-neon-yellow">.</span>
          </h1>
          <p className="text-xl text-neutral-400 font-light max-w-lg">
            Full Stack Developer building <span className="text-white font-medium">high-performance</span> web experiences.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="mailto:hello@example.com" className="px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-neon-yellow transition-colors duration-300">
            Let's Talk
          </a>
        </div>
      </motion.header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[180px]">
        
        {/* 1. Hero / About - Large Span */}
        <BentoCard 
          className="md:col-span-2 md:row-span-2 bg-neutral-900"
          title="Turning Ideas into Code"
          subtitle="About Me"
          delay={0.1}
          gradient="from-neutral-900 to-neutral-800"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
          <p className="relative z-10 text-neutral-300 mt-4 leading-relaxed">
            I'm a passionate developer with a knack for solving complex problems. 
            Currently focused on Next.js, Cloud Architecture, and interactive UI design.
            I love building things that live on the internet.
          </p>
        </BentoCard>

        {/* 2. Tech Stack - Icon Cloud Style */}
        <BentoCard 
          className="md:col-span-1 md:row-span-2 bg-black border-neon-yellow/20" 
          title="Tech Arsenal" 
          subtitle="Stack"
          delay={0.2}
        >
          <div className="grid grid-cols-2 gap-4 h-full place-content-center opacity-80 group-hover:opacity-100 transition-opacity">
            <div className="flex flex-col items-center gap-2">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-xs">React/Next</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Smartphone className="w-8 h-8 text-green-400" />
              <span className="text-xs">Flutter</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Database className="w-8 h-8 text-purple-400" />
              <span className="text-xs">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Rocket className="w-8 h-8 text-orange-400" />
              <span className="text-xs">Node.js</span>
            </div>
          </div>
        </BentoCard>

        {/* 3. Latest Project - Video/Image Preview */}
        <BentoCard 
          className="md:col-span-1 md:row-span-2 group" 
          title="Project A" 
          subtitle="Featured Work"
          delay={0.3}
          gradient="from-indigo-900/50 to-purple-900/50"
        >
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-24 h-24 rounded-full bg-neon-pink blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
           </div>
           <div className="relative z-10 h-full flex items-center justify-center">
             <span className="text-4xl">🚀</span>
           </div>
        </BentoCard>

        {/* 4. Experience 1 */}
        <BentoCard 
          className="md:col-span-2 md:row-span-1" 
          title="Senior Dev @ TechCo" 
          subtitle="2022 - Present"
          delay={0.4}
        >
           <div className="text-sm text-neutral-400 mt-2 line-clamp-2">
             Leading the frontend migration to Next.js 14. Improved core web vitals by 40%.
           </div>
        </BentoCard>

        {/* 5. Experience 2 */}
        <BentoCard 
          className="md:col-span-2 md:row-span-1" 
          title="Full Stack @ Agency" 
          subtitle="2020 - 2022"
          delay={0.5}
        >
          <div className="text-sm text-neutral-400 mt-2 line-clamp-2">
             Delivered 15+ client projects using MERN stack. Mentored junior developers.
           </div>
        </BentoCard>

        {/* 6. Socials - GitHub */}
        <BentoCard 
          className="md:col-span-1 bg-neutral-950 hover:bg-[#24292e] transition-colors" 
          href="https://github.com"
          delay={0.6}
        >
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <Github className="w-10 h-10" />
            <span className="font-bold">GitHub</span>
          </div>
        </BentoCard>

         {/* 7. Socials - LinkedIn */}
         <BentoCard 
          className="md:col-span-1 bg-neutral-950 hover:bg-[#0077b5] transition-colors" 
          href="https://linkedin.com"
          delay={0.7}
        >
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <Linkedin className="w-10 h-10" />
            <span className="font-bold">LinkedIn</span>
          </div>
        </BentoCard>
        
        {/* 8. Call to Action */}
        <BentoCard 
          className="md:col-span-2 bg-neon-yellow/10 border-neon-yellow/50 hover:bg-neon-yellow/20" 
          title="Let's build something crazy together."
          delay={0.8}
        >
           <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neon-yellow">
             <ArrowUpRight className="w-12 h-12" />
           </div>
        </BentoCard>

      </div>

      <footer className="mt-20 py-8 border-t border-white/10 text-center text-neutral-500 text-sm font-light">
        © {new Date().getFullYear()} Krittamet P. // Designed for the future.
      </footer>
    </main>
  );
}
