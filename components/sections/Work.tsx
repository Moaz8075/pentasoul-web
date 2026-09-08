"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Bike,
  GraduationCap,
  Scale,
  Store,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/motion/Reveal";
import { featuredWork } from "@/data/products";
import { industries } from "@/data/industries";
import { company } from "@/data/company";

const AUTOPLAY_MS = 2000;

const icons = {
  dsms: GraduationCap,
  pentapos: Store,
  pentago: Bike,
  legalease: Scale,
};

export function Work() {
  const reduced = useReducedMotion();
  const start = Math.max(
    0,
    featuredWork.findIndex((product) => product.id === "legalease"),
  );
  const [index, setIndex] = useState(start);
  const [paused, setPaused] = useState(false);
  const total = featuredWork.length;
  const product = featuredWork[index] ?? featuredWork[0];
  const Icon = icons[product.id as keyof typeof icons] ?? Scale;

  useEffect(() => {
    if (reduced || paused || total < 2) return;

    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [index, paused, reduced, total]);

  return (
    <section id="work" className="py-16 lg:py-24">
      <Container>
        <div
          className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div>
            <Reveal>
              <p className="text-[12px] font-semibold tracking-[0.28em] text-white/70 uppercase">
                {company.workEyebrow}
              </p>
              <h2 className="mt-4 max-w-[14ch] text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.08] font-bold tracking-[-0.045em] text-white">
                {company.workHeading}
              </h2>
            </Reveal>

            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-purple text-white shadow-[0_0_28px_rgba(139,92,246,0.45)]">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-[28px] font-bold tracking-[-0.03em] text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-[16px] text-white/55">{product.teaser}</p>
                <div className="mt-6">
                  <PillButton
                    href={product.href ?? "/products"}
                    variant="white"
                    external={Boolean(product.href)}
                  >
                    View Case Study
                  </PillButton>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIndex((value) => (value - 1 + total) % total)}
                className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white hover:text-[#05050a]"
                aria-label="Previous project"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => setIndex((value) => (value + 1) % total)}
                className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white hover:text-[#05050a]"
                aria-label="Next project"
              >
                <ArrowRight size={16} />
              </button>
              <p className="ml-2 text-[13px] font-medium tracking-[0.08em] text-white/40">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
            </div>
            <div className="mt-5 h-px w-40 overflow-hidden bg-white/10">
              <motion.div
                key={`${product.id}-${paused ? "paused" : "play"}`}
                className="h-full bg-purple"
                initial={{ width: 0 }}
                animate={{ width: paused || reduced ? "0%" : "100%" }}
                transition={
                  paused || reduced
                    ? { duration: 0 }
                    : { duration: AUTOPLAY_MS / 1000, ease: "linear" }
                }
              />
            </div>
          </div>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-[28px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[16/11]"
                >
                  <Image
                    src={product.image}
                    alt={`${product.name} product mockup`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry, index) => {
            const IndustryIcon = industry.icon;
            return (
              <Reveal key={industry.label} delay={index * 0.04}>
                <div className="flex items-center gap-3 text-white/45">
                  <IndustryIcon size={18} strokeWidth={1.7} />
                  <span className="text-[13px] font-medium">{industry.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
