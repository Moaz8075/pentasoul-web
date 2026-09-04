import Link from "next/link";
import { Wordmark } from "@/components/brand/Logo";
import { footerLinks, legalLinks } from "@/data/navigation";
import { company } from "@/data/company";
import { SITE } from "@/lib/constants/site";

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
    label: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
        <path d="M18.9 1.15h3.67l-8.02 9.17L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.48l8.58-9.81L0 1.15h7.59l5.24 6.93L18.9 1.15zm-1.29 19.5h2.03L6.48 3.2H4.3l13.31 17.45z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
        <path d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.91-.01 3.31 0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12.3C24 5.67 18.63.3 12 .3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
        <path d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.37.46A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.13 2.14C4.5 20.4 12 20.4 12 20.4s7.5 0 9.37-.46a3.02 3.02 0 0 0 2.13-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.57V8.43L15.84 12l-6.09 3.57z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1240px] px-6 pt-14 pb-8 md:px-10">
        <div className="grid grid-cols-1 items-center gap-8 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="justify-self-start">
            <Wordmark className="text-white" />
          </Link>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ul className="flex justify-start gap-3 md:justify-end">
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
            © {SITE.copyrightYear} {SITE.name}
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
