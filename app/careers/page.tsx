import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/motion/Reveal";
import { Philosophy } from "@/components/sections/Philosophy";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build products that people actually use.",
  alternates: { canonical: "/careers/" },
};

const disciplines = [
  "Engineering",
  "Product",
  "Design",
  "Business",
  "Operations",
];

export default function CareersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Careers"
        title={
          <>
            Build products that{" "}
            <span className="text-gradient">people actually use.</span>
          </>
        }
        body="PentaSoul is a product company. The work is to understand a real problem, then stay with it long enough to make something useful."
      />

      <section className="pb-12">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {disciplines.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <p className="glass glow-card rounded-2xl px-5 py-5 text-lg font-bold text-white transition-transform duration-300 hover:-translate-y-1">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="glass mt-10 rounded-[28px] px-8 py-10">
              <p className="text-[12px] font-semibold tracking-[0.28em] text-purple uppercase">
                Open roles
              </p>
              <h2 className="mt-3 text-[32px] font-bold tracking-tight text-white">
                No open roles right now.
              </h2>
              <p className="mt-3 max-w-xl text-[17px] text-white/60">
                If the work sounds like yours, introduce yourself. We keep conversations open even when there is nothing listed.
              </p>
              <div className="mt-6">
                <PillButton href="/contact">Introduce Yourself</PillButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Philosophy />
    </>
  );
}
