import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-medium tracking-[0.22em] text-muted uppercase">
              {company.aboutEyebrow}
            </p>
            <h2 className="mt-4 max-w-[12ch] text-[36px] leading-[1.15] font-bold tracking-[-0.04em] text-ink sm:text-[48px]">
              {company.aboutHeading}
            </h2>
            <p className="mt-6 max-w-[32rem] text-[16px] leading-[1.7] text-muted">
              {company.aboutBody}
            </p>
            <div className="mt-8">
              <PillButton href="/about">Our Story</PillButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] lg:aspect-[16/11]">
              <Image
                src="/images/about-interior.png"
                alt="A quiet studio interior"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
              <p className="absolute bottom-8 left-8 text-[28px] leading-[1.15] font-semibold tracking-[-0.03em] text-white sm:text-[36px]">
                Five Minds.
                <br />
                One Vision.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
