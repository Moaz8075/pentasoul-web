import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function PageIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
}) {
  return (
    <section className="pt-10 pb-6 lg:pt-14 lg:pb-8">
      <Container>
        <Reveal>
          <p className="text-[12px] font-semibold tracking-[0.28em] text-purple uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-[22ch] text-[clamp(2.5rem,4.4vw,4.25rem)] leading-[1.08] font-bold tracking-[-0.05em] text-white">
            {title}
          </h1>
          {body ? (
            <p className="mt-4 max-w-[40rem] text-[18px] leading-[1.65] text-white/60">
              {body}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
