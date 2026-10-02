"use client";

import { motion } from "framer-motion";
import { formationsData } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
          Education & Journey.
        </h2>
        <div className="w-full h-px bg-foreground/20" />
      </div>

      <div className="flex flex-col gap-8 md:gap-12 relative border-l border-foreground/10 ml-4 md:ml-8 pl-8 md:pl-12">
        {formationsData.map((formation, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col gap-3 group hoverable"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[3.35rem] md:-left-[4.35rem] top-1 w-10 h-10 rounded-full bg-background border-2 border-foreground/20 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
              <i className={`${formation.iconClass} text-sm`} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 className="font-heading text-xl md:text-2xl uppercase font-bold tracking-tight group-hover:text-accent transition-colors">
                {formation.title}
              </h3>
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-foreground/50 border border-foreground/10 rounded-full px-4 py-1 self-start md:self-auto bg-white/5">
                {formation.date}
              </span>
            </div>
            
            <p className="text-foreground/80 font-medium tracking-wide uppercase text-sm flex items-center gap-2">
              <i className="fas fa-university text-foreground/40" />
              {formation.school}
            </p>
            
            {/* Render bold text for details if markdown is passed (**Honors**) */}
            <p className="text-foreground/70 font-light leading-relaxed mt-2" 
               dangerouslySetInnerHTML={{ __html: formation.details.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-foreground">$1</span>') }} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
