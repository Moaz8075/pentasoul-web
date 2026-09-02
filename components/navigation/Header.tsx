"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo, Wordmark } from "@/components/brand/Logo";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { cta, primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils/cn";

type NavTheme = "dark" | "light";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<NavTheme>("dark");
  const [open, setOpen] = useState(false);
  const [openForPath, setOpenForPath] = useState(pathname);

  if (openForPath !== pathname) {
    setOpenForPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-theme]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const next = visible.target.getAttribute("data-nav-theme");
          if (next === "light" || next === "dark") setTheme(next);
        }
      },
      { rootMargin: "-8% 0px -78% 0px", threshold: [0, 0.2, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  const light = theme === "light";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,border,backdrop-filter] duration-500",
          scrolled
            ? light
              ? "nav-glass-light"
              : "nav-glass-dark"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1680px] items-center justify-between px-5 sm:h-[80px] sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="PentaSoul home"
          >
            <Logo
              className="h-9 w-8 transition-transform duration-500 group-hover:scale-[1.04]"
              variant={light ? "ink" : "gradient"}
            />
            <Wordmark
              color={light ? "ink" : "paper"}
              className="hidden sm:inline"
            />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-meta relative transition-colors duration-300",
                    light ? "text-ink/70 hover:text-ink" : "text-white/70 hover:text-white",
                    active && (light ? "text-ink" : "text-white"),
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-px bg-current transition-[width] duration-300",
                      active ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <ArrowLink href={cta.href} tone={light ? "ink" : "paper"}>
              {cta.label}
            </ArrowLink>
          </div>

          <button
            type="button"
            className={cn(
              "flex size-11 items-center justify-center lg:hidden",
              light ? "text-ink" : "text-white",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X strokeWidth={1.4} /> : <Menu strokeWidth={1.4} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-ink lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="absolute inset-0 opacity-30">
              <div className="grid-perspective h-[140%] w-full" />
            </div>
            <div className="relative flex h-full flex-col px-6 pb-10 pt-28">
              <p className="font-display absolute right-0 top-24 translate-x-[8%] text-[28vw] leading-none text-white/[0.04] uppercase">
                Penta
              </p>
              <nav aria-label="Mobile">
                <ul className="flex flex-col">
                  {primaryNav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ y: 28, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.08 + i * 0.07,
                        duration: 0.55,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="border-b border-white/10"
                    >
                      <Link
                        href={item.href}
                        className="flex items-baseline justify-between py-5"
                        onClick={() => setOpen(false)}
                      >
                        <span className="font-display text-[12vw] leading-none font-bold tracking-tight uppercase">
                          {item.label}
                        </span>
                        <span className="text-meta text-muted">{item.index}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <motion.div
                className="mt-auto"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.5 }}
              >
                <ArrowLink href={cta.href} className="text-[13px]">
                  Let&apos;s Talk
                </ArrowLink>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
