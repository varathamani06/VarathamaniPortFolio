import Link from "next/link";
import { professionalProjects, sneakerVerse } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects({ onOpenCase }: { onOpenCase: (id: string) => void }) {
  return (
    <>
      <SectionHeading
        label="Selected Work"
        title="Professional projects"
        description="Four production-style builds from my time at Zsoft. Open a case study for the stack and architecture."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {professionalProjects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <ProjectCard project={p} onOpen={onOpenCase} />
          </Reveal>
        ))}
      </div>

      {/* SneakerVerse */}
      <Reveal delay={0.1}>
        <article className="mt-6 grid overflow-hidden rounded-[20px] border border-line bg-card shadow-soft md:grid-cols-[0.8fr_1.2fr]">
          <div
            aria-hidden
            className="relative grid min-h-[240px] place-items-center overflow-hidden bg-gradient-to-br from-accent2/10 to-accent/10 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:32px_32px] md:min-h-[280px]"
          >
            <div className="relative h-[150px] w-[150px] [transform-style:preserve-3d]" style={{ transform: "rotateX(58deg) rotateZ(-32deg)" }}>
              <div className="absolute inset-0 rounded-[22px] border border-accent/45 bg-accent/15" />
              <div className="absolute inset-0 translate-z-9 rounded-[22px] border border-accent/45 bg-accent/25" style={{ transform: "translateZ(36px)" }} />
              <div
                className="absolute inset-0 grid place-items-center rounded-[22px] border border-accent/45 font-mono text-white shadow-[0_30px_40px_-10px_rgb(var(--accent)/0.4)]"
                style={{ transform: "translateZ(72px)", background: "linear-gradient(135deg, rgb(var(--accent) / 0.85), rgb(var(--accent-2) / 0.8))" }}
              >
                .glb
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-8 md:p-10">
            <div className="flex flex-wrap gap-2">
              <Chip>Personal project</Chip>
              <Chip>Mobile</Chip>
            </div>
            <h3 className="text-[1.6rem] font-bold">{sneakerVerse.title}</h3>
            <p className="text-muted">{sneakerVerse.summary}</p>
            <div className="flex flex-wrap gap-2">
              {sneakerVerse.tech.map((t) => <Chip key={t} hot>{t}</Chip>)}
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-muted sm:grid-cols-3">
              {sneakerVerse.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="mt-[0.85em] h-px w-3.5 flex-none bg-accent" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-1 flex flex-wrap gap-3">
              <Link
                href={sneakerVerse.githubUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-br from-accent to-accent/85 px-5 text-sm font-semibold text-white shadow-[0_10px_26px_-10px_rgb(var(--accent)/0.7)] transition hover:-translate-y-0.5"
              >
                View on GitHub
              </Link>
              <button
                onClick={() => onOpenCase(sneakerVerse.id)}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line2 bg-card px-5 text-sm font-medium shadow-soft transition hover:-translate-y-0.5 hover:border-accent/50"
              >
                Case Study
              </button>
            </div>
          </div>
        </article>
      </Reveal>
    </>
  );
}