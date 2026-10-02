"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background";
  
  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    outline: "border border-foreground/20 text-foreground hover:bg-foreground/5",
    ghost: "text-foreground/70 hover:text-foreground hover:bg-foreground/5",
  };

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], "px-8 py-4 text-sm tracking-wide uppercase", className)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
