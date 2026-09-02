import { cn } from "@/lib/utils/cn";

export function Container({
  children,
  className,
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        wide ? "max-w-[1680px]" : "max-w-[1440px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Meta({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-meta text-muted", className)}>{children}</p>
  );
}

export function SectionIndex({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] tracking-[0.22em] text-muted uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
