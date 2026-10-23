import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";

export const dynamic = "force-static";

const PAGES = ["/", "/about/", "/products/", "/careers/", "/contact/", "/blog/", "/privacy/", "/terms/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
