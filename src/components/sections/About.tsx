"use client";
import { motion } from "framer-motion";
import { usePortfolioData, technologies } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";
export function About() {
  const t = useTranslations("Sections");
  const { miscData, languagesData, softSkillsData } = usePortfolioData();
  const devTech = technologies.filter(t => t.category === "developpement");
  const sysTech = technologies.filter(t => t.category === "systeme");
  const dbTech = technologies.filter(t => t.category === "bdd");
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter">
          {t("about")}.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div 
          className="md:col-span-12 lg:col-span-5 border border-foreground/10 bg-foreground/[0.03] shadow-xl shadow-black/5 dark:shadow-black/20 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <h3 className="font-heading text-xl uppercase font-bold tracking-widest">
                {t("profileTitle")}
              </h3>
            </div>
            <p className="text-foreground/80 font-light leading-relaxed text-lg mb-6">
              {t("profileDesc")}
            </p>
          </div>
          <Button variant="secondary" href="/assets/files/INTERNATIONAL-CV.pdf" target="_blank" className="w-full mt-auto">
            {t("downloadCV")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </Button>
        </motion.div>
        <motion.div 
          className="md:col-span-12 lg:col-span-7 border border-foreground/10 bg-foreground/[0.04] shadow-xl shadow-black/10 dark:shadow-black/40 backdrop-blur-md rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <h3 className="font-heading text-xl uppercase font-bold tracking-widest">
              {t("hardSkills")}
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-[10px] uppercase text-foreground/50 font-bold mb-3 tracking-widest">{t("dev")}</h4>
              <div className="flex flex-wrap gap-2">
                {devTech.map((tech) => (
                  <span key={tech.name} className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase border border-foreground/10 rounded bg-foreground/5 text-foreground/90">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase text-foreground/50 font-bold mb-3 tracking-widest">{t("sys")}</h4>
              <div className="flex flex-wrap gap-2">
                {sysTech.map((tech) => (
                  <span key={tech.name} className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase border border-foreground/10 rounded bg-foreground/5 text-foreground/90">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase text-foreground/50 font-bold mb-3 tracking-widest">{t("db")}</h4>
              <div className="flex flex-wrap gap-2">
                {dbTech.map((tech) => (
                  <span key={tech.name} className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase border border-foreground/10 rounded bg-foreground/5 text-foreground/90">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="md:col-span-12 border border-foreground/10 bg-foreground/[0.04] shadow-xl shadow-black/10 dark:shadow-black/40 backdrop-blur-md rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="font-heading text-xl uppercase font-bold tracking-widest">
              {t("softSkills")}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softSkillsData.map((benefit, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-foreground/10 text-foreground font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold uppercase tracking-wider text-sm">
                    {benefit.name}
                  </h4>
                </div>
                <p className="text-foreground/70 font-light text-sm leading-relaxed mt-1">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          className="md:col-span-12 lg:col-span-5 border border-foreground/10 bg-foreground/[0.04] shadow-xl shadow-black/10 dark:shadow-black/40 backdrop-blur-md rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <h3 className="font-heading text-xl uppercase font-bold tracking-widest">
              {t("languages")}
            </h3>
          </div>
          <div className="flex flex-col gap-8">
            {languagesData.map((lang, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <span className="font-bold uppercase tracking-wider text-sm">{lang.name}</span>
                  <span className="text-[10px] text-foreground/50 tracking-widest uppercase font-bold">{lang.level}</span>
                </div>
                <div className="w-full h-1 bg-foreground/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-foreground/30 rounded-full"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          className="md:col-span-12 lg:col-span-7 border border-foreground/10 bg-foreground/[0.04] shadow-xl shadow-black/10 dark:shadow-black/40 backdrop-blur-md rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="font-heading text-xl uppercase font-bold tracking-widest">
              {t("interests")}
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {miscData.map((misc, idx) => (
              <div key={idx} className="flex gap-6 items-center p-4 border border-foreground/5 bg-foreground/[0.015] rounded-sm">
                <div className="w-12 h-12 rounded-sm bg-foreground/5 flex items-center justify-center shrink-0">
                  <i className={`${misc.icon} text-foreground/70 text-xl`}></i>
                </div>
                <p className="text-foreground/70 font-light text-sm leading-relaxed">
                  {misc.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
