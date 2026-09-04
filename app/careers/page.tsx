import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { PillButton } from "@/components/ui/PillButton";
import { Philosophy } from "@/components/sections/Philosophy";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build products that people actually use.",
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
            <span className="text-purple">people actually use.</span>
          </>
        }
        body="PentaSoul is a product company. The work is to understand a real problem, then stay with it long enough to make something useful."
      />

      <section className="bg-white pb-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {disciplines.map((item) => (
              <p
                key={item}
                className="rounded-2xl border border-ink/10 px-5 py-6 text-lg font-semibold"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="mt-16 rounded-[28px] bg-[#f6f6f8] px-8 py-12">
            <p className="text-[12px] tracking-[0.22em] text-muted uppercase">
              Open roles
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              No open roles right now.
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              If the work sounds like yours, introduce yourself. We keep conversations open even when there is nothing listed.
            </p>
            <div className="mt-8">
              <PillButton href="/contact">Introduce Yourself</PillButton>
            </div>
          </div>
        </Container>
      </section>

      <Philosophy />
    </>
  );
}
