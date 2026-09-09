import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { Reveal } from "@/components/motion/Reveal";
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
            <span className="text-gradient">Let&apos;s make it real.</span>
          </>
        }
        body="Reach us on WhatsApp or email. We usually reply the same day."
      />
      <section className="pb-20">
        <Container>
          <Reveal>
            <ContactChannels />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
