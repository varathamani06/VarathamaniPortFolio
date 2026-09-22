"use client";
import { useState } from "react";
import { Briefcase, ChevronDown } from "lucide-react";
import { experience } from "@/data/experience";
import { professionalProjects } from "@/data/projects";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <SectionHeading label="Experience" title="Where I've built" />

        <Reveal>
          <div className="relative pl-11">
            <span className="absolute bottom-0 left-[15px] top-3.5 w-px bg-gradient-to-b from-accent via-line2 to-transparent" />
            <span className="absolute left-0 top-1 grid h-[31px] w-[31px] place-items-center rounded-full border border-accent/50 bg-bg2 text-accent shadow-[0_0_0_5px_rgb(var(--accent)/0.08)]">
              <Briefcase size={15} aria-hidden />
            </span>

            <h3 className="text-[1.6rem] font-bold">{experience.role}</h3>
            <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[0.94rem] text-muted">
              <span>{experience.company}</span>
              <span>{experience.period}</span>
            </div>

            <div className="mt-7 grid gap-3">
              {professionalProjects.map((p) => {
                const open = openId === p.id;
                return (
                  <div key={p.id} className="relative rounded-[20px] border border-line bg-card shadow-soft before:absolute before:-left-[30px] before:top-[34px] before:h-px before:w-4 before:bg-line2">
                    <button
                      className="grid w-full grid-cols-[1fr_auto] items-center gap-3.5 px-6 py-5 text-left"
                      aria-expanded={open}
                      aria-controls={`exp-${p.id}`}
                      onClick={() => setOpenId(open ? null : p.id)}
                    >
                      <div>
                        <h4 className="text-[1.08rem] font-semibold">{p.title}</h4>
                        <p className="mt-1 text-sm text-muted">{p.summary}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tech.slice(0, 5).map((t) => <Chip key={t}>{t}</Chip>)}
                          <Chip>+{p.tech.length - 5} more</Chip>
                        </div>
                      </div>
                      <span className={cn("grid h-[34px] w-[34px] flex-none place-items-center rounded-full border border-line text-muted transition-transform duration-250", open && "-rotate-180 border-accent/50 text-accent")}>
                        <ChevronDown size={17} aria-hidden />
                      </span>
                    </button>
                    <div
                      id={`exp-${p.id}`}
                      role="region"
                      className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <ul className="grid gap-2 px-6 pb-6 pl-11 text-[0.94rem] text-muted marker:text-accent">
                          {p.responsibilities.map((r) => <li key={r} className="list-disc">{r}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}