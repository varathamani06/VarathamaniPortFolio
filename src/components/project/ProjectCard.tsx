import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { Chip } from "@/components/ui/Chip";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (id: string) => void }) {
  return (
    <article className="group relative flex flex-col gap-4 overflow-hidden rounded-[20px] border border-line bg-card p-[30px] shadow-soft transition duration-250 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_30px_50px_-24px_rgb(var(--accent)/0.35)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-center justify-between">
        <span className="font-[family-name:var(--font-head)] text-[2.3rem] font-semibold leading-none text-accent/25">{project.number}</span>
        <Chip hot>Professional</Chip>
      </div>
      <h3 className="relative text-[1.32rem] font-semibold">{project.title}</h3>
      <p className="relative text-[0.94rem] text-muted">{project.summary}</p>
      <div className="relative flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((t) => <Chip key={t}>{t}</Chip>)}
        <Chip>+{project.tech.length - 5}</Chip>
      </div>
      <ul className="relative grid gap-1.5 text-sm text-muted">
        {project.features.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span className="mt-[0.85em] h-px w-3.5 flex-none bg-accent" /> {f}
          </li>
        ))}
      </ul>
      <button
        onClick={() => onOpen(project.id)}
        className="relative mt-auto inline-flex min-h-11 items-center gap-2 pt-2 font-semibold text-accent"
      >
        View Case Study <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
      </button>
    </article>
  );
}