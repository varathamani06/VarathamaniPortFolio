import { Box, Check, Cpu, Database, Layers, Monitor, Server, Smartphone, Sparkles, Zap } from "lucide-react";
import type { Layer } from "@/types";
import { Chip } from "@/components/ui/Chip";

function iconFor(label: string) {
  const l = label.toLowerCase();
  if (l.includes("front")) return Monitor;
  if (l.includes("mobile")) return Smartphone;
  if (l.includes("api") || l.includes("real-time")) return Zap;
  if (l.includes("auth")) return Check;
  if (l.includes("background") || l.includes("backend") || l.includes("state")) return Server;
  if (l.includes("data")) return Database;
  if (l.includes("llm") || l.includes("rag") || l.includes("embed")) return Sparkles;
  if (l.includes("ai")) return Cpu;
  if (l.includes("deliver")) return Box;
  return Layers;
}

export function ArchitectureDiagram({ layers }: { layers: Layer[] }) {
  return (
    <div className="grid justify-items-center rounded-[18px] border border-line bg-bg p-7 [background-image:radial-gradient(var(--line-2)_1px,transparent_1px)] [background-size:18px_18px]">
      {layers.map((l, i) => {
        const Icon = iconFor(l.layer);
        return (
          <div key={l.layer} className="contents">
            {i > 0 && (
              <div className="relative h-[26px] w-px bg-line2" aria-hidden>
                <span
                  className="absolute -left-[2px] top-0 h-[5px] w-[5px] rounded-full bg-accent"
                  style={{ animation: "archPulse 1.8s linear infinite" }}
                />
                <style>{`@keyframes archPulse{from{top:0;opacity:1}to{top:24px;opacity:0}}`}</style>
              </div>
            )}
            <div className="grid w-full max-w-[560px] grid-cols-[auto_1fr] items-center gap-3.5 rounded-2xl border border-line2 bg-card px-4.5 py-3.5 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-accent/55">
              <span className="grid h-10 w-10 place-items-center rounded-[11px] bg-accent/10 text-accent">
                <Icon size={18} aria-hidden />
              </span>
              <div>
                <b className="mb-1.5 block font-[family-name:var(--font-head)] text-[0.98rem]">{l.layer}</b>
                <div className="flex flex-wrap gap-1.5">
                  {l.tech.map((t) => <Chip key={t} hot>{t}</Chip>)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}