import type { Metadata } from "next";
import { Inter, Prompt } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
