"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('Hero');
  const title = "Creative Developer".split(" ");
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20, mass: 1 }
    }
  };

  return (
    <section className="relative flex items-center min-h-screen px-4 md:px-8 py-20 md:py-32 overflow-hidden max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-16">
        
        {/* Left Column: Text */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-xs sm:text-sm md:text-base text-foreground/60 mb-6 tracking-[0.2em] uppercase font-bold flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          >
            <span className="w-8 h-px bg-accent"></span>
            {t("subtitle")}
          </motion.p>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[0.9] tracking-tighter mb-8 flex flex-wrap gap-x-3 lg:gap-x-4">
            {title.map((word, index) => (
              <span key={index} className="overflow-hidden inline-flex pt-1 pb-3">
                <motion.span className="inline-block" variants={itemVariants}>
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="max-w-xl text-base sm:text-lg text-foreground/70 mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {t("description")}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          >
            <Button variant="primary" onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth'})}>
              <i className="fa-solid fa-arrow-down text-lg"></i>
              {t("buttonWorks")}
            </Button>
            <Button variant="secondary" href="/assets/files/INTERNATIONAL-CV.pdf" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-file-pdf text-lg"></i>
              {t("buttonCV")}
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Photo */}
        <motion.div 
          className="lg:col-span-5 relative w-full h-[350px] sm:h-[400px] lg:h-[500px] flex items-end justify-center group mt-8 lg:mt-0 max-w-sm lg:max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          {/* Animated Frame Behind Image */}
          <div className="absolute top-10 bottom-0 left-6 right-6 md:left-12 md:right-12 rounded-[2rem] bg-accent/10 border-2 border-accent/30 transition-all duration-700 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:rotate-3 group-hover:scale-[1.03] group-hover:bg-accent/20 group-hover:border-accent/50 z-0 shadow-2xl shadow-accent/5"></div>
          
          <div className="absolute top-16 bottom-6 left-10 right-10 md:left-20 md:right-20 rounded-full bg-accent/20 blur-3xl transition-opacity duration-700 opacity-50 group-hover:opacity-100 z-0"></div>

          {/* Transparent Image */}
          <Image
            src="/assets/img/profile.png"
            alt={t("subtitle")}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom z-10 transition-transform duration-700 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-6 group-hover:scale-[1.05] drop-shadow-2xl"
            priority
          />
        </motion.div>
        
      </div>
    </section>
  );
}
