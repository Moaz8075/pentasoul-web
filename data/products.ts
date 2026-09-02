import { PRODUCT_URLS } from "@/lib/constants/site";

export type ProductStatus = "live" | "development";

export type Product = {
  id: string;
  number: string;
  name: string;
  category: string;
  domain: string;
  status: ProductStatus;
  statusLabel: string;
  positioning: string;
  description: string;
  capabilities: string[];
  composition: "desktop" | "workspace" | "mobile" | "silhouette";
  href?: string;
  ctaLabel?: string;
};

export const currentProducts: Product[] = [
  {
    id: "dsms",
    number: "01",
    name: "DSMS",
    category: "Education Technology",
    domain: "Education",
    status: "live",
    statusLabel: "Live Product",
    positioning: "The operating system of a school.",
    description:
      "A complete digital school management platform designed to help schools manage academics, students, attendance, fees, staff and everyday operations.",
    capabilities: [
      "Academics",
      "Students",
      "Attendance",
      "Fees",
      "Staff",
      "Operations",
    ],
    composition: "desktop",
    href: PRODUCT_URLS.dsms,
    ctaLabel: "Visit DSMS",
  },
  {
    id: "legalease",
    number: "02",
    name: "LegalEase",
    category: "Legal Technology",
    domain: "Legal",
    status: "live",
    statusLabel: "Live Product",
    positioning: "A quieter way to run a practice.",
    description:
      "A digital workspace for lawyers and law firms to manage cases, hearings, documents, payments and everyday legal workflows.",
    capabilities: [
      "Cases",
      "Hearings",
      "Documents",
      "Payments",
      "Workflows",
    ],
    composition: "workspace",
    href: PRODUCT_URLS.legalease,
    ctaLabel: "Visit LegalEase",
  },
  {
    id: "roznamcha",
    number: "03",
    name: "Roznamcha",
    category: "Business Technology",
    domain: "Business",
    status: "live",
    statusLabel: "Live Product",
    positioning: "The daily book, rebuilt.",
    description:
      "A simple business-management platform for managing customer ledgers, payments, cash, credit, expenses and business performance.",
    capabilities: [
      "Ledgers",
      "Payments",
      "Cash",
      "Credit",
      "Expenses",
      "Performance",
    ],
    composition: "mobile",
    href: PRODUCT_URLS.roznamcha,
    ctaLabel: "Visit Roznamcha",
  },
];

export const futureProducts: Product[] = [
  {
    id: "pentapos",
    number: "04",
    name: "PentaPOS",
    category: "Retail / Commerce Technology",
    domain: "Commerce",
    status: "development",
    statusLabel: "In Development",
    positioning: "The counter, connected.",
    description:
      "A modern point-of-sale and business operations platform for retailers, restaurants and growing businesses.",
    capabilities: ["Point of Sale", "Inventory", "Operations", "Reporting"],
    composition: "silhouette",
  },
  {
    id: "local-commerce",
    number: "05",
    name: "Local Commerce Platform",
    category: "Consumer / Commerce Technology",
    domain: "Consumer",
    status: "development",
    statusLabel: "In Development",
    positioning: "Commerce, closer to home.",
    description:
      "A future marketplace designed to connect customers, restaurants, grocery stores, local businesses and delivery partners.",
    capabilities: [
      "Customers",
      "Restaurants",
      "Grocery",
      "Local Business",
      "Delivery",
    ],
    composition: "silhouette",
  },
];

export const allProducts = [...currentProducts, ...futureProducts];

export const domains = [
  {
    id: "education",
    label: "Education",
    index: "01",
    note: "How schools operate, teach and stay connected.",
    fragment: "dsms",
  },
  {
    id: "legal",
    label: "Legal",
    index: "02",
    note: "How practices manage cases, time and documents.",
    fragment: "legalease",
  },
  {
    id: "business",
    label: "Business",
    index: "03",
    note: "How everyday commerce is recorded and understood.",
    fragment: "roznamcha",
  },
  {
    id: "commerce",
    label: "Commerce",
    index: "04",
    note: "How retailers sell, stock and serve.",
    fragment: "pos",
  },
  {
    id: "consumer",
    label: "Consumer",
    index: "05",
    note: "How people find, order and receive locally.",
    fragment: "commerce",
  },
] as const;
