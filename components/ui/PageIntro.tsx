import { Container } from "@/components/ui/Container";

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
    <section className="bg-white pt-16 pb-10 lg:pt-24 lg:pb-14">
      <Container>
        <p className="text-[12px] font-medium tracking-[0.22em] text-muted uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-[16ch] text-[42px] leading-[1.12] font-bold tracking-[-0.045em] text-ink sm:text-[56px]">
          {title}
        </h1>
        {body ? (
          <p className="mt-6 max-w-[36rem] text-[16px] leading-[1.7] text-muted">{body}</p>
        ) : null}
      </Container>
    </section>
  );
}
