import { ArrowUpRight, Mail } from "lucide-react";
import { CONTACT, SITE } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("fill-current", className)} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.18h.04c5.46 0 9.89-4.4 9.89-9.84C21.97 6.4 17.5 2 12.04 2zm5.76 14.08c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.61-2.89-1.25-4.77-4.15-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.28.58-.35.77-.35.19 0 .38 0 .54.01.18.01.41-.07.64.49.24.56.82 2 .89 2.14.07.14.12.3.02.49-.1.2-.14.31-.28.48-.14.16-.3.36-.42.49-.14.14-.28.29-.12.56.16.28.7 1.16 1.51 1.88 1.04.92 1.91 1.21 2.19 1.35.28.14.44.12.6-.07.16-.2.7-.81.89-1.09.19-.28.37-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

const channels = [
  {
    label: "WhatsApp",
    hint: "Usually the fastest way to reach us.",
    value: SITE.whatsappDisplay,
    href: CONTACT.whatsappHref,
    action: "Chat now",
    icon: WhatsAppIcon,
    iconClass: "bg-[#25D366]/15 text-[#25D366] shadow-[0_0_28px_rgba(37,211,102,0.28)]",
    glow: "hover:border-[#25D366]/40 hover:shadow-[0_18px_50px_rgba(37,211,102,0.16)]",
  },
  {
    label: "Email",
    hint: "For longer notes, files, or formal enquiries.",
    value: SITE.email,
    href: CONTACT.emailHref,
    action: "Send email",
    icon: Mail,
    iconClass: "bg-purple/15 text-purple shadow-[0_0_28px_rgba(139,92,246,0.28)]",
    glow: "hover:border-purple/40 hover:shadow-[0_18px_50px_rgba(139,92,246,0.16)]",
  },
] as const;

export function ContactChannels() {
  return (
    <div className="grid gap-4">
      {channels.map((channel) => {
        const Icon = channel.icon;
        return (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
            className={cn(
              "glass glow-card group flex items-center gap-4 rounded-3xl p-5 transition-all duration-300",
              channel.glow,
            )}
          >
            <span className={cn("grid size-14 shrink-0 place-items-center rounded-2xl", channel.iconClass)}>
              <Icon className="size-6" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[13px] font-semibold tracking-[0.16em] text-white/45 uppercase">
                {channel.label}
              </span>
              <span className="mt-1 block truncate text-[18px] font-semibold tracking-tight text-white">
                {channel.value}
              </span>
              <span className="mt-1 block text-[13px] text-white/45">{channel.hint}</span>
            </span>
            <span className="hidden items-center gap-1 text-[13px] font-semibold text-white/70 transition-colors group-hover:text-white sm:inline-flex">
              {channel.action}
              <ArrowUpRight size={14} />
            </span>
          </a>
        );
      })}
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
