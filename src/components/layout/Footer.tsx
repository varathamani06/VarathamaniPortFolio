import {  Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0e1c] pb-12 pt-10 text-white">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-6 px-6">
        <div>
          <div className="flex items-center gap-2.5 font-[family-name:var(--font-head)] text-[17px] font-bold">
            <span className="grid h-[30px] w-[30px] place-items-center rounded-[9px] bg-gradient-to-br from-accent to-accent2 text-sm">V</span>
            {profile.name}
          </div>
          <p className="mt-2 text-sm text-white/60">{profile.role}</p>
        </div>
        <div className="flex gap-2.5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm"><FaGithub size={15} aria-hidden /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm"><FaLinkedin size={15} aria-hidden /> LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm"><Mail size={15} aria-hidden /> Email</a>
        </div>
        <p className="text-sm text-white/50">© 2026 Varathamani V. All rights reserved.</p>
      </div>
    </footer>
  );
}