"use client";

import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
