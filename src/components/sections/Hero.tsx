"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('Hero');
  const title = "versatile Developer".split(" ");
  
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
          className="group lg:col-span-5 relative w-full h-[350px] sm:h-[400px] lg:h-[500px] flex items-end justify-center mt-8 lg:mt-0 max-w-sm lg:max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {/* React Logo */}
          <motion.div
            className="pointer-events-none absolute left-8 bottom-24 z-[6] flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-background/90 shadow-2xl shadow-black/20 backdrop-blur-md opacity-0 translate-y-8 -translate-x-8 scale-75 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:z-[20] group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:scale-100"
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5"
            >
              <Image
                src="/assets/img/React-icon.svg.webp"
                alt="React"
                width={32}
                height={32}
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* C# Logo */}
          <motion.div
            className="pointer-events-none absolute left-1/2 bottom-24 z-[6] flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-background/90 shadow-2xl shadow-black/20 backdrop-blur-md opacity-0 translate-y-8 scale-75 transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:z-[20] group-hover:opacity-100 group-hover:translate-y-[-16px] group-hover:scale-100"
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5"
            >
              <Image
                src="/assets/img/Logo_C_sharp.svg.webp"
                alt="C#"
                width={32}
                height={32}
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Docker Logo */}
          <motion.div
            className="pointer-events-none absolute right-8 bottom-24 z-[6] flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-background/90 shadow-2xl shadow-black/20 backdrop-blur-md opacity-0 translate-y-8 translate-x-8 scale-75 transition-all duration-700 delay-75 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:z-[20] group-hover:opacity-100 group-hover:translate-y-[-4px] group-hover:translate-x-0 group-hover:scale-100"
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5"
            >
              <Image
                src="/assets/img/docker_icon_146192.png.webp"
                alt="Docker"
                width={32}
                height={32}
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Animated Frame Behind Image */}
          <div className="absolute top-10 bottom-0 left-6 right-6 md:left-12 md:right-12 rounded-[2rem] bg-accent/10 border-2 border-accent/30 z-[1] shadow-2xl shadow-accent/5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] group-hover:rotate-2 group-hover:bg-accent/20 group-hover:border-accent/50"></div>
          
          <div className="absolute top-16 bottom-6 left-10 right-10 md:left-20 md:right-20 rounded-full bg-accent/20 blur-3xl opacity-50 z-[1] transition-opacity duration-700 group-hover:opacity-90"></div>

          {/* Transparent Image */}
          <Image
            src="/assets/img/profile.png"
            alt={t("subtitle")}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom z-10 drop-shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-4 group-hover:scale-[1.03]"
            priority
          />
        </motion.div>
        
      </div>
    </section>
  );
}
