"use client";

import { useState } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Container, Meta } from "@/components/ui/Container";
import { culture, disciplines, vacancies } from "@/data/careers";
import { cn } from "@/lib/utils/cn";

export function CareersExperience() {
  const [active, setActive] = useState<(typeof disciplines)[number]["id"]>(
    disciplines[0].id,
  );
  const current = disciplines.find((d) => d.id === active) ?? disciplines[0];

  return (
    <>
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-ink pt-36 pb-24 text-white"
      >
        <Container>
          <Meta>Careers</Meta>
          <h1 className="text-display mt-8">
            Build
            <br />
            Products
            <br />
            That
            <br />
            Matter.
          </h1>
        </Container>
      </section>

      <section data-nav-theme="light" className="bg-warm py-28 text-ink">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <h2 className="text-heading lg:col-span-5">
              Working at a product company.
            </h2>
            <div className="space-y-12 lg:col-span-7">
              {culture.map((item) => (
                <article key={item.title} className="border-t border-ink/10 pt-8">
                  <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-ink/55">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section data-nav-theme="dark" className="bg-graphite py-28 text-white">
        <Container>
          <Meta>Disciplines</Meta>
          <ul className="mt-12">
            {disciplines.map((item) => {
              const on = item.id === active;
              return (
                <li key={item.id} className="border-t border-white/10 last:border-b">
                  <button
                    type="button"
                    onClick={() => setActive(item.id)}
                    onMouseEnter={() => setActive(item.id)}
                    className="flex w-full items-baseline justify-between py-6 text-left sm:py-8"
                  >
                    <span
                      className={cn(
                        "font-display text-4xl tracking-tight uppercase sm:text-6xl",
                        on ? "text-white" : "text-white/30",
                      )}
                    >
                      {item.label}
                    </span>
                    <span className={cn("text-meta", on ? "text-violet" : "text-white/30")}>
                      {item.index}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-10 max-w-lg text-lg text-white/50">{current.body}</p>
        </Container>
      </section>

      <section data-nav-theme="light" className="bg-warm py-28 text-ink">
        <Container>
          <Meta className="text-ink/45">Open positions</Meta>
          <h2 className="text-heading mt-8">Roles, when they exist.</h2>
          {vacancies.length === 0 ? (
            <div className="mt-16 border-t border-ink/10 py-16">
              <p className="font-display text-3xl tracking-tight">
                No open positions right now.
              </p>
              <p className="mt-4 max-w-md text-ink/55">
                This list is ready for real vacancies. Until then, we still
                welcome considered introductions.
              </p>
            </div>
          ) : (
            <ul className="mt-16">
              {vacancies.map((role) => (
                <li
                  key={role.id}
                  className="flex flex-col gap-2 border-t border-ink/10 py-8 sm:flex-row sm:justify-between"
                >
                  <span className="font-display text-2xl">{role.title}</span>
                  <span className="text-meta text-ink/40">
                    {role.discipline} · {role.type} · {role.location}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8">
            <ArrowLink href="/contact" tone="ink">
              Introduce Yourself
            </ArrowLink>
          </div>
        </Container>
      </section>
    </>
  );
}
