import { PRODUCT_URLS } from "@/lib/constants/site";

export type ProductStatus = "live" | "development";

export type Product = {
  id: string;
  number: string;
  name: string;
  category: string;
  teaser: string;
  status: ProductStatus;
  statusLabel: string;
  positioning: string;
  description: string;
  image: string;
  tint: string;
  href: string;
};

export const allProducts: Product[] = [
  {
    id: "dsms",
    number: "01",
    name: "DSMS",
    category: "Education Technology",
    teaser: "School management platform",
    status: "live",
    statusLabel: "Live Product",
    positioning: "The operating system of a school.",
    description:
      "A complete digital school management platform designed to help schools manage academics, students, attendance, fees, staff and everyday operations.",
    image: "/images/work-dsms.png",
    tint: "#e8eefc",
    href: PRODUCT_URLS.dsms,
  },
  {
    id: "pentapos",
    number: "02",
    name: "PentaPOS",
    category: "Retail / Commerce Technology",
    teaser: "Point of sale platform",
    status: "development",
    statusLabel: "In Development",
    positioning: "The counter, connected.",
    description:
      "A modern point-of-sale and business operations platform for retailers, restaurants and growing businesses.",
    image: "/images/work-pentapos.png",
    tint: "#ececec",
    href: PRODUCT_URLS.underDevelopment,
  },
  {
    id: "pentago",
    number: "03",
    name: "PentaGo",
    category: "Consumer / Commerce Technology",
    teaser: "Local delivery marketplace",
    status: "development",
    statusLabel: "In Development",
    positioning: "Local food and commerce, at your door.",
    description:
      "A local marketplace connecting customers with restaurants, grocery stores, neighbourhood businesses and delivery partners.",
    image: "/images/work-pentago.png",
    tint: "#f3e8e4",
    href: PRODUCT_URLS.underDevelopment,
  },
  {
    id: "legalease",
    number: "04",
    name: "LegalEase",
    category: "Legal Technology",
    teaser: "Case management platform",
    status: "live",
    statusLabel: "Live Product",
    positioning: "A quieter way to run a practice.",
    description:
      "A digital workspace for lawyers and law firms to manage cases, hearings, documents, payments and everyday legal workflows.",
    image: "/images/featured-devices.png",
    tint: "#ece6ff",
    href: PRODUCT_URLS.legalease,
  },
];

export const featuredWork = allProducts;

export const upcomingProducts = allProducts.filter(
  (product) => product.status === "development",
);
