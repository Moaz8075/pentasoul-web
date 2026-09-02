"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/utils/use-reduced-motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    registerGsap();

    if (reduced) {
      ScrollTrigger.normalizeScroll(false);
      return;
    }

    const lenis = new Lenis({
      autoRaf: false,
      anchors: true,
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, [reduced]);

  return <>{children}</>;
}
