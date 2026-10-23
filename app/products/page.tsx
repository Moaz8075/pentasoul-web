import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProductCard } from "@/components/products/ProductCard";
import { Reveal } from "@/components/motion/Reveal";
import { allProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "A growing portfolio of useful technology products.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title={
          <>
            Products creating{" "}
            <span className="text-gradient">real impact.</span>
          </>
        }
        body="PentaSoul builds products around real work — education, retail, local commerce, law and personal finance."
      />
      <section className="pb-16">
        <Container className="grid gap-6">
          {allProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.06}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
