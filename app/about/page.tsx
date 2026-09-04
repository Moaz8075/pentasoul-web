import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { PillButton } from "@/components/ui/PillButton";
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
            <span className="text-purple">brighter tomorrow.</span>
          </>
        }
        body={company.aboutBody}
      />

      <section className="bg-white pb-20">
        <Container>
          <div className="relative aspect-[16/8] overflow-hidden rounded-[28px]">
            <Image
              src="/images/about-interior.png"
              alt="A quiet studio interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <p className="absolute bottom-8 left-8 text-[28px] font-semibold text-white sm:text-[40px]">
              Five Minds.
              <br />
              One Vision.
            </p>
          </div>

          <div className="mt-20 grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-[12px] tracking-[0.22em] text-muted uppercase">Mission</p>
              <p className="mt-4 text-3xl font-semibold tracking-tight">{company.mission}</p>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.22em] text-muted uppercase">Vision</p>
              <p className="mt-4 text-3xl font-semibold tracking-tight">{company.vision}</p>
            </div>
          </div>

          <ol className="mt-20 divide-y divide-ink/10 border-y border-ink/10">
            {principles.map((principle) => (
              <li
                key={principle.number}
                className="grid gap-4 py-8 md:grid-cols-[80px_1fr_1.2fr] md:items-baseline"
              >
                <p className="text-sm tracking-[0.18em] text-purple">{principle.number}</p>
                <h2 className="text-2xl font-semibold tracking-tight">{principle.title}</h2>
                <p className="text-muted">{principle.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16">
            <PillButton href="/contact">Let&apos;s Talk</PillButton>
          </div>
        </Container>
      </section>
    </>
  );
}
