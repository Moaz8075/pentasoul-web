import type { Metadata } from "next";
import { Container, Meta } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <section data-nav-theme="light" className="bg-warm pt-36 pb-28 text-ink">
      <Container className="max-w-3xl">
        <Meta className="text-ink/45">Legal</Meta>
        <h1 className="text-heading mt-8">Terms &amp; Conditions</h1>
        <p className="mt-10 text-lg leading-relaxed text-ink/60">
          This page is a placeholder. PentaSoul&apos;s terms of use will be
          published here before public launch. Until then, nothing on this
          website should be read as a contractual offer.
        </p>
        <p className="mt-6 text-ink/50">Last updated: 2026 — terms text TODO.</p>
      </Container>
    </section>
  );
}
