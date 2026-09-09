"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { FadeUp } from "@/components/motion/Reveal";
import { upcomingProducts } from "@/data/products";

export function UnderDevelopment() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="pulse-glow absolute top-[-10%] right-[8%] size-[420px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-8%] size-[380px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_70%)] blur-3xl" />
      </div>

      <Container className="relative grid min-h-[calc(100dvh-76px)] items-center gap-16 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-10">
        <div>
          <FadeUp>
            <p className="inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-4 py-1.5 text-[12px] font-semibold tracking-[0.22em] text-lavender uppercase">
              <Sparkles size={14} />
              Coming soon
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="mt-6 max-w-[14ch] text-[clamp(2.8rem,5.4vw,5rem)] leading-[1.02] font-bold tracking-[-0.05em] text-white">
              This website is{" "}
              <span className="text-gradient">under development.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-[34rem] text-[18px] leading-[1.7] text-white/60">
              We are still building this product. The experience is taking shape —
              and we will open it when it is ready to use.
            </p>
          </FadeUp>

          <FadeUp delay={0.32}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {upcomingProducts.map((product) => (
                <li
                  key={product.id}
                  className="glass glow-card flex items-center gap-4 rounded-2xl px-4 py-4"
                >
                  <span className="relative size-14 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block text-[16px] font-semibold text-white">
                      {product.name}
                    </span>
                    <span className="mt-0.5 block text-[13px] text-white/45">
                      {product.teaser}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.44}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PillButton href="/contact">Let&apos;s Talk</PillButton>
              <PillButton href="/" variant="outline">
                Back home
              </PillButton>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.16} className="relative mx-auto w-full max-w-[460px]">
          <div className="relative aspect-square">
            <motion.div
              className="absolute inset-[6%] rounded-full border border-white/10"
              animate={reduced ? undefined : { rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[18%] rounded-full border border-dashed border-purple/40"
              animate={reduced ? undefined : { rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-[32%] grid place-items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="text-center">
                <Sparkles className="mx-auto text-lavender" size={28} />
                <p className="mt-3 text-[12px] font-semibold tracking-[0.28em] text-lavender uppercase">
                  In progress
                </p>
              </div>
            </div>
            <div className="absolute right-[8%] bottom-[22%] h-1.5 w-28 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]"
                initial={{ width: "20%" }}
                animate={reduced ? { width: "72%" } : { width: ["22%", "78%", "42%", "72%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
