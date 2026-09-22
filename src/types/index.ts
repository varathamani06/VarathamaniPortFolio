export type Layer = { layer: string; tech: string[] };

export type Project = {
  id: string;
  number?: string;
  kind: "Professional" | "Personal";
  title: string;
  summary: string;
  tech: string[];
  features: string[];
  responsibilities: string[];
  architecture: Layer[];
  liveUrl?: string;
  githubUrl?: string;
  screenshot?: string;   // e.g. "/projects/trip-planner.webp"
  // Optional. They render only if you fill them in with real details:
  problem?: string;
  solution?: string;
  challenges?: string;
  built?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: "frontend" | "backend" | "database" | "ai";
  items: string[];
};