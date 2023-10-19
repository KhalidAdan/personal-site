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
    name: "Palabor",
    description:
      "A platform that rethinks how news should be disseminated. More to come!",
    image: "/sb.svg",
    // href: "https://skillbox.so",
    href: "",
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
