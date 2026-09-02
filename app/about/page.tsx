import type { Metadata } from "next";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container, Meta } from "@/components/ui/Container";
import { approach, company, principles, process } from "@/data/company";
import { currentProducts, futureProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "About",
  description:
    "PentaSoul is a product-focused technology company building useful software around real-world problems.",
};

export default function AboutPage() {
  return (
    <>
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-ink pt-36 pb-28 text-white"
      >
        <Container>
          <Meta>About PentaSoul</Meta>
          <h1 className="text-display mt-8 max-w-[12ch]">About PentaSoul</h1>
          <p className="font-display mt-10 max-w-2xl text-3xl leading-tight tracking-tight text-white/60 lg:text-5xl">
            {company.aboutHero}
          </p>
        </Container>
      </section>

      <section data-nav-theme="light" className="bg-warm py-28 text-ink">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Meta className="text-ink/45 lg:col-span-3">The company</Meta>
            <div className="lg:col-span-9">
              <p className="text-statement max-w-[16ch]">{company.positioning}</p>
              <p className="mt-12 max-w-xl text-lg leading-relaxed text-ink/60">
                {company.storyBody} Products are how that work becomes useful —
                not the whole of who we are.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section data-nav-theme="light" className="bg-paper py-28 text-ink">
        <Container>
          <div className="grid gap-20 lg:grid-cols-2">
            <div className="border-t border-ink/10 pt-10">
              <Meta className="text-ink/45">Mission</Meta>
              <p className="text-heading mt-8">{company.mission}</p>
            </div>
            <div className="border-t border-ink/10 pt-10 lg:mt-24">
              <Meta className="text-ink/45">Vision</Meta>
              <p className="text-heading mt-8">{company.vision}</p>
            </div>
          </div>
        </Container>
      </section>

      <section data-nav-theme="dark" className="bg-graphite py-28 text-white">
        <Container>
          <Meta>How we work</Meta>
          <div className="mt-16 space-y-0">
            {approach.map((item, i) => (
              <article
                key={item.title}
                className="grid gap-6 border-t border-white/10 py-12 lg:grid-cols-12"
              >
                <span className="text-meta text-white/35 lg:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-3xl tracking-tight lg:col-span-4">
                  {item.title}
                </h2>
                <p className="max-w-md text-white/55 lg:col-span-6">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section data-nav-theme="light" className="bg-warm py-28 text-ink">
        <Container>
          <Meta className="text-ink/45">Process</Meta>
          <h2 className="text-heading mt-8 max-w-[14ch]">
            Think. Design. Build. Improve.
          </h2>
          <ol className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
            {process.map((step) => (
              <li
                key={step.id}
                className="grid gap-4 py-10 sm:grid-cols-12 sm:items-baseline"
              >
                <p className="font-display text-4xl font-bold tracking-tight uppercase sm:col-span-4">
                  {step.label}
                </p>
                <p className="text-ink/55 sm:col-span-8">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section data-nav-theme="dark" className="bg-ink py-28 text-white">
        <Container>
          <Meta>Principles</Meta>
          <ul className="mt-12">
            {principles.map((item) => (
              <li
                key={item.number}
                className="grid gap-4 border-t border-white/10 py-10 lg:grid-cols-12"
              >
                <span className="font-display text-5xl text-white/15 lg:col-span-2">
                  {item.number}
                </span>
                <h3 className="font-display text-3xl tracking-tight uppercase lg:col-span-4">
                  {item.title}
                </h3>
                <p className="text-white/50 lg:col-span-6">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section data-nav-theme="light" className="bg-warm py-28 text-ink">
        <Container>
          <Meta className="text-ink/45">Product journey</Meta>
          <h2 className="text-heading mt-8 max-w-[14ch]">
            Evidence of the work, not the whole of it.
          </h2>
          <ul className="mt-16">
            {[...currentProducts, ...futureProducts].map((product) => (
              <li
                key={product.id}
                className="flex flex-col gap-2 border-t border-ink/10 py-8 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-display text-3xl tracking-tight">
                  {product.name}
                </span>
                <span className="text-meta text-ink/40">
                  {product.category}
                  {product.status === "development" ? " — In development" : ""}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section data-nav-theme="light" className="bg-paper py-28 text-ink">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Meta className="text-ink/45">People</Meta>
            <h2 className="text-heading mt-8">Leadership and team.</h2>
            <p className="mt-6 max-w-md text-ink/55">
              Names, portraits and biographies will be added here. This space is
              reserved for the people behind PentaSoul.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-ink/6 p-4">
                <p className="text-meta text-ink/35">Portrait placeholder</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section data-nav-theme="dark" className="bg-ink py-28 text-white">
        <Container>
          <Meta>Direction</Meta>
          <p className="text-statement mt-8 max-w-[14ch]">
            A growing portfolio. The same standard.
          </p>
          <p className="mt-8 max-w-lg text-white/50">
            {company.vision} Current products are the first chapter — not the
            last.
          </p>
          <div className="mt-12">
            <ArrowLink href="/contact">Talk with PentaSoul</ArrowLink>
          </div>
        </Container>
      </section>
    </>
  );
}
