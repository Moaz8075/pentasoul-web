export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/careers", label: "Careers" },
] as const;

export const footerLinks = [
  ...navLinks,
  { href: "/blog", label: "Blog" },
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
