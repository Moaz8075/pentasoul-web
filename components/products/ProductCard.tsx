"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Bike,
  GraduationCap,
  Scale,
  Store,
} from "lucide-react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils/cn";

const icons = {
  dsms: GraduationCap,
  pentapos: Store,
  pentago: Bike,
  legalease: Scale,
};

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const Icon = icons[product.id as keyof typeof icons] ?? Scale;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "glass glow-card grid overflow-hidden rounded-[28px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
        className,
      )}
    >
      <div className="flex flex-col justify-center px-7 py-8 sm:px-10 lg:px-12 lg:py-12">
        <span className="grid size-12 place-items-center rounded-2xl bg-purple/15 text-purple shadow-[0_0_24px_rgba(139,92,246,0.28)]">
          <Icon size={22} strokeWidth={1.7} />
        </span>
        <p className="mt-6 text-[13px] font-semibold tracking-[0.16em] text-white/45 uppercase">
          {product.category}
        </p>
        <h3 className="mt-2 text-[32px] font-bold tracking-[-0.04em] text-white sm:text-[40px]">
          {product.name}
        </h3>
        <p className="mt-2 text-[18px] font-semibold text-white">{product.positioning}</p>
        <p className="mt-3 max-w-[32rem] text-[16px] leading-[1.65] text-white/60">
          {product.description}
        </p>
        {product.href ? (
          <a
            href={product.href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-[16px] font-semibold text-white"
          >
            View Project
            <ArrowUpRight size={16} />
          </a>
        ) : (
          <p className="mt-6 text-[16px] font-semibold text-white/45">{product.statusLabel}</p>
        )}
      </div>
      <div className="relative min-h-[240px] overflow-hidden sm:min-h-[320px] lg:min-h-[420px]">
        <Image
          src={product.image}
          alt={`${product.name} product composition`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-700 hover:scale-105"
        />
      </div>
    </motion.article>
  );
}
