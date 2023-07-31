"use client";

import AvailableForWork from "@/components/common/AvailableForWork";
import Header from "@/components/common/Header";
import AverageResponseTime from "@/components/contact/AverageResponseTime";
import ContactCTA from "@/components/contact/ContactCTA";
import ContactForm from "@/components/contact/ContactForm";
import { AnimatedSection } from "@/components/ui/section";
import { getAnimationVariants } from "@/lib/utils";
import { Variants } from "framer-motion";

const childVariants: Variants = {
  hidden: { opacity: 0.0001, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const animation = getAnimationVariants("fadeInFromBottom");

export default function ContactPage() {
  return (
    <AnimatedSection
      variants={animation}
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
