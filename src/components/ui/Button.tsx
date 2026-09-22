import { cn } from "@/lib/utils";

type Props = {
  href: string;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  external?: boolean;
  download?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({ href, variant = "ghost", size = "md", external, download, className, children }: Props) {
  return (
    
     <a href={href}
      download={download}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border font-medium transition duration-200 hover:-translate-y-0.5",
        size === "md" ? "min-h-12 px-5 text-[15px]" : "min-h-10 px-4 text-sm",
        variant === "primary"
          ? "border-transparent bg-gradient-to-br from-accent to-accent/85 font-semibold text-white shadow-[0_10px_26px_-10px_rgb(var(--accent)/0.7)]"
          : "border-line2 bg-card shadow-soft hover:border-accent/50",
        className
      )}
    >
      {children}
    </a>
  );
}