import type { Metadata } from "next";
import { UnderDevelopment } from "@/components/sections/UnderDevelopment";

export const metadata: Metadata = {
  title: "Under Development",
  description: "This website is under development.",
};

export default function UnderDevelopmentPage() {
  return <UnderDevelopment />;
}
