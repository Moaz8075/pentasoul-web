export type NavItem = {
  href: string;
  label: string;
  index: string;
};

export const primaryNav: NavItem[] = [
  { href: "/products", label: "Products", index: "01" },
  { href: "/about", label: "About", index: "02" },
  { href: "/careers", label: "Careers", index: "03" },
  { href: "/contact", label: "Contact", index: "04" },
];

export const footerNav = {
  company: [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;

export const cta = {
  href: "/contact",
  label: "Let's Talk",
} as const;
