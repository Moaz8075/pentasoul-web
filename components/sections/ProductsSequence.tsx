"use client";

import { useRef } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container, Meta } from "@/components/ui/Container";
import {
  DsmsComposition,
  LegalEaseComposition,
  RoznamchaComposition,
} from "@/components/products/Compositions";
import { currentProducts, type Product } from "@/data/products";
import { gsap, registerGsap, useGSAP } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/utils/use-reduced-motion";
import { cn } from "@/lib/utils/cn";

function Visual({ product }: { product: Product }) {
  if (product.id === "dsms") return <DsmsComposition />;
  if (product.id === "legalease") return <LegalEaseComposition />;
  return <RoznamchaComposition />;
}

function ProductCopy({ product, dark }: { product: Product; dark?: boolean }) {
  return (
    <div className="max-w-xl">
      <div className="flex items-center gap-4">
        <span className={cn("text-meta", dark ? "text-white/40" : "text-white/40")}>
          {product.number}
        </span>
        <span className="text-meta text-violet">{product.category}</span>
      </div>
      <h3 className="font-display mt-6 text-5xl leading-none font-bold tracking-tight sm:text-6xl lg:text-7xl">
        {product.name}
      </h3>
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
            {product.ctaLabel ?? "Visit product"}
          </ArrowLink>
        </div>
      ) : null}
    </div>
  );
}

export function ProductsSequence() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      registerGsap();
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (reduced) return;

        const panels = gsap.utils.toArray<HTMLElement>(".product-panel");
        const wrap = root.current?.querySelector(".product-pin");
        if (!wrap) return;

        gsap.set(panels, { autoAlpha: 0, y: 32 });
        gsap.set(panels[0], { autoAlpha: 1, y: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: `+=${panels.length * 120}%`,
            pin: true,
            scrub: 0.7,
            anticipatePin: 1,
          },
        });

        panels.forEach((panel, i) => {
          if (i === 0) return;
          tl.to(panels[i - 1], { autoAlpha: 0, y: -24, duration: 0.5 }, i - 0.05)
            .to(panel, { autoAlpha: 1, y: 0, duration: 0.5 }, i - 0.05);
        });
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      data-nav-theme="dark"
      className="relative bg-graphite text-white"
    >
      <Container className="pt-24 pb-8 lg:pt-32">
        <Meta>Products</Meta>
        <h2 className="text-heading mt-6 max-w-[12ch]">
          Products built around real life.
        </h2>
      </Container>

      <div className="product-pin relative lg:h-[100svh] lg:overflow-hidden">
        <div className="relative h-full">
          {currentProducts.map((product, i) => (
            <article
              key={product.id}
              className={cn(
                "product-panel px-5 py-16 sm:px-8 lg:absolute lg:inset-0 lg:flex lg:items-center lg:px-12",
                i === 0 ? "lg:opacity-100" : "lg:opacity-0",
              )}
            >
              <div className="mx-auto grid max-w-[1680px] items-center gap-12 lg:grid-cols-12">
                <div className={cn("lg:col-span-5", i === 2 && "lg:order-2")}>
                  <ProductCopy product={product} />
                </div>
                <div
                  className={cn(
                    "lg:col-span-7",
                    i === 0 && "lg:-mr-12 lg:scale-[1.04]",
                    i === 1 && "lg:-mr-8",
                    i === 2 && "lg:order-1 lg:-ml-4",
                  )}
                >
                  <Visual product={product} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
