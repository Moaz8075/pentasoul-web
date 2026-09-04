import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type PillButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
  external?: boolean;
};

export function PillButton({
  href,
  children,
  variant = "dark",
  className,
  external,
}: PillButtonProps) {
  const classes = cn(
    "group inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full py-1.5 pr-1.5 pl-5 text-[15px] font-medium tracking-[-0.01em] transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4",
    variant === "dark" && "bg-ink text-white focus-visible:outline-ink",
    variant === "light" && "bg-white text-ink focus-visible:outline-white",
    className,
  );

  const inner = (
    <>
      <span
        className={variant === "dark" ? "text-white" : "text-ink"}
        style={{ color: variant === "dark" ? "#ffffff" : "#0a0a0c" }}
      >
        {children}
      </span>
      <span
        className={cn(
          "grid size-9 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45",
          variant === "dark" ? "bg-white text-ink" : "bg-ink text-white",
        )}
      >
        <ArrowUpRight size={16} strokeWidth={2.2} />
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
