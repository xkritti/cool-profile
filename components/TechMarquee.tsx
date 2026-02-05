import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Terminal, 
  Zap 
} from "lucide-react";

const techs = [
  { name: "React", icon: Layout },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind", icon: Layers },
  { name: "Node.js", icon: ServerIcon },
  { name: "Solidity", icon: Cpu },
  { name: "Web3.js", icon: Database },
  { name: "Smart Contracts", icon: FileCode },
  { name: "Figma", icon: PenTool },
];

function ServerIcon(props: any) { return <Terminal {...props} /> }
function FileCode(props: any) { return <Code2 {...props} /> }
function PenTool(props: any) { return <Zap {...props} /> }

export function TechMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      <div className="pointer-events-none absolute left-0 z-10 h-full w-20 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 z-10 h-full w-20 bg-gradient-to-l from-zinc-950 to-transparent" />
      
      <div className="group flex overflow-hidden">
        {/* First Loop */}
        <div className="flex animate-loop-scroll space-x-12 px-6 group-hover:paused">
          {techs.map((tech, i) => (
            <div key={i} className="flex items-center space-x-2 text-zinc-500 transition-colors hover:text-indigo-400">
              <tech.icon className="h-6 w-6" />
              <span className="font-mono text-lg font-bold">{tech.name}</span>
            </div>
          ))}
        </div>
        {/* Duplicate Loop for seamless effect */}
        <div className="flex animate-loop-scroll space-x-12 px-6 group-hover:paused" aria-hidden="true">
          {techs.map((tech, i) => (
            <div key={`dup-${i}`} className="flex items-center space-x-2 text-zinc-500 transition-colors hover:text-indigo-400">
              <tech.icon className="h-6 w-6" />
              <span className="font-mono text-lg font-bold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
