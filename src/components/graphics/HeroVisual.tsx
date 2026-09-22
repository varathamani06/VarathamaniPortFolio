const chips = [
  { label: "React.js", x: 19, y: 15, delay: "0s", color: "6 182 212" },
  { label: "Next.js", x: 82, y: 13, delay: "-1.2s", color: "79 70 229" },
  { label: "Node.js", x: 11, y: 55, delay: "-2.4s", color: "34 197 94" },
  { label: "Python", x: 89, y: 57, delay: "-0.6s", color: "245 158 11" },
  { label: "AI", x: 21, y: 88, delay: "-3.2s", color: "79 70 229" },
  { label: "RAG", x: 78, y: 89, delay: "-1.8s", color: "6 182 212" },
];

const paths = [
  "M100 70 C170 90 200 160 260 230",
  "M425 60 C380 100 320 170 260 230",
  "M55 255 C120 245 190 240 260 230",
  "M462 262 C400 250 330 238 260 230",
  "M110 405 C170 350 215 290 260 230",
  "M408 410 C350 350 305 290 260 230",
];

const nodes = [[50, 8], [57, 16], [44, 17], [90, 46], [8, 70]];

export function HeroVisual() {
  return (
    <div aria-hidden className="relative ml-auto aspect-[520/460] w-full max-w-[540px]">
      {/* soft gradient sphere */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_32%_28%,rgb(var(--accent)/0.28),rgb(var(--accent-2)/0.12)_55%,transparent_72%)]" />

      {/* connection lines */}
      <svg viewBox="0 0 520 460" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {paths.map((d, i) => (
          <path key={d} d={d} className="flow" style={{ animationDelay: `${-i * 0.5}s` }} />
        ))}
      </svg>

      {/* AI nodes */}
      {nodes.map(([x, y]) => (
        <span key={`${x}-${y}`} className="absolute h-[7px] w-[7px] rounded-full bg-accent/50" style={{ left: `${x}%`, top: `${y}%` }} />
      ))}

      {/* code window */}
      <div className="absolute left-1/2 top-1/2 w-[56%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-line2 bg-white/75 font-mono text-[clamp(0.56rem,1.35vw,0.78rem)] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.3)] backdrop-blur-md">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2 text-muted">
          <i className="h-2 w-2 rounded-full bg-line2" /><i className="h-2 w-2 rounded-full bg-line2" /><i className="h-2 w-2 rounded-full bg-line2" />
          <span className="ml-1.5">assistant.ts</span>
        </div>
        <pre className="overflow-hidden px-3.5 py-3 leading-[1.75]">
          <span className="text-muted">{"// retrieval-augmented reply"}</span>{"\n"}
          <span className="text-accent">const</span> context = <span className="text-accent">await</span> <span className="text-accent2">retrieve</span>(query);{"\n"}
          <span className="text-accent">const</span> reply = <span className="text-accent">await</span> <span className="text-accent2">llm</span>.generate({"{"}{"\n"}
          {"  query, context,"}{"\n"}
          {"}"});
        </pre>
      </div>

      {/* floating technology chips */}
      {chips.map((c) => (
        <div key={c.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
          <span
            className="bob flex items-center gap-2 whitespace-nowrap rounded-xl border border-line bg-card px-3.5 py-2 text-[clamp(0.66rem,1.6vw,0.85rem)] font-semibold shadow-soft max-sm:px-2.5 max-sm:py-1.5"
            style={{ animationDelay: c.delay }}
          >
            <span className="h-[7px] w-[7px] rounded-full" style={{ background: `rgb(${c.color})` }} />
            {c.label}
          </span>
        </div>
      ))}
    </div>
  );
}