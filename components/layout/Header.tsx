"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/brand/Logo";
import { PillButton } from "@/components/ui/PillButton";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-[0_1px_0_rgba(10,10,12,0.06)]",
      )}
    >
      <div className="mx-auto grid h-[76px] max-w-[1240px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 md:px-10">
        <Link href="/" aria-label="PentaSoul home" className="relative z-50">
          <Wordmark />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-1 lg:flex"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3.5 pt-3 pb-2 text-[15px] font-medium tracking-[-0.01em] text-ink/80 transition-colors hover:text-ink",
                  active && "text-ink",
                )}
              >
                {link.label}
                {active ? (
                  <span className="absolute top-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-purple" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <div className="hidden lg:block">
            <PillButton href="/contact">Let&apos;s Talk</PillButton>
          </div>
          <button
            type="button"
            className="relative z-50 grid size-11 place-items-center rounded-full border border-ink/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <nav className="flex h-full flex-col justify-center px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-4xl font-semibold tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-10" onClick={() => setOpen(false)}>
                <PillButton href="/contact">Let&apos;s Talk</PillButton>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
