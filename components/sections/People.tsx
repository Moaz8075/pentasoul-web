import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container, Meta } from "@/components/ui/Container";
import { IsoFrame } from "@/components/geometry/HeroGeometry";
import { Reveal } from "@/components/motion/Reveal";

export function People() {
  return (
    <section data-nav-theme="light" className="bg-warm py-28 text-ink">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Meta className="text-ink/45">People</Meta>
              <h2 className="text-heading mt-8">Technology is built by people.</h2>
              <p className="font-display mt-10 text-2xl leading-snug tracking-tight text-ink/70 sm:text-3xl">
                Build things people actually use.
              </p>
              <div className="mt-12">
                <ArrowLink href="/careers" tone="ink">
                  Explore Careers
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              <div className="relative col-span-8 aspect-[4/5] overflow-hidden bg-ink/6">
                <IsoFrame className="absolute -right-8 -bottom-10 w-[70%] opacity-70" tone="light" />
                <div className="absolute inset-0 flex items-end p-6">
                  <p className="text-meta text-ink/40">Team photography — to be added</p>
                </div>
              </div>
              <div className="col-span-4 mt-16 aspect-[3/4] bg-ink/8">
                <div className="flex h-full items-end p-4">
                  <p className="text-meta text-ink/35">Placeholder</p>
                </div>
              </div>
              <div className="col-span-5 -mt-10 aspect-[5/3] bg-[#503A91]/12">
                <div className="flex h-full items-end p-4">
                  <p className="text-meta text-ink/40">Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
