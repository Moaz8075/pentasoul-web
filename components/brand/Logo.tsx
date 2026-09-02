import { cn } from "@/lib/utils/cn";

type LogoProps = {
  className?: string;
  variant?: "gradient" | "paper" | "ink" | "muted";
  title?: string;
};

const strokes = {
  gradient: "url(#ps-mark-grad)",
  paper: "#ffffff",
  ink: "#08080B",
  muted: "currentColor",
};

export function Logo({
  className,
  variant = "gradient",
  title = "PentaSoul",
}: LogoProps) {
  const stroke = strokes[variant];

  return (
    <svg
      viewBox="0 0 120 138"
      className={cn("overflow-visible", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id="ps-mark-grad" x1="60" y1="132" x2="60" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3D2A73" />
          <stop offset="0.45" stopColor="#503A91" />
          <stop offset="1" stopColor="#9B7CFF" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke={stroke}
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {/* Outer isometric cube */}
        <path
          strokeWidth="2.2"
          d="M60 8 L112 38 L112 94 L60 124 L8 94 L8 38 Z"
        />
        {/* Top face diamond */}
        <path strokeWidth="1.8" d="M60 8 L112 38 L60 68 L8 38 Z" />
        {/* Center vertical — doorway split */}
        <path strokeWidth="1.8" d="M60 68 L60 108" />

        {/* Nested chevrons on top face */}
        <path strokeWidth="1.35" d="M22 42 L60 64 L98 42" />
        <path strokeWidth="1.25" d="M32 36 L60 52 L88 36" />
        <path strokeWidth="1.15" d="M40 30 L60 42 L80 30" />
        <path strokeWidth="1.05" d="M48 24 L60 31 L72 24" />

        {/* Left nested L-forms */}
        <path strokeWidth="1.3" d="M18 44 L18 90 L50 108" />
        <path strokeWidth="1.2" d="M28 50 L28 86 L50 99" />
        <path strokeWidth="1.1" d="M38 56 L38 82 L50 89" />

        {/* Right nested L-forms */}
        <path strokeWidth="1.3" d="M102 44 L102 90 L70 108" />
        <path strokeWidth="1.2" d="M92 50 L92 86 L70 99" />
        <path strokeWidth="1.1" d="M82 56 L82 82 L70 89" />

        {/* Inner hex echoing depth */}
        <path
          strokeWidth="1"
          opacity="0.85"
          d="M60 22 L94 42 L94 82 L60 102 L26 82 L26 42 Z"
        />
      </g>
    </svg>
  );
}

export function Wordmark({
  className,
  color = "paper",
}: {
  className?: string;
  color?: "paper" | "ink";
}) {
  return (
    <span
      className={cn(
        "font-display text-[0.95rem] font-bold uppercase tracking-[0.28em]",
        color === "ink" ? "text-ink" : "text-white",
        className,
      )}
    >
      PentaSoul
    </span>
  );
}
