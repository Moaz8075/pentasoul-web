import { ArrowLink } from "@/components/ui/ArrowLink";
import { NestedFrame } from "@/components/geometry/HeroGeometry";

export function HomeContact() {
  return (
    <section
      data-nav-theme="dark"
      className="relative overflow-hidden bg-ink py-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(80,58,145,0.28),transparent_50%)]" />
      <svg
        className="pointer-events-none absolute -right-20 -bottom-16 w-[720px] opacity-50"
        viewBox="0 0 420 420"
        aria-hidden
      >
        <g fill="none" stroke="#7657D6" strokeOpacity="0.45">
          <path d="M210 20 L390 120 L390 300 L210 400 L30 300 L30 120 Z" />
          <path d="M210 20 L390 120 L210 220 L30 120 Z" />
          <path d="M70 140 L70 280 L190 350" />
          <path d="M350 140 L350 280 L230 350" />
          <path d="M90 155 L210 220 L330 155" />
          <path d="M210 220 L210 340" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <NestedFrame className="inline-block p-2 sm:p-6">
          <p className="text-meta text-white/40">Contact</p>
          <h2 className="text-display mt-8">
            Let&apos;s
            <br />
            Talk.
          </h2>
          <p className="mt-8 max-w-md text-lg text-white/55">
            Products, partnerships, opportunities or simply a conversation.
          </p>
          <div className="mt-12">
            <ArrowLink href="/contact" tone="fill">
              Start a Conversation
            </ArrowLink>
          </div>
        </NestedFrame>
      </div>
    </section>
  );
}
