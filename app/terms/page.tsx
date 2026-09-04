import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Terms & Conditions"
        body="This is a placeholder. Replace this page with the company’s terms before launch."
      />
      <section className="bg-white pb-24">
        <Container className="max-w-3xl text-muted">
          <p>
            These terms have not been written yet. This page exists so the site structure is complete.
          </p>
        </Container>
      </section>
    </>
  );
}
