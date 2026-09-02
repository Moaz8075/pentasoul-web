import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  tone?: "paper" | "ink" | "violet" | "fill";
};

export function ArrowLink({
  href,
  children,
  className,
  external,
  tone = "paper",
}: ArrowLinkProps) {
  const tones = {
    paper: "text-white hover:text-white",
    ink: "text-ink hover:text-ink",
    violet: "text-violet hover:text-white",
    fill: "bg-white px-6 py-4 text-ink hover:bg-warm",
  };

  const Comp = external ? "a" : Link;
  const extra = external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <Comp
      href={href}
      {...extra}
      className={cn(
        "group inline-flex items-center gap-3 text-meta transition-colors duration-300",
        tones[tone],
        className,
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-[width] duration-400 ease-[var(--ease-out)] group-hover:w-full" />
      </span>
      <ArrowUpRight
        className="size-3.5 transition-transform duration-400 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.6}
      />
    </Comp>
  );
}

export function ArrowButton({
  children,
  className,
  tone = "paper",
  type = "button",
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "ink" | "fill";
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "group inline-flex items-center gap-3 text-meta disabled:cursor-not-allowed disabled:opacity-50",
        tone === "fill" &&
          "bg-white px-6 py-3.5 text-ink transition-colors hover:bg-warm",
        tone === "paper" && "text-white",
        tone === "ink" && "text-ink",
        className,
      )}
    >
      <span className="relative">
        {children}
        {tone !== "fill" ? (
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-[width] duration-400 ease-[var(--ease-out)] group-hover:w-full" />
        ) : null}
      </span>
      <ArrowUpRight
        className="size-3.5 transition-transform duration-400 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.6}
      />
    </button>
  );
}
