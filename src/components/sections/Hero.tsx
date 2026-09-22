"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
//  GithubIcon,
//   LinkedinIcon,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/graphics/GridBackground";
import { HeroVisual } from "@/components/graphics/HeroVisual";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <GridBackground />
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-28 h-[460px] w-[460px] rounded-full bg-accent/15 blur-[80px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-36 -left-24 h-[340px] w-[340px] rounded-full bg-accent2/15 blur-[80px]" />

      <div className="relative mx-auto grid max-w-[1160px] items-center gap-10 px-6 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.span {...fade(0)} className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Full-Stack Developer · AI Developer
          </motion.span>

          <motion.h1 {...fade(0.08)} className="mt-[18px] text-[clamp(2.4rem,5.6vw,4.4rem)] font-bold leading-[1.05]">
            Hi, I&apos;m {profile.name}.
            <span className="mt-2 block bg-gradient-to-r from-accent to-accent2 bg-clip-text text-[0.68em] font-semibold leading-[1.12] text-transparent">
               3+ years of experience building modern web applications and AI-powered systems.
            </span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-[22px] max-w-[50ch] text-[1.08rem] text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-[30px] flex flex-wrap gap-3">
            <Button href="#projects" variant="primary">View Projects <ArrowRight size={16} aria-hidden /></Button>
            <Button href={profile.resume} download><Download size={16} aria-hidden /> Download Resume</Button>
          </motion.div>

          <motion.div {...fade(0.32)} className="mt-4 flex gap-2.5">
            <Button href={profile.github} external size="sm"><FaGithub size={16} aria-hidden /> GitHub</Button>
            <Button href={profile.linkedin} external size="sm"><FaLinkedin size={16} aria-hidden /> LinkedIn</Button>
          </motion.div>
        </div>

        <motion.div {...fade(0.2)}>
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}