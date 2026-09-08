export const SITE = {
  name: "PentaSoul",
  tagline: "Technology with purpose.",
  description:
    "PentaSoul is a product-focused technology company building digital products around meaningful real-world problems.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  copyrightYear: 2026,
  email: "pentasoul05@gmail.com",
  whatsapp: "+923000052248",
  whatsappDisplay: "+92 300 0052248",
} as const;

export const CONTACT = {
  emailHref: `mailto:${SITE.email}`,
  whatsappHref: `https://wa.me/${SITE.whatsapp.replace("+", "")}?text=${encodeURIComponent("Hello PentaSoul — I would like to talk.")}`,
} as const;

export const PRODUCT_URLS = {
  dsms: process.env.NEXT_PUBLIC_DSMS_URL ?? "https://placeholder.pentasoul.dev/dsms",
  legalease:
    process.env.NEXT_PUBLIC_LEGALEASE_URL ??
    "https://placeholder.pentasoul.dev/legalease",
} as const;
