"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navItems, profile, sectionIds } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

import { ThemeControls } from "@/components/ui/ThemeControls";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-3 z-50 px-4">
      <div className="relative mx-auto flex h-[62px] max-w-[1100px] items-center justify-between rounded-[20px] border border-line bg-card  pl-5 pr-3 shadow-soft">
        <a href="#home" className="flex items-center gap-2.5 font-[family-name:var(--font-head)] text-[17px] font-bold">
          <span className="grid h-[30px] w-[30px] place-items-center rounded-[9px] bg-gradient-to-br from-accent to-accent2 text-sm text-white">V</span>
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden gap-0.5 md:flex">
          {navItems.map((n) => (
            
             <a key={n.id}
              href={`#${n.id}`}
              className={cn(
                "rounded-xl px-3.5 py-2 text-sm font-medium transition-colors hover:bg-accent/5 hover:text-fg",
                active === n.id ? "bg-accent/10 text-accent" : "text-muted"
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <ThemeControls />
          <Button href={profile.resume} download variant="primary" size="sm" className="hidden md:inline-flex">
            <Download size={16} aria-hidden /> Download Resume
          </Button>
          <button
            className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-card md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-nav"
              aria-label="Mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute left-0 right-0 top-[70px] flex flex-col rounded-[18px] border border-line bg-card p-2.5 shadow-soft md:hidden"
            >
              {navItems.map((n) => (
                <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="min-h-11 rounded-xl px-3.5 py-3 text-muted hover:bg-accent/5 hover:text-fg">
                  {n.label}
                </a>
              ))}
              <Button href={profile.resume} download variant="primary" className="mt-2">Download Resume</Button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}