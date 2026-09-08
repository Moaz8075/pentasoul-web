import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { LegalDocument } from "@/components/ui/LegalDocument";
import { legalUpdated, termsSections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms that govern your use of the PentaSoul website.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Terms of Use"
        body="These terms govern access to this website. By using the site, you agree to them."
      />
      <section className="pb-20">
        <Container>
          <LegalDocument updated={legalUpdated} sections={termsSections} />
        </Container>
      </section>
    </>
  );
}
