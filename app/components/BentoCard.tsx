import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface BentoCardProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  gradient?: string;
  delay?: number;
}

export const BentoCard = ({
  title,
  subtitle,
  className,
  children,
  href = "#",
  gradient = "from-neutral-900 to-neutral-800",
  delay = 0,
}: BentoCardProps) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-white/20",
        `bg-gradient-to-br ${gradient}`,
        className
      )}
    >
      <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="rounded-full bg-white/10 p-2 backdrop-blur-sm">
          <ArrowUpRight className="h-5 w-5 text-white" />
        </div>
      </div>

      <div className="relative z-10 h-full">{children}</div>

      {(title || subtitle) && (
        <div className="relative z-10 mt-4 flex flex-col gap-1">
          {subtitle && (
            <span className="text-xs font-medium uppercase tracking-wider text-white/60 group-hover:text-neon-yellow transition-colors">
              {subtitle}
            </span>
          )}
          {title && (
            <h3 className="font-prompt text-2xl font-bold leading-tight text-white group-hover:text-white/90">
              {title}
            </h3>
          )}
        </div>
      )}

      {/* Hover Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"
      />
    </motion.a>
  );
};
