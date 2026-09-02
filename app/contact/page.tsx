import type { Metadata } from "next";
import { ContactExperience } from "@/components/contact/ContactExperience";
import { Container, Meta } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk with PentaSoul about products, partnerships or careers.",
};

export default function ContactPage() {
  return (
    <>
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-ink pt-36 pb-16 text-white"
      >
        <svg
          className="pointer-events-none absolute right-[-10%] bottom-0 w-[640px] opacity-40"
          viewBox="0 0 420 420"
          aria-hidden
        >
          <g fill="none" stroke="#7657D6" strokeOpacity="0.5">
            <path d="M210 20 L390 120 L390 300 L210 400 L30 300 L30 120 Z" />
            <path d="M210 20 L390 120 L210 220 L30 120 Z" />
            <path d="M70 140 L70 280 L190 350" />
            <path d="M350 140 L350 280 L230 350" />
          </g>
        </svg>
        <Container className="relative">
          <Meta>Contact</Meta>
          <h1 className="text-display mt-8">
            Let&apos;s
            <br />
            Talk.
          </h1>
        </Container>
      </section>
      <ContactExperience />
    </>
  );
}
