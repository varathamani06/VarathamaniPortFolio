"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, X } from "lucide-react";
import { FaGithub, } from "react-icons/fa";
import type { Project } from "@/types";
import { Chip } from "@/components/ui/Chip";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

const optionalBlocks: { key: keyof Project; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "challenges", label: "Challenges" },
  { key: "built", label: "What I Built" },
];

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useLockBodyScroll(!!project);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const onCancel = (e: Event) => { e.preventDefault(); onClose(); };
    const onBackdrop = (e: MouseEvent) => { if (e.target === dialog) onClose(); };
    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("click", onBackdrop);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("click", onBackdrop);
    };
  }, [onClose]);

  if (!project) {
    // Keep the <dialog> mounted (uncontrolled by React state) so close animations/native behavior work.
    return <dialog ref={ref} aria-labelledby="modal-title" className="modal-shell" />;
  }

  const p = project;

  return (
    <dialog
      ref={ref}
      aria-labelledby="modal-title"
      className="w-[min(960px,calc(100vw-24px))] max-h-[calc(100vh-32px)] overflow-auto rounded-[24px] border border-line2 bg-card p-0 text-fg shadow-[0_50px_100px_-20px_rgba(15,23,42,0.5)] backdrop:bg-[rgba(15,23,42,0.55)] backdrop:backdrop-blur-sm"
    >
      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-card px-8 py-5">
        <div>
          <div className="flex flex-wrap gap-2">
            <Chip hot={p.kind === "Professional"}>{p.kind === "Professional" ? "Professional" : "Personal project"}</Chip>
            {p.number && <Chip>{p.number}</Chip>}
          </div>
          <h3 id="modal-title" className="mt-2.5 text-[clamp(1.35rem,3vw,2rem)] font-bold">{p.title}</h3>
        </div>
        <button onClick={onClose} aria-label="Close case study" className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-line bg-card">
          <X size={18} aria-hidden />
        </button>
      </div>

      <div className="grid gap-8 px-8 py-9">
        <div>
          <h4 className="mb-3 flex items-center gap-2.5 text-[1.05rem] font-semibold before:h-0.5 before:w-4.5 before:rounded-full before:bg-accent">Overview</h4>
          <p className="text-muted">{p.summary}</p>
          {(p.liveUrl || p.githubUrl) && (
            <div className="mt-4 flex flex-wrap gap-3">
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-gradient-to-br from-accent to-accent/85 px-4 text-sm font-semibold text-white">
                  View Live Project <ArrowRight size={15} aria-hidden />
                </a>
              )}
              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-line2 bg-card px-4 text-sm font-medium">
                  <FaGithub size={15} aria-hidden /> GitHub
                </a>
              )}
            </div>
          )}
        </div>

        {optionalBlocks.map(({ key, label }) =>
          p[key] ? (
            <div key={key}>
              <h4 className="mb-3 flex items-center gap-2.5 text-[1.05rem] font-semibold before:h-0.5 before:w-4.5 before:rounded-full before:bg-accent">{label}</h4>
              <p className="text-muted">{p[key] as string}</p>
            </div>
          ) : null
        )}

        {p.architecture.length > 0 && (
          <div>
            <h4 className="mb-3 flex items-center gap-2.5 text-[1.05rem] font-semibold before:h-0.5 before:w-4.5 before:rounded-full before:bg-accent">Architecture</h4>
            <ArchitectureDiagram layers={p.architecture} />
          </div>
        )}

        {(p.features.length > 0 || p.tech.length > 0) && (
          <div className="grid gap-8 md:grid-cols-2">
            {p.features.length > 0 && (
              <div>
                <h4 className="mb-3 flex items-center gap-2.5 text-[1.05rem] font-semibold before:h-0.5 before:w-4.5 before:rounded-full before:bg-accent">Key Features</h4>
                <ul className="grid gap-2 pl-5 text-[0.94rem] text-muted marker:text-accent">
                  {p.features.map((f) => <li key={f} className="list-disc">{f}</li>)}
                </ul>
              </div>
            )}
            {p.tech.length > 0 && (
              <div>
                <h4 className="mb-3 flex items-center gap-2.5 text-[1.05rem] font-semibold before:h-0.5 before:w-4.5 before:rounded-full before:bg-accent">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
              </div>
            )}
          </div>
        )}

        {p.responsibilities.length > 0 && (
          <div>
            <h4 className="mb-3 flex items-center gap-2.5 text-[1.05rem] font-semibold before:h-0.5 before:w-4.5 before:rounded-full before:bg-accent">Responsibilities</h4>
            <ul className="grid gap-2 pl-5 text-[0.94rem] text-muted marker:text-accent">
              {p.responsibilities.map((r) => <li key={r} className="list-disc">{r}</li>)}
            </ul>
          </div>
        )}
      </div>
    </dialog>
  );
}