import { Code2, Layers, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const cards = [
  { icon: Code2, title: "Full-Stack Development", text: "Modern frontend and backend applications." },
  { icon: Sparkles, title: "AI Engineering", text: "LLMs, RAG, OpenAI APIs and AI-powered workflows." },
  { icon: Layers, title: "Scalable Systems", text: "APIs, databases, real-time systems and production-oriented architecture." },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid items-start gap-6 md:grid-cols-2 md:gap-14">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">About Me</span>
            <h2 className="mt-3.5 text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold leading-[1.15]">
              Full-Stack Developer building modern applications with AI at the core.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-4 pt-1.5 text-[1.05rem] text-muted">
            <p>
              I work across the full stack: responsive frontends in React.js and Next.js, backend services in Node.js,
              Express.js, Python and FastAPI, and data layers in PostgreSQL, MySQL and MongoDB.
            </p>
            <p>
              I also build AI-powered applications, integrating large language models, prompt engineering, OpenAI APIs
              and retrieval-augmented generation (RAG) into real products with modern web technologies.
            </p>
          </Reveal>
        </div>

        <div className="mt-13 grid gap-4 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-[20px] border border-line bg-card p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/40">
                <div className="mb-4 grid h-[42px] w-[42px] place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={20} aria-hidden />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1.5 text-[15px] text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}