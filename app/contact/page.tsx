import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactForm } from "@/components/contact/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: company.ctaBody,
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Have an idea?{" "}
            <span className="text-purple">Let&apos;s make it real.</span>
          </>
        }
        body={company.ctaBody}
      />
      <section className="bg-white pb-24">
        <Container className="max-w-3xl">
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
