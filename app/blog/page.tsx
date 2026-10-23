import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from PentaSoul on building products, engineering and design.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Journal"
        title="Nothing published yet."
        body="This space is reserved for writing from PentaSoul. There are no posts to show right now."
      />
      <section className="pb-16">
        <Container>
          <div className="glass rounded-[28px] px-8 py-10 text-white/60">
            Posts will appear here when they are ready to publish.
          </div>
        </Container>
      </section>
    </>
  );
}
