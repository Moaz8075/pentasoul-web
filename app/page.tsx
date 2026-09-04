import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Philosophy } from "@/components/sections/Philosophy";
import { ContactCta } from "@/components/sections/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Philosophy />
      <ContactCta />
    </>
  );
}
