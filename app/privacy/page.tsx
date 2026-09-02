import type { Metadata } from "next";
import { Container, Meta } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section data-nav-theme="light" className="bg-warm pt-36 pb-28 text-ink">
      <Container className="max-w-3xl">
        <Meta className="text-ink/45">Legal</Meta>
        <h1 className="text-heading mt-8">Privacy Policy</h1>
        <p className="mt-10 text-lg leading-relaxed text-ink/60">
          This page is a placeholder. The published privacy policy will be added
          here before public launch. No personal information is collected by a
          backend on this website yet; contact forms are validated in the
          browser and are not transmitted to a server.
        </p>
        <p className="mt-6 text-ink/50">Last updated: 2026 — policy text TODO.</p>
      </Container>
    </section>
  );
}
