"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utils file or you can remove this and use template literals if preferred, but standard setups usually have it. I will mock it inline to be safe.

// Inline utility for class merging if not present
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export default function BentoCard({ children, className }: BentoCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={classNames(
        "rounded-3xl p-6 relative overflow-hidden shadow-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
