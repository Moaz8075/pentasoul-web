import { cn } from "@/lib/utils/cn";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 120 138"
      className={cn("overflow-visible", className)}
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path
          strokeWidth="2.2"
          d="M60 8 L112 38 L112 94 L60 124 L8 94 L8 38 Z"
        />
        <path strokeWidth="1.8" d="M60 8 L112 38 L60 68 L8 38 Z" />
        <path strokeWidth="1.8" d="M60 68 L60 108" />
        <path strokeWidth="1.35" d="M22 42 L60 64 L98 42" />
        <path strokeWidth="1.25" d="M32 36 L60 52 L88 36" />
        <path strokeWidth="1.15" d="M40 30 L60 42 L80 30" />
        <path strokeWidth="1.05" d="M48 24 L60 31 L72 24" />
        <path strokeWidth="1.3" d="M18 44 L18 90 L50 108" />
        <path strokeWidth="1.2" d="M28 50 L28 86 L50 99" />
        <path strokeWidth="1.1" d="M38 56 L38 82 L50 89" />
        <path strokeWidth="1.3" d="M102 44 L102 90 L70 108" />
        <path strokeWidth="1.2" d="M92 50 L92 86 L70 99" />
        <path strokeWidth="1.1" d="M82 56 L82 82 L70 89" />
        <path
          strokeWidth="1"
          opacity="0.85"
          d="M60 22 L94 42 L94 82 L60 102 L26 82 L26 42 Z"
        />
      </g>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 text-ink", className)}>
      <LogoMark className="h-[22px] w-[19px] text-purple" />
      <span className="text-[17px] font-semibold tracking-[-0.03em]">
        PentaSoul
      </span>
    </span>
  );
}
