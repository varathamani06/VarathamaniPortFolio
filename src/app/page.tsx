"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { ProjectModal } from "@/components/project/ProjectModal";
import { allProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Page() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeProject = allProjects.find((p) => p.id === openId) ?? null;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />

        <section className="border-y border-line bg-bg2 py-24" id="projects">
          <div className="mx-auto max-w-[1160px] px-6">
            <SectionHeading label="Featured Project" title="A live AI application" />
            <FeaturedProject onOpenCase={setOpenId} />
            <div className="mt-24">
              <Projects onOpenCase={setOpenId} />
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />

      <ProjectModal project={activeProject} onClose={() => setOpenId(null)} />
    </>
  );
}