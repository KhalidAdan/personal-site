"use client";

import AvailableForWork from "@/components/common/AvailableForWork";
import Header from "@/components/common/Header";
import About from "@/components/homepage/About";
import FavouriteTech from "@/components/homepage/FavouriteTech";
import ProductsList from "@/components/homepage/ProductsList";
import { AnimatedSection } from "@/components/ui/section";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getAnimationVariants } from "@/lib/utils";
import { Variants } from "framer-motion";

const availableForWork = true;

const childVariants: Variants = {
  hidden: { opacity: 0.0001, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const animation = getAnimationVariants("fadeInFromBottom");

export default function HomePage() {
  return (
    <AnimatedSection
      variants={animation}
      initial="hidden"
      animate="visible"
      className="mt-0"
    >
      <Header variants={childVariants} />
      <div className="flex flex-col gap-6 pt-8">
        <About variants={childVariants} />
        {availableForWork && (
          <AvailableForWork variants={childVariants} contactMe />
        )}
      </div>
      <ProductsList variants={childVariants} />
      <TooltipProvider>
        <FavouriteTech variants={childVariants} />
      </TooltipProvider>
    </AnimatedSection>
  );
}
