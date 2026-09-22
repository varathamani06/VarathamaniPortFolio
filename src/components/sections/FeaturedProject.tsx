import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { tripPlanner } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProject({ onOpenCase }: { onOpenCase: (id: string) => void }) {
  const p = tripPlanner;
  return (
    <Reveal>
      <article className="grid overflow-hidden rounded-[24px] border border-accent/30 bg-card shadow-soft md:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
          <div className="flex flex-wrap gap-2">
            <Chip hot>Featured</Chip>
            <Chip>Personal project</Chip>
            <Chip>Live on Vercel</Chip>
          </div>
          <h3 className="text-[clamp(1.6rem,3vw,2.3rem)] font-bold">{p.title}</h3>
          <p className="text-muted">{p.summary}</p>
          <div className="mt-1 flex flex-wrap gap-3">
            <Button href={p.liveUrl!} external variant="primary">
              View Live Project <ArrowRight size={16} aria-hidden />
            </Button>
            <button
              onClick={() => onOpenCase(p.id)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-line2 bg-card px-5 text-[15px] font-medium shadow-soft transition hover:-translate-y-0.5 hover:border-accent/50"
            >
              Case Study
            </button>
          </div>
        </div>

        {/* Browser-window mockup. Swap for a real screenshot once you have one. */}
        <div className="relative order-first flex items-center overflow-hidden bg-gradient-to-br from-accent/10 to-accent2/8 p-9 [background-image:radial-gradient(var(--line-2)_1px,transparent_1px)] [background-size:18px_18px] md:order-none">
          {p.screenshot ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line2 shadow-[0_34px_60px_-24px_rgba(15,23,42,0.4)]">
              <Image src={p.screenshot} alt={`${p.title} screenshot`} fill className="object-cover" />
            </div>
          ) : (
            <div className="w-full overflow-hidden rounded-[14px] border border-line2 bg-card shadow-[0_34px_60px_-24px_rgba(15,23,42,0.4)]">
              <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5 font-mono text-[0.72rem] text-muted">
                <i className="h-2 w-2 rounded-full bg-line2" /><i className="h-2 w-2 rounded-full bg-line2" /><i className="h-2 w-2 rounded-full bg-line2" />
                <span className="truncate">go-holidayz-ai-app1-jlip.vercel.app</span>
              </div>
              <div className="grid min-h-[170px] gap-3 p-6">
                <div className="h-3.5 w-[42%] rounded bg-line" />
                <div className="h-2.5 w-[86%] rounded bg-line" />
                <div className="h-2.5 w-[68%] rounded bg-line" />
                <div className="mt-1.5 grid grid-cols-3 gap-2.5">
                  {[0, 1, 2].map((i) => <div key={i} className="h-14 rounded-[10px] border border-accent/20 bg-accent/10" />)}
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}