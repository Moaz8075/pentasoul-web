import Link from "next/link";
import { Mail } from "lucide-react";
import { footerLinks, legalLinks } from "@/data/navigation";
import { company } from "@/data/company";
import { CONTACT, SITE } from "@/lib/constants/site";

const socials = [
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.98h4.56V24H.22V8.98zM8.34 8.98h4.37v2.05h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.35h-4.56v-7.4c0-1.77-.03-4.04-2.46-4.04-2.46 0-2.84 1.92-2.84 3.9V24H8.34V8.98z" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
        <path d="M18.9 1.15h3.67l-8.02 9.17L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.48l8.58-9.81L0 1.15h7.59l5.24 6.93L18.9 1.15zm-1.29 19.5h2.03L6.48 3.2H4.3l13.31 17.45z" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
        <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm7.93 6.94c1.14 1.4 1.83 3.17 1.9 5.1-2.1-.45-4.03-.47-5.76-.1-.2-.48-.41-.96-.65-1.43 2.04-1.4 3.7-3.2 4.51-3.57zM12 2.18c2.2 0 4.2.76 5.79 2.03-.7.35-2.2 1.98-4.12 3.32A28.7 28.7 0 0 0 10.2 2.4c.58-.14 1.18-.22 1.8-.22zM8.2 3.1c.9 1.7 2.04 3.5 3.4 5.32-2.56.68-5.5.86-8.08.54C4.5 6.2 6.14 4.16 8.2 3.1zM2.18 12c0-.2.01-.4.03-.6 2.94.4 6.3.18 9.2-.7.2.4.4.8.57 1.2-2.82 1.12-4.9 3.04-6.18 5.4A9.8 9.8 0 0 1 2.18 12zm9.82 9.82c-1.94 0-3.73-.62-5.18-1.67 1.16-2.2 3.08-3.96 5.7-5.02.86 2.24 1.48 4.56 1.84 6.9-.76.18-1.55.28-2.36.28zm3.5-.92c-.36-2.2-.93-4.36-1.72-6.44 1.5-.26 3.24-.2 5.18.24-.5 2.62-2.14 4.86-3.46 6.2z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#05050a] text-white">
      <div className="mx-auto max-w-[1240px] px-6 pt-14 pb-8 md:px-10">
        <div className="flex flex-col items-center gap-8 border-b border-white/10 pb-10">
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks
              .filter((link) => link.label !== "Blog")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/25 bg-[#25D366]/10 px-4 py-2 text-sm text-white/85 transition-colors hover:border-[#25D366]/50 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="size-3.5 fill-[#25D366]" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.18h.04c5.46 0 9.89-4.4 9.89-9.84C21.97 6.4 17.5 2 12.04 2zm5.76 14.08c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.61-2.89-1.25-4.77-4.15-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.28.58-.35.77-.35.19 0 .38 0 .54.01.18.01.41-.07.64.49.24.56.82 2 .89 2.14.07.14.12.3.02.49-.1.2-.14.31-.28.48-.14.16-.3.36-.42.49-.14.14-.28.29-.12.56.16.28.7 1.16 1.51 1.88 1.04.92 1.91 1.21 2.19 1.35.28.14.44.12.6-.07.16-.2.7-.81.89-1.09.19-.28.37-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
              </svg>
              {SITE.whatsappDisplay}
            </a>
            <a
              href={CONTACT.emailHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition-colors hover:border-purple/50 hover:text-white"
            >
              <Mail size={14} className="text-purple" />
              {SITE.email}
            </a>
          </div>

          <ul className="flex justify-center gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <span
                  aria-label={`${social.label} — coming soon`}
                  title={`${social.label} — coming soon`}
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70"
                >
                  {social.icon}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {SITE.copyrightYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white/80">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="sm:text-right">{company.footerLine}</p>
        </div>
      </div>
    </footer>
  );
}
