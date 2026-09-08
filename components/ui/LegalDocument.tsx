import type { LegalSection } from "@/data/legal";

export function LegalDocument({
  updated,
  sections,
}: {
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="max-w-3xl text-[16px] leading-[1.75] text-white/70">
      <p className="text-sm text-white/40">Last updated: {updated}</p>
      <div className="mt-10 grid gap-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[20px] font-semibold tracking-tight text-white">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
