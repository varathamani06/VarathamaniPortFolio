import { cn } from "@/lib/utils";

export function Chip({ children, hot, className }: { children: React.ReactNode; hot?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border px-3 py-1 text-[13px] font-medium transition duration-200 hover:-translate-y-0.5",
        hot
          ? "border-accent/30 bg-accent/10 text-accent"
          : "border-line bg-bg text-muted hover:border-accent/50 hover:bg-accent/5 hover:text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}