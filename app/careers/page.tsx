import type { Metadata } from "next";
import { CareersExperience } from "@/components/sections/CareersExperience";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build products people actually use. Explore working at PentaSoul.",
};

export default function CareersPage() {
  return <CareersExperience />;
}
