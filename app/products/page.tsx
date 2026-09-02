import type { Metadata } from "next";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container, Meta } from "@/components/ui/Container";
import {
  DsmsComposition,
  FutureSilhouette,
  LegalEaseComposition,
  RoznamchaComposition,
} from "@/components/products/Compositions";
import { currentProducts, futureProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "PentaSoul’s product ecosystem — DSMS, LegalEase, Roznamcha, and what comes next.",
};

export default function ProductsPage() {
  return (
    <>
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-ink pt-36 pb-24 text-white"
      >
        <div className="pointer-events-none absolute top-20 right-0 w-[55%] opacity-40">
          <svg viewBox="0 0 500 500" className="w-full" aria-hidden>
            <g fill="none" stroke="rgba(118,87,214,0.5)" strokeWidth="1">
              <path d="M250 20 L460 140 L460 360 L250 480 L40 360 L40 140 Z" />
              <path d="M250 80 L400 165 L400 335 L250 420 L100 335 L100 165 Z" />
              <path d="M250 140 L340 190 L340 300 L250 350 L160 300 L160 190 Z" />
            </g>
          </svg>
        </div>
        <Container className="relative">
          <Meta>Ecosystem</Meta>
          <h1 className="text-display mt-8">Products</h1>
          <p className="font-display mt-8 max-w-xl text-3xl leading-tight tracking-tight text-white/60">
            Built around real life.
          </p>
        </Container>
      </section>

      {currentProducts.map((product, i) => (
        <section
          key={product.id}
          data-nav-theme="dark"
          className={i % 2 === 0 ? "bg-graphite py-28 text-white" : "bg-ink py-28 text-white"}
        >
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-12">
              <div className={i === 2 ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"}>
                <div className="flex items-center gap-4">
                  <span className="text-meta text-white/35">{product.number}</span>
                  <span className="text-meta text-violet">{product.category}</span>
                </div>
                <h2 className="font-display mt-6 text-6xl tracking-tight sm:text-7xl">
                  {product.name}
                </h2>
                <p className="mt-6 text-xl text-white/70">{product.positioning}</p>
                <p className="mt-4 max-w-md text-[17px] leading-relaxed text-white/50">
                  {product.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                  {product.capabilities.map((cap) => (
                    <li key={cap} className="text-meta text-white/35">
                      {cap}
                    </li>
                  ))}
                </ul>
                {product.href ? (
                  <div className="mt-10">
                    <ArrowLink href={product.href} external>
                      {product.ctaLabel}
                    </ArrowLink>
                  </div>
                ) : null}
              </div>
              <div className={i === 2 ? "lg:col-span-7 lg:order-1" : "lg:col-span-7"}>
                {product.id === "dsms" ? <DsmsComposition /> : null}
                {product.id === "legalease" ? <LegalEaseComposition /> : null}
                {product.id === "roznamcha" ? <RoznamchaComposition /> : null}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section data-nav-theme="dark" className="bg-ink py-28 text-white">
        <Container>
          <Meta>What&apos;s next</Meta>
          <h2 className="text-statement mt-8 max-w-[10ch]">Still in formation.</h2>
          <div className="mt-20 space-y-24">
            {futureProducts.map((product, i) => (
              <article key={product.id} className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="text-meta text-violet">{product.statusLabel}</p>
                  <h3 className="font-display mt-4 text-4xl tracking-tight sm:text-5xl">
                    {product.name}
                  </h3>
                  <p className="text-meta mt-3 text-white/40">{product.category}</p>
                  <p className="mt-6 max-w-md text-white/50">{product.description}</p>
                </div>
                <div className="lg:col-span-7">
                  <FutureSilhouette variant={i === 0 ? "pos" : "commerce"} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
