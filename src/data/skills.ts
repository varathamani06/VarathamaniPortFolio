import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  { title: "Frontend", description: "Interfaces and state management", icon: "frontend",
    items: ["React.js","Next.js","JavaScript ES6+","TypeScript","Angular","jQuery","Redux","Redux Toolkit","HTML5","CSS3","Tailwind CSS","Material UI","Bootstrap"] },
  { title: "Backend", description: "APIs and services", icon: "backend",
    items: ["Node.js","Express.js","RESTful APIs","Python","FastAPI"] },
  { title: "Database", description: "Relational and document stores", icon: "database",
    items: ["PostgreSQL","MySQL","MongoDB"] },
  { title: "AI", description: "LLM-powered features", icon: "ai",
    items: ["Generative AI","Large Language Models","Prompt Engineering","RAG","OpenAI APIs"] },
];