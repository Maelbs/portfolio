import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function Works() {
  return (
    <section id="works" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter">
          Selected Work.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
