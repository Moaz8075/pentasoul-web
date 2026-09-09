import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { isExternalHref } from "@/lib/utils/href";

type PillButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gradient" | "outline" | "white" | "ghost";
  className?: string;
  external?: boolean;
};

export function PillButton({
  href,
  children,
  variant = "gradient",
  className,
  external,
}: PillButtonProps) {
  const classes = cn(
    "group btn-shine inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-[15px] font-semibold tracking-[-0.01em] transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4",
    variant === "gradient" &&
      "bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white shadow-[0_10px_30px_rgba(139,92,246,0.35)] focus-visible:outline-purple",
    variant === "outline" &&
      "border border-white/18 bg-white/5 text-white hover:border-white/35 hover:bg-white/10 focus-visible:outline-white",
    variant === "white" &&
      "bg-white text-[#05050a] focus-visible:outline-white",
    variant === "ghost" && "px-0 py-0 text-white/80 hover:text-white",
    className,
  );

  const inner = (
    <>
      <span
        className="relative z-[1]"
        style={{
          color:
            variant === "white"
              ? "#05050a"
              : variant === "ghost"
                ? undefined
                : "#ffffff",
        }}
      >
        {children}
      </span>
      <ArrowRight
        size={16}
        strokeWidth={2.2}
        className="relative z-[1] transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </>
  );

  if (external ?? isExternalHref(href)) {
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
