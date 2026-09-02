export const disciplines = [
  {
    id: "engineering",
    index: "01",
    label: "Engineering",
    body: "Build systems that stay clear under pressure. Quality is part of the product, not a later phase.",
  },
  {
    id: "product",
    index: "02",
    label: "Product",
    body: "Hold the problem. Decide what matters. Keep the work honest when it would be easier to add more.",
  },
  {
    id: "design",
    index: "03",
    label: "Design",
    body: "Make complex operations feel calm. Shape interfaces people can trust without thinking about them.",
  },
  {
    id: "business",
    index: "04",
    label: "Business",
    body: "Grow useful products in markets that already have real work happening — schools, practices, shops, streets.",
  },
  {
    id: "operations",
    index: "05",
    label: "Operations",
    body: "Keep the company as considered as the software. Ownership is a way of working, not a job title.",
  },
] as const;

export const culture = [
  {
    title: "A product company",
    body: "PentaSoul creates, owns and grows technology products. The work is to make things people actually use — then stay with those things as they grow.",
  },
  {
    title: "Ownership",
    body: "People here are trusted with real problems. That means judgement, follow-through and care for the details that users never see.",
  },
  {
    title: "Learning",
    body: "We work across education, legal, business and commerce. The range is the education — each product teaches the next.",
  },
  {
    title: "Product thinking",
    body: "We start with the difficulty, not the stack. Technology is the means. Usefulness is the measure.",
  },
  {
    title: "Engineering quality",
    body: "Software that runs a school day or a hearing list has to be dependable. Craft is not decoration.",
  },
  {
    title: "Different industries",
    body: "The same company can work on a classroom, a case file and a shop counter. Curiosity across domains is part of the job.",
  },
] as const;

export type Vacancy = {
  id: string;
  title: string;
  discipline: string;
  type: string;
  location: string;
};

export const vacancies: Vacancy[] = [];
