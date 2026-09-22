export function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="mb-11">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{label}</span>
      <h2 className="mt-3 max-w-[20ch] text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.1]">{title}</h2>
      {description && <p className="mt-3 max-w-[56ch] text-muted">{description}</p>}
    </div>
  );
}