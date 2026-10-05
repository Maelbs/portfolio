"use client";
import { motion } from "framer-motion";
import { usePortfolioData } from "@/lib/data";
import { useTranslations } from "next-intl";
export function Experience() {
  const t = useTranslations("Sections");
  const { formationsData } = usePortfolioData();
  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
          {t("experience")}
        </h2>
        <div className="w-full h-px bg-foreground/20" />
      </div>
      <div className="relative border-l-2 border-foreground/10 ml-4 md:ml-8 flex flex-col gap-12">
        {formationsData.map((formation, index) => (
          <motion.div
            key={index}
            className="relative pl-8 md:pl-16 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 80, damping: 20 }}
          >
            <div className="absolute left-[-1.3rem] top-6 w-10 h-10 rounded-full bg-background border-2 border-foreground/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500 shadow-xl z-10 text-foreground/50">
              <i className={`${formation.iconClass} text-sm`} />
            </div>
            <div className="border border-foreground/10 bg-foreground/[0.04] shadow-xl shadow-black/10 dark:shadow-black/40 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col hoverable transition-all duration-500 group-hover:border-foreground/30 group-hover:shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                <h3 className="font-heading text-xl md:text-2xl uppercase font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                  {formation.title}
                </h3>
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-foreground/60 border border-foreground/10 rounded-full px-4 py-2 self-start md:self-auto bg-foreground/5 shrink-0 shadow-sm">
                  {formation.date}
                </span>
              </div>
              <div className="flex items-center gap-4 text-foreground/80 font-medium tracking-wide uppercase text-xs md:text-sm mb-6 pb-6 border-b border-foreground/5">
                <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0 border border-foreground/10">
                  <i className="fas fa-building text-foreground/50 text-sm" />
                </div>
                {formation.school}
              </div>
              <div className="text-foreground/70 font-light leading-relaxed bg-foreground/[0.02] p-5 rounded-xl border border-foreground/5"
                 dangerouslySetInnerHTML={{ __html: formation.details.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-foreground">$1</span>') }} 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
