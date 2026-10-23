import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageFade } from "@/components/motion/PageFade";
import { FloatingWhatsApp } from "@/components/contact/ContactChannels";
import { SITE } from "@/lib/constants/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  // Site-wide share defaults only; previews take each page's own <title>.
  openGraph: {
    type: "website",
    siteName: SITE.name,
    images: [{ url: "/images/hero-office.png" }],
  },
  twitter: { card: "summary_large_image" },
  // AdSense site-ownership check (publisher ID is public).
  other: { "google-adsense-account": "ca-pub-8734977928129765" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/favicon.ico`,
  email: SITE.email,
  telephone: SITE.whatsapp,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <Header />
        <main className="flex-1">
          <PageFade>{children}</PageFade>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
