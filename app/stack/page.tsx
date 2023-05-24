"use client";

import { TypographyH1, TypographyLead } from "@/components/Typography";
import Header from "@/components/common/Header";
import FavouriteTech from "@/components/homepage/FavouriteTech";
import { AnimatedSection } from "@/components/ui/section";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getAnimationVariants } from "@/lib/utils";
import { Variants, motion } from "framer-motion";

const animation = getAnimationVariants("fadeInFromBottom");

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Stack() {
  return (
    <AnimatedSection
      variants={animation}
      initial="hidden"
      animate="visible"
      className="mt-0"
    >
      <TooltipProvider>
        <Header variants={childVariants} />
        <motion.div variants={childVariants} className="mt-10 mb-6">
          <TypographyH1> Stack</TypographyH1>
          <TypographyLead>
            Below you'll find a list of technologies I am currently infatuated
            with. I am always looking to learn new things, so this list is
            subject to change rapidly!
          </TypographyLead>
        </motion.div>
        <FavouriteTech variants={childVariants} />
      </TooltipProvider>
    </AnimatedSection>
  );
}
