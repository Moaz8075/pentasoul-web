import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit, Syne } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { SITE } from "@/lib/constants/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
    siteName: SITE.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${ibm.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-body text-paper">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
