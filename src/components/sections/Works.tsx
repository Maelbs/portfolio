"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { usePortfolioData } from "@/lib/data";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export function Works() {
  const t = useTranslations("Sections");
  const { projects } = usePortfolioData();
  const [activeFilter, setActiveFilter] = useState(t("all"));

  const categories = [t("all"), ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = activeFilter === t("all") 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="works" className="py-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter shrink-0">
          {t("works")}
        </h2>

        {/* Filter Menu */}
        <div className="flex flex-wrap items-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "primary" : "secondary"}
              className="scale-[0.85] origin-left sm:scale-90 md:scale-100"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
