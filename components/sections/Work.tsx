"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ProductCard } from "@/components/products/ProductCard";
import { featuredWork } from "@/data/products";

export function Work() {
  const [index, setIndex] = useState(0);
  const total = featuredWork.length;
  const product = featuredWork[index];

  return (
    <section id="work" className="bg-white py-8 pb-24 lg:pb-32">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="max-w-[12ch] text-[36px] leading-[1.15] font-bold tracking-[-0.04em] text-ink sm:text-[48px]">
                Products creating real impact.
              </h2>
              <Link
                href="/products"
                className="mt-4 inline-block text-[15px] font-medium text-ink/60 transition-colors hover:text-ink"
              >
                All products →
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <p className="hidden text-sm tracking-[0.08em] text-muted sm:block">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
              <button
                type="button"
                onClick={() => setIndex((value) => (value - 1 + total) % total)}
                className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-white"
                aria-label="Previous project"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => setIndex((value) => (value + 1) % total)}
                className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-white"
                aria-label="Next project"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <ProductCard product={product} />
        </Reveal>
      </Container>
    </section>
  );
}
