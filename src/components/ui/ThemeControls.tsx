"use client";
import { useState, useRef, useEffect } from "react";
import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeControls() {
  const { mode, accent, setAccent, toggleMode, ACCENTS } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* single trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Customise theme"
        aria-expanded={open}
        className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-line bg-card"
      >
        <span className="relative grid h-5 w-5 place-items-center">
          <Palette size={18} className="text-muted" aria-hidden />
          <span
            className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-card"
            style={{ background: `rgb(${accent})` }}
          />
        </span>
      </button>

      {/* dropdown card with both controls */}
      {open && (
        <div className=" fixed inset-x-4  top-[76px] w-64 z-[60] rounded-2xl border border-line bg-card p-4 shadow-soft
        sm: absolute sm:inset-x-auto sm:right-0 sm:top-[calc(100%+1rem)] sm:w-64">
          {/* mode toggle */}
          <div className="mb-4">
            <p className="mb-2 text-sm font-medium text-fg">Mode</p>
            <div className="flex gap-2">
              <button
                onClick={() => mode !== "light" && toggleMode()}
                aria-pressed={mode === "light"}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-medium transition ${
                  mode === "light"
                    ? "border-accent/50 bg-accent/10 text-accent"
                    : "border-line text-muted hover:text-fg"
                }`}
              >
                <Sun size={15} aria-hidden /> Light
              </button>
              <button
                onClick={() => mode !== "dark" && toggleMode()}
                aria-pressed={mode === "dark"}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-medium transition ${
                  mode === "dark"
                    ? "border-accent/50 bg-accent/10 text-accent"
                    : "border-line text-muted hover:text-fg"
                }`}
              >
                <Moon size={15} aria-hidden /> Dark
              </button>
            </div>
          </div>

          {/* accent picker */}
          <div>
            <p className="mb-2 text-sm font-medium text-fg">Accent colour</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(ACCENTS).map(([name, rgb]) => (
                <button
                  key={name}
                  onClick={() => setAccent(rgb)}
                  aria-label={name}
                  aria-pressed={accent === rgb}
                  className="h-8 w-8 rounded-full ring-offset-2 ring-offset-card transition"
                  style={{
                    background: `rgb(${rgb})`,
                    boxShadow: accent === rgb ? "0 0 0 2px var(--fg)" : "0 0 0 1px var(--line-2)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}