import type { Metadata } from "next";
import { UnderDevelopment } from "@/components/sections/UnderDevelopment";

export const metadata: Metadata = {
  title: "Under Development",
  description: "This website is under development.",
  alternates: { canonical: "/underdevelopment/" },
  robots: { index: false, follow: true },
};

export default function UnderDevelopmentPage() {
  return <UnderDevelopment />;
}
