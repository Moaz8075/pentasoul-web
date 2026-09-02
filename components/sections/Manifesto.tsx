"use client";

import { useRef } from "react";
import { Container, Meta } from "@/components/ui/Container";
import { gsap, registerGsap, useGSAP } from "@/lib/animations/gsap";
import { company } from "@/data/company";
import { useReducedMotion } from "@/lib/utils/use-reduced-motion";

const primaryWords = company.manifestoPrimary.split(" ");

export function Manifesto() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      registerGsap();
      if (reduced) return;

      const words = root.current?.querySelectorAll(".manifesto-word") ?? [];
      gsap.set(words, { opacity: 0.12, y: 18 });
      gsap.to(words, {
        opacity: 1,
        y: 0,
        ease: "none",
        stagger: 0.08,
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          end: "center 40%",
          scrub: 0.8,
        },
      });

      gsap.from(".manifesto-second", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".manifesto-second",
          start: "top 85%",
        },
      });
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      id="approach"
      data-nav-theme="light"
      className="relative overflow-hidden bg-warm py-28 text-ink sm:py-36 lg:py-44"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-[70%] w-[46%] opacity-40">
        <div className="grid-perspective-light h-full w-full" />
      </div>
      <Container>
        <div className="flex items-start justify-between gap-8">
          <Meta className="text-ink/45">Our approach</Meta>
          <span className="font-display hidden text-[18vw] leading-none font-bold text-ink/[0.05] sm:block lg:text-[9rem]">
            01
          </span>
        </div>

        <blockquote className="mt-16 max-w-[18ch] sm:mt-10 lg:max-w-none">
          <p className="text-statement">
            {primaryWords.map((word) => (
              <span key={word} className="manifesto-word mr-[0.22em] inline-block">
                {word}
              </span>
            ))}
          </p>
        </blockquote>

        <p className="manifesto-second font-display mt-20 max-w-xl text-2xl leading-snug tracking-tight text-ink/70 sm:text-4xl">
          {company.manifestoSecondary}
        </p>
      </Container>
    </section>
  );
}
