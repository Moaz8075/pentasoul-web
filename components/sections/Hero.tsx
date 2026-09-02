"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroGeometry } from "@/components/geometry/HeroGeometry";
import { easeOut, gsap, registerGsap, useGSAP } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/utils/use-reduced-motion";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      registerGsap();
      const ctx = gsap.context(() => {
        const lines = root.current?.querySelectorAll(".geo-line") ?? [];
        lines.forEach((line) => {
          const el = line as SVGGeometryElement;
          const length = "getTotalLength" in el ? el.getTotalLength() : 400;
          gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
        });

        if (reduced) {
          gsap.set([".hero-meta", ".hero-line", ".hero-copy", ".hero-cta", ".geo-line"], {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            strokeDashoffset: 0,
          });
          return;
        }

        const tl = gsap.timeline({ defaults: { ease: easeOut } });
        tl.to(".geo-line", { strokeDashoffset: 0, duration: 1.05, stagger: 0.018 }, 0)
          .from(".geo-grid", { opacity: 0, duration: 0.9 }, 0.12)
          .from(".hero-meta", { opacity: 0, y: 10, duration: 0.4 }, 0.22)
          .from(".hero-line", {
            clipPath: "inset(100% 0% 0% 0%)",
            y: 24,
            duration: 0.62,
            stagger: 0.1,
          }, 0.32)
          .from(".hero-copy", { opacity: 0, y: 16, duration: 0.45 }, 0.72)
          .from(".hero-cta", { opacity: 0, y: 12, duration: 0.4, stagger: 0.08 }, 0.84);
      }, root);

      return () => ctx.revert();
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      data-nav-theme="dark"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pt-28 pb-10 sm:pb-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[58%] overflow-hidden opacity-40">
          <div className="geo-grid grid-perspective h-[220%] w-full origin-top" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/20 to-ink" />
        <div className="absolute -right-[8%] -bottom-[6%] h-[92%] w-[78%] opacity-90">
          <HeroGeometry />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(80,58,145,0.18),transparent_42%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <div className="hero-meta mb-8 flex flex-col gap-1 text-muted sm:mb-10">
          <p className="text-meta">PentaSoul</p>
          <p className="text-meta">Independent technology company</p>
        </div>

        <h1 className="text-display max-w-[18ch]">
          <span className="hero-line block overflow-hidden">Building</span>
          <span className="hero-line block overflow-hidden text-white/88">What</span>
          <span className="hero-line block overflow-hidden">
            Comes{" "}
            <span className="text-white/55">Next.</span>
          </span>
        </h1>

        <div className="mt-10 flex max-w-6xl flex-col gap-8 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <p className="hero-copy max-w-md text-[17px] leading-relaxed text-white/60 sm:text-[18px]">
            PentaSoul creates technology products designed around meaningful
            real-world problems.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <Link
              href="#approach"
              className="hero-cta group inline-flex items-center gap-3 bg-white px-6 py-3.5 text-ink"
            >
              <span className="text-meta text-ink">Explore PentaSoul</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href="/products" className="hero-cta text-meta text-white/70 hover:text-white">
              Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
