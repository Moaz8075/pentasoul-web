"use client";

import { Container, Meta } from "@/components/ui/Container";
import { FutureSilhouette } from "@/components/products/Compositions";
import { Reveal } from "@/components/motion/Reveal";
import { futureProducts } from "@/data/products";

export function Future() {
  return (
    <section
      data-nav-theme="dark"
      className="relative overflow-hidden bg-ink py-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(80,58,145,0.22),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <Container className="relative">
        <Reveal>
          <Meta>What&apos;s next</Meta>
          <h2 className="text-display mt-8 max-w-[10ch]">
            We&apos;re just getting started.
          </h2>
        </Reveal>

        <div className="mt-24 space-y-28">
          {futureProducts.map((product, i) => (
            <article
              key={product.id}
              className="grid items-end gap-10 lg:grid-cols-12"
            >
              <div className={i === 1 ? "lg:col-span-5 lg:col-start-2" : "lg:col-span-5"}>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="text-meta text-white/35">{product.number}</span>
                    <span className="text-meta text-violet">{product.statusLabel}</span>
                  </div>
                  <h3 className="font-display mt-5 text-4xl tracking-tight sm:text-5xl">
                    {product.name}
                  </h3>
                  <p className="text-meta mt-3 text-white/40">{product.category}</p>
                  <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/50">
                    {product.description}
                  </p>
                </Reveal>
              </div>
              <div className={i === 1 ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-6 lg:col-start-7"}>
                <FutureSilhouette variant={i === 0 ? "pos" : "commerce"} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
