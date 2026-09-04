import { PageIntro } from "@/components/ui/PageIntro";
import { PillButton } from "@/components/ui/PillButton";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <PageIntro eyebrow="404" title="This page does not exist." />
      <section className="bg-white pb-24">
        <Container>
          <PillButton href="/">Back home</PillButton>
        </Container>
      </section>
    </>
  );
}
