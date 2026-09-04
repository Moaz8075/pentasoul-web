import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";

export function ContactCta() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <h2 className="max-w-[12ch] text-[36px] leading-[1.15] font-bold tracking-[-0.04em] text-ink sm:text-[52px]">
              Have an idea?{" "}
              <span className="text-purple">Let&apos;s make it real.</span>
            </h2>
            <div>
              <p className="max-w-[30rem] text-[16px] leading-[1.7] text-muted">
                {company.ctaBody}
              </p>
              <div className="mt-8">
                <PillButton href="/contact">Get in Touch</PillButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
