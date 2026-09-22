import { Database, Monitor, Server, Sparkles } from "lucide-react";
import { skills } from "@/data/skills";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = { frontend: Monitor, backend: Server, database: Database, ai: Sparkles };

export function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-bg2 py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <SectionHeading label="Skills" title="Technical Expertise" />
        <div className="grid gap-4 md:grid-cols-[1.3fr_1fr]">
          {skills.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="relative h-full overflow-hidden rounded-[20px] border border-line bg-card p-[30px] shadow-soft transition duration-200 hover:-translate-y-[3px] hover:border-accent/40">
                  <div aria-hidden className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[radial-gradient(rgb(var(--accent)/0.12),transparent_70%)]" />
                  <h3 className="relative flex items-center gap-3 text-[1.35rem] font-semibold">
                    <span className="grid h-[38px] w-[38px] place-items-center rounded-[11px] bg-accent/10 text-accent">
                      <Icon size={19} aria-hidden />
                    </span>
                    {group.title}
                  </h3>
                  <p className="relative mb-[18px] ml-[50px] mt-1.5 text-sm text-muted max-md:ml-0">{group.description}</p>
                  <div className="relative flex flex-wrap gap-2">
                    {group.items.map((s) => <Chip key={s}>{s}</Chip>)}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}