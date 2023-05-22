"use client";

import AvailableForWork from "@/components/common/AvailableForWork";
import Header from "@/components/common/Header";
import About from "@/components/homepage/About";
import Experience from "@/components/homepage/Experience";
import FavouriteTech from "@/components/homepage/FavouriteTech";
import Products from "@/components/homepage/Products";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Variants, motion } from "framer-motion";

const availableForWork = true;

const fadeInYAxis: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <TooltipProvider>
        <motion.div variants={fadeInYAxis} initial="hidden" animate="visible">
          <Header variants={childVariants} />
          <div className="flex flex-col gap-7 pt-8">
            <About variants={childVariants} />
            {availableForWork && (
              <AvailableForWork variants={childVariants} contactMe />
            )}
          </div>
          <Products variants={childVariants} />
          <Experience variants={childVariants} />
          <FavouriteTech variants={childVariants} />
        </motion.div>
      </TooltipProvider>
    </>
  );
}
