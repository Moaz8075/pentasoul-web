import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Privacy Policy"
        body="This is a placeholder. Replace this page with the company’s privacy policy before launch."
      />
      <section className="bg-white pb-24">
        <Container className="max-w-3xl text-muted">
          <p>
            PentaSoul does not currently publish a full privacy policy on this site. Do not collect live user data until this page is complete.
          </p>
        </Container>
      </section>
    </>
  );
}
