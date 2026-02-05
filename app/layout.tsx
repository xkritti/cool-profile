import type { Metadata } from "next";
import { Inter, Prompt } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const prompt = Prompt({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Krittamet | Web3 Profile",
  description: "Interactive Playground and Portfolio of Krittamet (xspeed).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${prompt.variable} bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-indigo-500/30 overflow-x-hidden`}>
        {/* Navbar - copied from page.tsx for consistency */}
        <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
          <div className="container mx-auto flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-2 font-prompt text-lg font-bold">
              <div className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse" />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Krittamet
              </span>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/#projects" className="hover:text-white transition-colors">Projects</Link>
              <Link href="/#experience" className="hover:text-white transition-colors">Experience</Link>
            </div>
            <Button size="sm" className="bg-white text-black hover:bg-zinc-200 rounded-full font-medium">
              Contact Me
            </Button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
