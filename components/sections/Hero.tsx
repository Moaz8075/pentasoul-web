import Image from "next/image";
import { Mouse } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { WatchStory } from "@/components/sections/WatchStory";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="bg-white lg:h-[calc(100dvh-76px)] lg:max-h-[calc(100dvh-76px)]">
      <Container className="h-full py-6 lg:py-8">
        <div className="grid h-full items-center gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)] lg:gap-12">
          <div className="flex flex-col justify-center py-2 pr-2 lg:min-h-0 lg:py-0 lg:pr-6">
            <p className="text-[12px] font-medium tracking-[0.22em] text-muted uppercase">
              {company.heroEyebrow}
            </p>
            <h1 className="mt-4 max-w-[18ch] text-[clamp(2.5rem,5vh,4.25rem)] leading-[1.12] font-bold tracking-[-0.045em] text-ink">
              We build technology that moves{" "}
              <span className="text-purple">businesses forward.</span>
            </h1>
            <p className="mt-5 max-w-[40rem] text-[16px] leading-[1.7] text-muted">
              {company.heroBody}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <PillButton href="/contact">Let&apos;s Build Together</PillButton>
              <WatchStory />
            </div>
            <div className="mt-10 flex items-center gap-4 text-[13px] text-muted lg:mt-12">
              <Mouse size={18} strokeWidth={1.6} />
              <span>Scroll to explore</span>
              <span className="h-px w-28 bg-ink/15 sm:w-40" />
            </div>
          </div>

          <div className="relative h-[min(52vh,420px)] overflow-hidden rounded-[28px] sm:h-[min(56vh,520px)] lg:h-full lg:min-h-0">
            <Image
              src="/images/hero-office.png"
              alt="A modern studio looking out over the city at dusk"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-ink/35 via-transparent to-transparent" />
            <p className="absolute top-1/2 right-6 hidden -translate-y-1/2 text-[11px] font-medium tracking-[0.42em] text-white uppercase [writing-mode:vertical-rl] sm:block">
              Ideas · Products · People · Impact
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
