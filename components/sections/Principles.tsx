"use client";

import { useRef } from "react";
import { Container, Meta } from "@/components/ui/Container";
import { principles } from "@/data/company";
import { gsap, registerGsap, useGSAP } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/utils/use-reduced-motion";

export function Principles() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      registerGsap();
      if (reduced) return;

      gsap.utils.toArray<HTMLElement>(".principle-row").forEach((row) => {
        gsap.from(row.querySelector(".principle-line"), {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 82%" },
        });
        gsap.from(row.querySelector(".principle-num"), {
          y: 40,
          opacity: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 82%" },
        });
      });
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      data-nav-theme="dark"
      className="bg-graphite py-24 text-white lg:py-32"
    >
      <Container>
        <Meta>Principles</Meta>
        <ul className="mt-16">
          {principles.map((item) => (
            <li
              key={item.number}
              className="principle-row relative overflow-hidden border-t border-white/10 py-10 last:border-b lg:py-14"
            >
              <div className="principle-line absolute top-0 left-0 h-px w-full origin-left bg-violet" />
              <div className="grid items-end gap-6 lg:grid-cols-12">
                <span className="principle-num font-display col-span-3 -mb-4 text-[18vw] leading-none font-bold text-white/8 lg:text-[8.5rem]">
                  {item.number}
                </span>
                <div className="lg:col-span-4">
                  <h3 className="font-display text-3xl tracking-tight uppercase sm:text-4xl">
                    {item.title}
                  </h3>
                </div>
                <p className="max-w-md text-[16px] leading-relaxed text-white/50 lg:col-span-5 lg:justify-self-end">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
