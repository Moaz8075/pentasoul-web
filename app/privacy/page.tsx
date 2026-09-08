import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { LegalDocument } from "@/components/ui/LegalDocument";
import { legalUpdated, privacySections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PentaSoul collects, uses, and protects personal information on this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Privacy Policy"
        body="This policy explains what information we collect on this website, how we use it, and the rights you have."
      />
      <section className="pb-20">
        <Container>
          <LegalDocument updated={legalUpdated} sections={privacySections} />
        </Container>
      </section>
    </>
  );
}
