import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";

export function Philosophy() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-mountains.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05050a]/80 via-[#05050a]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-[#05050a]/40" />
      </div>

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <h2 className="max-w-[14ch] text-[clamp(2.4rem,4.4vw,4.2rem)] leading-[1.08] font-bold tracking-[-0.045em]">
              {company.philosophyHeading}
            </h2>
            <div className="mt-8">
              <PillButton href="/contact">Let&apos;s Build It</PillButton>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="hidden lg:block">
            <p className="text-[12px] font-semibold tracking-[0.36em] text-white/55 uppercase [writing-mode:vertical-rl]">
              {company.philosophyWords.join(" ")}
              <span className="mt-4 inline-block h-20 w-px bg-white/25" />
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
