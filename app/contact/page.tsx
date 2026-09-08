import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactForm } from "@/components/contact/ContactForm";
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
        body={company.ctaBody}
      />
      <section className="pb-16">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
            <Reveal>
              <p className="text-[12px] font-semibold tracking-[0.28em] text-purple uppercase">
                Reach us directly
              </p>
              <p className="mt-3 max-w-[28rem] text-[16px] leading-[1.7] text-white/60">
                Message us on WhatsApp or email. Use the form if you prefer to leave details here.
              </p>
              <div className="mt-6">
                <ContactChannels />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
