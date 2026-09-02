import { cn } from "@/lib/utils/cn";

export function DsmsComposition({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <p className="text-meta mb-3 text-white/35">Visual composition — not a product screenshot</p>
      <div className="relative overflow-hidden border border-white/10 bg-[#0c0c12] shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
        <div className="flex h-10 items-center gap-2 border-b border-white/8 bg-[#14141c] px-4">
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="ml-4 h-4 w-40 bg-white/6" />
        </div>
        <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[200px_1fr]">
          <aside className="hidden space-y-3 border-r border-white/8 bg-[#101018] p-5 sm:block">
            <div className="mb-6 h-3 w-16 bg-violet/70" />
            {["Dashboard", "Students", "Attendance", "Fees", "Staff"].map((item, i) => (
              <div key={item} className="flex items-center gap-3">
                <span className={cn("h-px w-4", i === 0 ? "bg-violet" : "bg-white/15")} />
                <span className={cn("text-[11px] tracking-wide", i === 0 ? "text-white" : "text-white/40")}>
                  {item}
                </span>
              </div>
            ))}
          </aside>
          <div className="space-y-4 p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                ["Enrollment", "—"],
                ["Attendance", "—"],
                ["Collections", "—"],
                ["Staff", "—"],
              ].map(([label]) => (
                <div key={label} className="border border-white/8 bg-white/[0.03] p-3">
                  <p className="text-meta text-white/35">{label}</p>
                  <div className="mt-3 h-5 w-16 bg-white/12" />
                  <div className="mt-2 h-px w-10 bg-violet/50" />
                </div>
              ))}
            </div>
            <div className="grid gap-3 lg:grid-cols-5">
              <div className="border border-white/8 bg-white/[0.03] p-4 lg:col-span-3">
                <p className="text-meta text-white/35">Attendance rhythm</p>
                <svg viewBox="0 0 320 110" className="mt-4 h-24 w-full" aria-hidden>
                  <path
                    d="M0 80 C40 78 50 40 80 48 C110 56 120 20 160 28 C200 36 210 70 250 52 C280 40 300 60 320 44"
                    fill="none"
                    stroke="#7657D6"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 110 L0 80 C40 78 50 40 80 48 C110 56 120 20 160 28 C200 36 210 70 250 52 C280 40 300 60 320 44 L320 110 Z"
                    fill="url(#dsms-fill)"
                    opacity="0.35"
                  />
                  <defs>
                    <linearGradient id="dsms-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop stopColor="#7657D6" />
                      <stop offset="1" stopColor="#7657D6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="space-y-2 border border-white/8 bg-white/[0.03] p-4 lg:col-span-2">
                <p className="text-meta text-white/35">Today</p>
                {["Register", "Fees desk", "Staff leave"].map((row) => (
                  <div key={row} className="flex items-center justify-between border-b border-white/6 py-2 last:border-0">
                    <span className="text-xs text-white/55">{row}</span>
                    <span className="h-1.5 w-8 bg-white/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LegalEaseComposition({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <p className="text-meta mb-3 text-white/35">Visual composition — not a product screenshot</p>
      <div className="relative h-[420px] sm:h-[480px]">
        <div className="absolute top-10 left-0 w-[72%] border border-white/10 bg-[#12121a] p-5 shadow-2xl">
          <p className="text-meta text-violet">Matter</p>
          <div className="mt-4 h-4 w-2/3 bg-white/12" />
          <div className="mt-3 h-3 w-1/2 bg-white/8" />
          <div className="mt-8 space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-px w-full bg-white/8" />
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[58%] rotate-[-4deg] border border-white/12 bg-[#181822] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-meta text-white/40">Hearings</p>
            <span className="size-1.5 bg-violet" />
          </div>
          {["Cause list", "Filing window", "Order"].map((item) => (
            <div key={item} className="flex items-center justify-between border-b border-white/8 py-3">
              <span className="text-sm text-white/70">{item}</span>
              <span className="text-meta text-white/30">—</span>
            </div>
          ))}
        </div>
        <div className="absolute right-[8%] bottom-0 w-[46%] border border-white/10 bg-[#0e0e14] p-4">
          <p className="text-meta text-white/35">Documents</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] border border-white/10 bg-white/[0.04]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function RoznamchaComposition({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex justify-center lg:justify-end", className)}>
      <p className="text-meta absolute top-0 left-0 text-white/35">
        Visual composition — not a product screenshot
      </p>
      <div className="relative mt-10 w-[280px] rounded-[2.4rem] border border-white/15 bg-[#09090d] p-3 shadow-[0_50px_100px_rgba(0,0,0,0.55)] sm:w-[300px]">
        <div className="overflow-hidden rounded-[1.9rem] bg-[#14141c]">
          <div className="px-5 pt-8 pb-3">
            <p className="text-meta text-white/35">Roznamcha</p>
            <p className="font-display mt-3 text-3xl tracking-tight">Ledger</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/8">
            <div className="bg-[#14141c] p-4">
              <p className="text-meta text-white/35">Cash</p>
              <div className="mt-2 h-5 w-16 bg-white/15" />
            </div>
            <div className="bg-[#14141c] p-4">
              <p className="text-meta text-white/35">Credit</p>
              <div className="mt-2 h-5 w-16 bg-violet/40" />
            </div>
          </div>
          <div className="space-y-0 px-2 py-2">
            {["Customer A", "Supplier", "Expense", "Receive", "Pay"].map((row, i) => (
              <div
                key={row}
                className="flex items-center justify-between px-3 py-3.5"
              >
                <div>
                  <p className="text-sm text-white/80">{row}</p>
                  <p className="text-meta mt-1 text-white/25">Entry</p>
                </div>
                <span className={cn("h-2 w-10", i % 2 ? "bg-white/12" : "bg-violet/50")} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FutureSilhouette({
  variant = "pos",
  className,
}: {
  variant?: "pos" | "commerce";
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <p className="text-meta mb-4 text-white/30">Emerging form — conceptual</p>
      <div className="relative h-[340px] border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,58,145,0.22),transparent_60%)]" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        {variant === "pos" ? (
          <svg viewBox="0 0 420 300" className="absolute inset-0 h-full w-full opacity-70" aria-hidden>
            <g fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1">
              <rect x="70" y="40" width="280" height="170" />
              <rect x="90" y="58" width="180" height="110" />
              <rect x="280" y="58" width="50" height="18" />
              <rect x="280" y="86" width="50" height="18" />
              <rect x="280" y="114" width="50" height="18" />
              <path d="M120 230 L180 230 L190 250 L300 250" />
              <rect x="150" y="250" width="120" height="18" />
            </g>
          </svg>
        ) : (
          <svg viewBox="0 0 420 300" className="absolute inset-0 h-full w-full opacity-70" aria-hidden>
            <g fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1">
              <circle cx="210" cy="140" r="90" />
              <circle cx="210" cy="140" r="55" />
              <path d="M210 50 L210 230" />
              <path d="M120 140 H300" />
              <path d="M150 80 C190 120 230 120 270 80" />
              <rect x="250" y="160" width="90" height="70" />
              <path d="M70 220 H170" />
            </g>
          </svg>
        )}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_30%,black_60%,transparent)] opacity-40 blur-md" />
      </div>
    </div>
  );
}
