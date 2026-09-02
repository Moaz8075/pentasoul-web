import { cn } from "@/lib/utils/cn";

type HeroGeometryProps = {
  className?: string;
};

export function HeroGeometry({ className }: HeroGeometryProps) {
  return (
    <svg
      viewBox="0 0 1400 900"
      className={cn("h-full w-full", className)}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="geo-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7657D6" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#503A91" stopOpacity="0.28" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="geo-dim" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.14" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* Perspective ground grid */}
      <g className="geo-grid" stroke="url(#geo-dim)" strokeWidth="1">
        {Array.from({ length: 14 }).map((_, i) => {
          const y = 420 + i * 32;
          const spread = 40 + i * 42;
          return (
            <path
              key={`h-${i}`}
              d={`M${700 - spread} ${y} L${700 + spread} ${y}`}
            />
          );
        })}
        {Array.from({ length: 11 }).map((_, i) => {
          const t = (i - 5) / 5;
          const x1 = 700 + t * 80;
          const x2 = 700 + t * 680;
          return (
            <path key={`v-${i}`} d={`M${x1} 420 L${x2} 880`} />
          );
        })}
      </g>

      {/* Nested isometric structure — logo language at architectural scale */}
      <g
        className="geo-structure"
        stroke="url(#geo-fade)"
        strokeLinejoin="miter"
        transform="translate(780, 90)"
      >
        <path
          className="geo-line"
          strokeWidth="1.4"
          d="M220 20 L520 190 L520 470 L220 640 L-80 470 L-80 190 Z"
        />
        <path className="geo-line" strokeWidth="1.2" d="M220 20 L520 190 L220 360 L-80 190 Z" />
        <path className="geo-line" strokeWidth="1.15" d="M220 360 L220 560" />
        <path className="geo-line" d="M10 210 L220 330 L430 210" />
        <path className="geo-line" d="M60 170 L220 270 L380 170" />
        <path className="geo-line" d="M110 130 L220 210 L330 130" />
        <path className="geo-line" d="M155 95 L220 145 L285 95" />
        <path className="geo-line" d="M-50 220 L-50 450 L180 575" />
        <path className="geo-line" d="M10 250 L10 430 L180 525" />
        <path className="geo-line" d="M70 280 L70 410 L180 475" />
        <path className="geo-line" d="M490 220 L490 450 L260 575" />
        <path className="geo-line" d="M430 250 L430 430 L260 525" />
        <path className="geo-line" d="M370 280 L370 410 L260 475" />
        <path
          className="geo-line"
          strokeWidth="0.9"
          d="M220 90 L430 210 L430 410 L220 530 L10 410 L10 210 Z"
        />
      </g>

      {/* Connecting paths — industry fragments as geometry, not icons */}
      <g className="geo-paths" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="1">
        <path className="geo-line" d="M80 180 L80 320 L210 320" />
        <path className="geo-line" d="M80 220 L150 220" />
        <path className="geo-line" d="M80 260 L170 260" />
        <path className="geo-line" d="M140 620 L280 620 L280 720" />
        <path className="geo-line" d="M140 660 H240" />
        <path className="geo-line" d="M140 700 H200" />
        <circle cx="80" cy="180" r="2.5" fill="#7657D6" stroke="none" />
        <circle cx="280" cy="720" r="2.5" fill="#7657D6" stroke="none" />
      </g>
    </svg>
  );
}

export function NestedFrame({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="pointer-events-none absolute -inset-3 border border-white/10" />
      <div className="pointer-events-none absolute -inset-6 border border-white/[0.05]" />
      {children}
    </div>
  );
}

export function IsoFrame({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const stroke = tone === "dark" ? "rgba(255,255,255,0.14)" : "rgba(8,8,11,0.12)";
  return (
    <svg viewBox="0 0 200 220" className={cn("overflow-visible", className)} aria-hidden>
      <g fill="none" stroke={stroke} strokeWidth="1">
        <path d="M100 8 L188 58 L188 148 L100 198 L12 148 L12 58 Z" />
        <path d="M100 8 L188 58 L100 108 L12 58 Z" />
        <path d="M100 108 L100 168" />
        <path d="M36 64 L100 100 L164 64" />
        <path d="M28 70 L28 140 L90 176" />
        <path d="M172 70 L172 140 L110 176" />
      </g>
    </svg>
  );
}
