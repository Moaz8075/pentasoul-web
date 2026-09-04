import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/philosophy-mountains.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/92 to-ink/40" />
      </div>

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr_auto]">
          <Reveal>
            <h2 className="max-w-[12ch] text-[36px] leading-[1.15] font-bold tracking-[-0.04em] sm:text-[48px]">
              People. Products.
              <br />
              <span className="text-purple">A Better Tomorrow.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-[28rem] text-[16px] leading-[1.75] text-white/70">
              {company.philosophyBody}
            </p>
            <div className="mt-8">
              <PillButton href="/careers" variant="light">
                Join Our Journey
              </PillButton>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="hidden lg:block">
            <p className="pt-2 text-[12px] font-medium tracking-[0.38em] text-white/45 uppercase [writing-mode:vertical-rl]">
              {company.philosophyWords.join(" / ")}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
