import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="bg-white py-8 pb-24 lg:pb-32">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-[16ch] text-[36px] leading-[1.15] font-bold tracking-[-0.04em] text-ink sm:text-[48px]">
              From idea to real-world{" "}
              <span className="text-purple">solutions.</span>
            </h2>
            <p className="max-w-[28rem] text-[16px] leading-[1.7] text-muted lg:pb-1">
              We take an idea from first principle through to a living product —
              strategy, design, engineering, and the systems that keep it running.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <article>
                  <span className="grid size-12 place-items-center rounded-xl bg-lavender text-purple">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-muted">
                    {service.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
