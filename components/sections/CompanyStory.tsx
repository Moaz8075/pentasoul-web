"use client";

import { useRef } from "react";
import { Container, Meta } from "@/components/ui/Container";
import { company, process } from "@/data/company";
import { gsap, registerGsap, useGSAP } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/utils/use-reduced-motion";

export function CompanyStory() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      registerGsap();
      if (reduced) return;

      gsap.to(".process-stroke", {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".process-ring",
          start: "top 80%",
          end: "bottom 40%",
          scrub: 0.6,
        },
      });
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      data-nav-theme="light"
      className="relative overflow-hidden bg-warm py-28 text-ink lg:py-36"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Meta className="text-ink/45">The company</Meta>
            <h2 className="text-heading mt-8 max-w-[12ch]">{company.storyHeading}</h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/60">
              {company.storyBody}
            </p>
          </div>

          <div className="process-ring relative hidden lg:col-span-6 lg:block">
            <svg viewBox="0 0 420 420" className="mx-auto w-full max-w-[520px]" aria-hidden>
              <defs>
                <linearGradient id="loop-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#503A91" />
                  <stop offset="1" stopColor="#7657D6" />
                </linearGradient>
              </defs>
              <path
                d="M210 36 L360 120 L360 288 L210 372 L60 288 L60 120 Z"
                fill="none"
                stroke="rgba(8,8,11,0.08)"
                strokeWidth="1.2"
              />
              <path
                className="process-stroke"
                d="M210 36 L360 120 L360 288 L210 372 L60 288 L60 120 Z"
                fill="none"
                stroke="url(#loop-grad)"
                strokeWidth="1.6"
                strokeDasharray="980"
                strokeDashoffset="980"
              />
              <path
                d="M210 90 L318 150 L318 258 L210 318 L102 258 L102 150 Z"
                fill="none"
                stroke="rgba(8,8,11,0.1)"
              />
              <path d="M210 186 L210 258" stroke="rgba(80,58,145,0.5)" />
            </svg>

            <ul className="absolute inset-0">
              {process.map((step, i) => {
                const positions = [
                  "top-0 left-1/2 -translate-x-1/2",
                  "top-1/2 right-0 -translate-y-1/2 text-right",
                  "bottom-0 left-1/2 -translate-x-1/2 text-center",
                  "top-1/2 left-0 -translate-y-1/2",
                ];
                return (
                  <li key={step.id} className={`absolute ${positions[i]} max-w-[11rem]`}>
                    <p className="text-meta text-purple">{String(i + 1).padStart(2, "0")}</p>
                    <p className="font-display mt-1 text-2xl font-bold tracking-tight uppercase">
                      {step.label}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-ink/50">{step.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className="space-y-8 lg:hidden">
            {process.map((step, i) => (
              <li key={step.id}>
                <p className="text-meta text-purple">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-display mt-1 text-2xl font-bold tracking-tight uppercase">
                  {step.label}
                </p>
                <p className="mt-1 text-sm leading-snug text-ink/50">{step.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
