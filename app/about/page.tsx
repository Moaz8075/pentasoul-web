import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/motion/Reveal";
import { company, principles } from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description: company.aboutBody,
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About us"
        title={
          <>
            A smarter tomorrow is a{" "}
            <span className="text-gradient">brighter tomorrow.</span>
          </>
        }
        body={company.aboutBody}
      />

      <section className="pb-16">
        <Container>
          <Reveal>
            <div className="relative aspect-[16/8] overflow-hidden rounded-[28px]">
              <Image
                src="/images/about-interior.png"
                alt="A quiet studio interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050a]/70 to-transparent" />
              <p className="absolute bottom-8 left-8 text-[28px] font-bold text-white sm:text-[40px]">
                Five Minds.
                <br />
                One Vision.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-[12px] font-semibold tracking-[0.28em] text-purple uppercase">
                Mission
              </p>
              <p className="mt-3 text-[28px] leading-[1.2] font-bold tracking-tight text-white">
                {company.mission}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-[12px] font-semibold tracking-[0.28em] text-purple uppercase">
                Vision
              </p>
              <p className="mt-3 text-[28px] leading-[1.2] font-bold tracking-tight text-white">
                {company.vision}
              </p>
            </Reveal>
          </div>

          <ol className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 0.04}>
                <li className="grid gap-3 py-6 md:grid-cols-[80px_1fr_1.2fr] md:items-baseline">
                  <p className="text-sm font-semibold tracking-[0.18em] text-purple">
                    {principle.number}
                  </p>
                  <h2 className="text-[22px] font-bold tracking-tight text-white">
                    {principle.title}
                  </h2>
                  <p className="text-white/60">{principle.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-10">
            <PillButton href="/contact">Let&apos;s Talk</PillButton>
          </div>
        </Container>
      </section>
    </>
  );
}
