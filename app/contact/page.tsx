"use client";

import AvailableForWork from "@/components/common/AvailableForWork";
import Header from "@/components/common/Header";
import AverageResponseTime from "@/components/contact/AverageResponseTime";
import ContactCTA from "@/components/contact/ContactCTA";
import ContactForm from "@/components/contact/ContactForm";
import { AnimatedSection } from "@/components/ui/section";
import { Variants } from "framer-motion";

const slideInXAxis: Variants = {
  hidden: {
    opacity: 0,
    x: -2000,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, x: -2000 },
  visible: { opacity: 1, x: 0 },
};

export default function Contact() {
  return (
    <AnimatedSection
      variants={slideInXAxis}
      initial="hidden"
      animate="visible"
      className="mt-0"
    >
      <Header variants={childVariants} />
      <ContactCTA variants={childVariants} />
      <AvailableForWork variants={childVariants} contactMe={false} />
      <ContactForm variants={childVariants} />
      <AverageResponseTime variants={childVariants} />
    </AnimatedSection>
  );
}
