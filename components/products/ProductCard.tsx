import Image from "next/image";
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
    <article
      className={cn(
        "grid overflow-hidden rounded-[32px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
        className,
      )}
      style={{ backgroundColor: product.tint }}
    >
      <div className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:px-14 lg:py-16">
        <span className="grid size-12 place-items-center rounded-2xl bg-purple/15 text-purple">
          <Icon size={22} strokeWidth={1.7} />
        </span>
        <p className="mt-8 text-[12px] font-medium tracking-[0.18em] text-ink/50 uppercase">
          {product.category}
        </p>
        <h3 className="mt-2 text-[32px] font-bold tracking-[-0.04em] text-ink sm:text-[40px]">
          {product.name}
        </h3>
        <p className="mt-2 text-[17px] font-medium text-ink/80">{product.positioning}</p>
        <p className="mt-4 max-w-[28rem] text-[15px] leading-[1.7] text-ink/60">
          {product.description}
        </p>
        {product.href ? (
          <a
            href={product.href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-ink"
          >
            View Project
            <ArrowUpRight size={16} />
          </a>
        ) : (
          <p className="mt-8 text-[15px] font-medium text-ink/50">{product.statusLabel}</p>
        )}
      </div>
      <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[480px]">
        <Image
          src={product.image}
          alt={`${product.name} product composition`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>
    </article>
  );
}
