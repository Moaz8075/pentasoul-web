import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Domains } from "@/components/sections/Domains";
import { ProductsSequence } from "@/components/sections/ProductsSequence";
import { Future } from "@/components/sections/Future";
import { CompanyStory } from "@/components/sections/CompanyStory";
import { Principles } from "@/components/sections/Principles";
import { People } from "@/components/sections/People";
import { HomeContact } from "@/components/sections/HomeContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Domains />
      <ProductsSequence />
      <Future />
      <CompanyStory />
      <Principles />
      <People />
      <HomeContact />
    </>
  );
}
