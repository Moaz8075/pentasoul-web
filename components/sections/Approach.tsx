"use client";

import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/motion/Reveal";
import { approachSteps } from "@/data/approach";
import { company } from "@/data/company";
import { cn } from "@/lib/utils/cn";

export function Approach() {
  return (
    <section id="approach" className="py-16 lg:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-semibold tracking-[0.28em] text-purple uppercase">
              {company.approachEyebrow}
            </p>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.08] font-bold tracking-[-0.045em] text-white">
              {company.approachHeading}
            </h2>
            <p className="mt-5 max-w-[28rem] text-[16px] leading-[1.7] text-white/60">
              {company.approachBody}
            </p>
            <div className="mt-8">
              <PillButton href="/about" variant="outline">
                Learn More
              </PillButton>
            </div>
          </Reveal>

          <div className="grid gap-3">
            {approachSteps.map((step, index) => {
              const Icon = step.icon;
              const active = index === approachSteps.length - 1;
              return (
                <Reveal key={step.title} delay={index * 0.08}>
                  <article
                    className={cn(
                      "glow-card glass group flex items-start gap-4 rounded-2xl p-5 transition-all duration-500",
                      active && "is-active",
                    )}
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-purple/15 text-purple shadow-[0_0_24px_rgba(139,92,246,0.28)]">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-[18px] font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 text-[15px] text-white/55">{step.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
