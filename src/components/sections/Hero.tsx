"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const title = "Creative Developer".split(" ");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: "120%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20, mass: 1 }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-background -z-10" />
      
      <motion.div
        className="flex flex-col items-center text-center z-10 w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-xs sm:text-sm md:text-base text-foreground/60 mb-6 tracking-[0.2em] uppercase font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        >
          Maël Bouvier Sobrino
        </motion.p>

        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-10 flex flex-wrap justify-center gap-x-4 lg:gap-x-8">
          {title.map((word, index) => (
            <span key={index} className="overflow-hidden inline-flex pt-2 pb-4">
              <motion.span className="inline-block" variants={itemVariants}>
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="max-w-2xl text-base sm:text-lg md:text-xl text-foreground/70 mb-12 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          I am a versatile computer science student focusing on software and web development, seeking to build innovative projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
        >
          <Button variant="primary" onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth'})}>
            Discover my works
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
