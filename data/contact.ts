export const contactPaths = [
  {
    id: "product" as const,
    index: "01",
    label: "Product",
    hint: "Questions about DSMS, LegalEase, Roznamcha or what we’re building next.",
  },
  {
    id: "partnership" as const,
    index: "02",
    label: "Partnership",
    hint: "Working together on distribution, integration or a shared problem.",
  },
  {
    id: "careers" as const,
    index: "03",
    label: "Careers",
    hint: "Introduce yourself. Open roles will appear when they exist.",
  },
  {
    id: "general" as const,
    index: "04",
    label: "General",
    hint: "Anything else — a conversation is enough.",
  },
];

export type ContactPathId = (typeof contactPaths)[number]["id"];

export const productInterestOptions = [
  "DSMS",
  "LegalEase",
  "Roznamcha",
  "PentaPOS",
  "Other",
] as const;

export const partnershipTypes = [
  "Distribution",
  "Integration",
  "Industry",
  "Other",
] as const;

export const expertiseAreas = [
  "Engineering",
  "Product",
  "Design",
  "Business",
  "Operations",
  "Other",
] as const;
