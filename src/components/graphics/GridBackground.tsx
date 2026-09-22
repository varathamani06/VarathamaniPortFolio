export function GridBackground() {
  const mask = "radial-gradient(ellipse 75% 70% at 62% 38%, #000 20%, transparent 75%)";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}