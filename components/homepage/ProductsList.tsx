import { TypographyLarge } from "@/components/Typography";
import { Variants } from "framer-motion";
import { AnimatedSection } from "../ui/section";
import ProductListItem from "./ProductListItem";

export interface Product {
  name: string;
  description: string;
  image: string;
  href: string;
}

const products: Product[] = [
  {
    name: "Eto.",
    description: "An AI news product.",
    image: "/eto-logo.jpg",
    href: "https://eto.news",
  },
  {
    name: "Skillbox",
    description: "A platform for building a culture of learning.",
    image: "/skillbox-logo.png",
    href: "https://skillbox.so",
  },
];

export default function ProductsList({ variants }: { variants: Variants }) {
  return (
    <AnimatedSection variants={variants}>
      <div className="flex justify-between">
        <TypographyLarge>Products</TypographyLarge>
      </div>

      <div>
        <ul className="flex flex-col gap-1 mt-2">
          {products.map((product, index) => (
            <li key={index}>
              <ProductListItem
                name={product.name}
                description={product.description}
                image={product.image}
                href={product.href}
              />
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
