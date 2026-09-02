"use client";

import { useState } from "react";
import { Container, Meta } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { domains } from "@/data/products";
import { cn } from "@/lib/utils/cn";

const fragments: Record<string, React.ReactNode> = {
  dsms: (
    <div className="h-full border border-ink/10 bg-white p-5">
      <p className="text-meta text-ink/40">School day</p>
      <div className="mt-6 space-y-3">
        <div className="h-2 w-3/4 bg-ink/10" />
        <div className="h-2 w-1/2 bg-ink/10" />
        <div className="mt-8 grid grid-cols-3 gap-2">
          <div className="h-16 bg-[#503A91]/15" />
          <div className="h-16 bg-ink/5" />
          <div className="h-16 bg-ink/5" />
        </div>
      </div>
    </div>
  ),
  legalease: (
    <div className="h-full border border-ink/10 bg-[#111116] p-5 text-white">
      <p className="text-meta text-white/40">Cause list</p>
      <div className="mt-8 space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex justify-between border-b border-white/10 pb-3">
            <span className="h-2 w-24 bg-white/20" />
            <span className="h-2 w-8 bg-violet/50" />
          </div>
        ))}
      </div>
    </div>
  ),
  roznamcha: (
    <div className="flex h-full items-end border border-ink/10 bg-warm p-5">
      <div className="w-full">
        <p className="text-meta text-ink/40">Daily book</p>
        <div className="mt-4 flex items-end gap-2">
          {[40, 70, 55, 90, 60].map((h) => (
            <div key={h} className="flex-1 bg-ink/80" style={{ height: h }} />
          ))}
        </div>
      </div>
    </div>
  ),
  pos: (
    <div className="h-full border border-ink/10 bg-ink p-5">
      <div className="h-24 border border-white/10" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-8 bg-white/8" />
        ))}
      </div>
    </div>
  ),
  commerce: (
    <div className="relative h-full overflow-hidden border border-ink/10 bg-[#0c0c12]">
      <div className="absolute inset-6 rounded-full border border-white/10" />
      <div className="absolute inset-16 rounded-full border border-violet/40" />
    </div>
  ),
};

export function Domains() {
  const [active, setActive] = useState<(typeof domains)[number]["id"]>("education");
  const current = domains.find((d) => d.id === active) ?? domains[0];

  return (
    <section
      data-nav-theme="light"
      className="relative overflow-hidden bg-warm pb-28 text-ink"
    >
      <Container>
        <Reveal>
          <Meta className="text-ink/45">What we build</Meta>
          <h2 className="text-heading mt-8 max-w-[14ch]">
            Technology across the places that matter.
          </h2>
        </Reveal>

        <div className="relative mt-20 grid items-end gap-10 lg:grid-cols-12">
          <ul className="lg:col-span-7">
            {domains.map((domain) => {
              const on = domain.id === active;
              return (
                <li key={domain.id} className="border-t border-ink/10 last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(domain.id)}
                    onFocus={() => setActive(domain.id)}
                    className="flex w-full items-baseline justify-between py-5 text-left sm:py-7"
                  >
                    <span
                      className={cn(
                        "font-display text-[12vw] leading-[0.85] font-bold tracking-tight uppercase transition-colors duration-400 sm:text-[7vw] lg:text-[5.4rem]",
                        on ? "text-ink" : "text-ink/25",
                      )}
                    >
                      {domain.label}
                    </span>
                    <span className={cn("text-meta", on ? "text-purple" : "text-ink/30")}>
                      {domain.index}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="pointer-events-none relative hidden lg:col-span-5 lg:block">
            <div className="absolute -top-28 -right-8 h-[420px] w-[120%] max-w-none">
              <div className="absolute -inset-4 border border-ink/8" />
              {fragments[current.fragment]}
              <p className="mt-4 max-w-[16ch] text-sm leading-relaxed text-ink/50">
                {current.note}
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-ink/55 lg:hidden">
            {current.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
