"use client";

import { Mouse } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { HeroCrystal } from "@/components/sections/HeroCrystal";
import { FadeUp } from "@/components/motion/Reveal";
import { LineReveal } from "@/components/motion/LineReveal";
import { company } from "@/data/company";
import { allProducts } from "@/data/products";

export function Hero() {
  return (
    <section className="relative overflow-hidden lg:min-h-[calc(100dvh-76px)]">
      <Container className="relative flex min-h-[inherit] flex-col justify-center py-10 lg:py-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <FadeUp>
              <p className="text-[12px] font-semibold tracking-[0.28em] text-lavender uppercase">
                {company.heroEyebrow}
              </p>
            </FadeUp>
            <LineReveal
              delay={0.08}
              className="mt-5 text-[clamp(2.7rem,5.4vw,4.75rem)] leading-[1.02] font-semibold tracking-[-0.05em] text-white"
              lines={[
                { content: "Turning bold ideas" },
                {
                  content: (
                    <>
                      into <span className="text-gradient">{company.heroAccent.toLowerCase()}</span>.
                    </>
                  ),
                },
              ]}
            />
            <FadeUp delay={0.32}>
              <p className="mt-6 max-w-[34rem] text-[17px] leading-[1.7] text-white/60">
                {company.heroBody}
              </p>
            </FadeUp>
            <FadeUp delay={0.44}>
              <div className="mt-8">
                <PillButton href="/contact">Start a Conversation</PillButton>
              </div>
            </FadeUp>
            <FadeUp delay={0.56}>
              <p className="mt-10 flex items-center gap-3 text-[13px] font-medium text-white/35">
                <Mouse size={16} strokeWidth={1.6} className="animate-scroll-hint" />
                Scroll
              </p>
            </FadeUp>
          </div>

          <div className="relative flex items-center justify-center">
            <HeroCrystal />
            <p className="absolute right-0 bottom-6 hidden text-[11px] font-medium tracking-[0.28em] text-white/30 uppercase [writing-mode:vertical-rl] lg:block">
              {company.wallLine}
            </p>
          </div>
        </div>

        <FadeUp delay={0.5}>
          <ul className="mt-12 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-4">
            {allProducts.map((product) => (
              <li key={product.id} className="min-w-0">
                <p className="text-[15px] font-semibold tracking-tight text-white">{product.name}</p>
                <p className="mt-0.5 text-[12px] text-white/40">{product.statusLabel}</p>
              </li>
            ))}
          </ul>
        </FadeUp>
      </Container>
    </section>
  );
}
