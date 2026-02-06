import type { Metadata } from "next";
import { Inter, Prompt } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${prompt.variable} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-indigo-500/30 overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Enhanced Navbar */}
          <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
            <div className="relative">
              {/* Glow effect - Purple/Pink */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 rounded-2xl opacity-30 dark:opacity-30 blur-sm" />
              
              {/* Navbar content */}
              <div className="relative bg-white/90 dark:bg-zinc-900/80 backdrop-blur-xl border border-purple-200 dark:border-zinc-800 rounded-2xl shadow-2xl shadow-purple-200/50 dark:shadow-purple-900/20">
                <div className="flex h-16 items-center justify-between px-6">
                  {/* Logo */}
                  <Link href="/" className="flex items-center gap-2 font-prompt text-lg font-bold group">
                    <div className="relative">
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse" />
                      <div className="absolute inset-0 h-3 w-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-ping opacity-75" />
                    </div>
                    <span className="bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent group-hover:from-pink-700 group-hover:to-fuchsia-700 dark:group-hover:from-pink-400 dark:group-hover:to-fuchsia-400 transition-all">
                      Krittamet
                    </span>
                  </Link>
                  
                  {/* Nav Links */}
                  <div className="hidden md:flex items-center gap-1 bg-purple-100/70 dark:bg-zinc-800/50 rounded-xl p-1 backdrop-blur-sm">
                    <Link 
                      href="/" 
                      className="px-4 py-2 text-sm font-medium text-purple-700 dark:text-zinc-400 hover:text-purple-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-700 rounded-lg transition-all"
                    >
                      Home
                    </Link>
                    <Link 
                      href="/blog" 
                      className="px-4 py-2 text-sm font-medium text-purple-700 dark:text-zinc-400 hover:text-purple-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-700 rounded-lg transition-all"
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/#projects" 
                      className="px-4 py-2 text-sm font-medium text-purple-700 dark:text-zinc-400 hover:text-purple-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-700 rounded-lg transition-all"
                    >
                      Projects
                    </Link>
                    <Link 
                      href="/#experience" 
                      className="px-4 py-2 text-sm font-medium text-purple-700 dark:text-zinc-400 hover:text-purple-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-700 rounded-lg transition-all"
                    >
                      Experience
                    </Link>
                  </div>
                  
                  {/* Right Actions */}
                  <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-600 hover:from-purple-700 hover:via-pink-700 hover:to-fuchsia-700 text-white rounded-xl font-medium shadow-lg shadow-purple-300/50 dark:shadow-purple-500/30 hover:shadow-purple-400/70 dark:hover:shadow-purple-500/50 transition-all hover:scale-105"
                    >
                      Contact Me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
