import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container } from "@/components/ui/Container";
import { currentProducts, futureProducts } from "@/data/products";
import { footerNav } from "@/data/navigation";
import { SITE } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="pointer-events-none absolute -right-24 -bottom-32 w-[520px] opacity-40">
        <svg viewBox="0 0 200 220" className="w-full" aria-hidden>
          <g fill="none" stroke="rgba(118,87,214,0.45)" strokeWidth="1">
            <path d="M100 8 L188 58 L188 148 L100 198 L12 148 L12 58 Z" />
            <path d="M100 8 L188 58 L100 108 L12 58 Z" />
            <path d="M36 64 L100 100 L164 64" />
            <path d="M50 76 L100 104 L150 76" />
            <path d="M28 70 L28 140 L90 176" />
            <path d="M172 70 L172 140 L110 176" />
            <path d="M100 108 L100 168" />
          </g>
        </svg>
      </div>

      <Container className="relative pt-24 pb-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="PentaSoul home">
              <Logo className="h-12 w-10" />
              <span className="font-display text-2xl font-bold tracking-[0.22em] uppercase">
                PentaSoul
              </span>
            </Link>
            <p className="font-display mt-10 max-w-sm text-3xl leading-[1.15] font-semibold tracking-tight text-white/90">
              {SITE.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-meta mb-6 text-muted">Company</p>
              <ul className="space-y-3">
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[17px] text-white/80 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-meta mb-6 text-muted">Products</p>
              <ul className="space-y-3">
                {currentProducts.map((product) => (
                  <li key={product.id}>
                    <ArrowLink
                      href={product.href ?? "#"}
                      external
                      className="text-[17px] tracking-normal normal-case"
                    >
                      {product.name}
                    </ArrowLink>
                  </li>
                ))}
                {futureProducts.slice(0, 1).map((product) => (
                  <li key={product.id} className="text-[17px] text-white/45">
                    {product.name}
                    <span className="text-meta ml-2 text-muted">Coming Soon</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-meta mb-6 text-muted">Legal</p>
              <ul className="space-y-3">
                {footerNav.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[17px] text-white/80 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-meta text-muted">
            © {SITE.copyrightYear} {SITE.name}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-white/40">
            An independent technology company creating products around problems
            worth solving.
          </p>
        </div>
      </Container>
    </footer>
  );
}
