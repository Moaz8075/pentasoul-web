import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Journal"
        title="Nothing published yet."
        body="This space is reserved for writing from PentaSoul. There are no posts to show right now."
      />
      <section className="bg-white pb-24">
        <Container>
          <div className="rounded-[28px] border border-ink/10 px-8 py-16 text-muted">
            Posts will appear here when they are ready to publish.
          </div>
        </Container>
      </section>
    </>
  );
}
