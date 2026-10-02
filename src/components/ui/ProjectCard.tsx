"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

interface ProjectDetail {
  image: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  status: string;
  date: string;
  description: string;
  techStack: string[];
  mainPicture: string;
  link: string;
  details: ProjectDetail[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const t = useTranslations("Sections");
  return (
    <motion.div
      className={cn(
        "flex flex-col h-full border border-foreground/10 bg-foreground/[0.04] shadow-xl shadow-black/10 dark:shadow-black/40 backdrop-blur-md rounded-xl overflow-hidden hoverable group",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-foreground/10">
        <Image
          src={project.mainPicture}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index === 0}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-widest rounded-sm border border-foreground/20">
          {project.status}
        </div>
      </div>
      
      <div className="flex flex-col p-6 flex-1">
        <h3 className="font-heading text-2xl font-bold uppercase tracking-tight mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-foreground/70 text-sm font-light leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] font-bold tracking-widest uppercase rounded bg-foreground/10 text-foreground/90"
            >
              {tech}
            </span>
          ))}
        </div>

        <Button
          variant="secondary"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-auto"
        >
          {t("viewProject")}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </Button>
      </div>
    </motion.div>
  );
}
