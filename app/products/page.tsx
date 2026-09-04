import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProductCard } from "@/components/products/ProductCard";
import { allProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "A growing portfolio of useful technology products.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title={
          <>
            Products creating{" "}
            <span className="text-purple">real impact.</span>
          </>
        }
        body="PentaSoul builds products around real work — education, retail, local commerce and law."
      />
      <section className="bg-white pb-24">
        <Container className="grid gap-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Container>
      </section>
    </>
  );
}
