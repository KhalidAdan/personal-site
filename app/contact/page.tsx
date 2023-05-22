"use client";

import AvailableForWork from "@/components/common/AvailableForWork";
import Header from "@/components/common/Header";
import AverageResponseTime from "@/components/contact/AverageResponseTime";
import ContactCTA from "@/components/contact/ContactCTA";
import ContactForm from "@/components/contact/ContactForm";
import { Variants, motion } from "framer-motion";

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
    <motion.div variants={slideInXAxis} initial="hidden" animate="visible">
      <Header variants={childVariants} />

      <div className="flex flex-col pt-6 gap-6">
        <ContactCTA variants={childVariants} />

        <AvailableForWork variants={childVariants} contactMe={false} />

        <ContactForm variants={childVariants} />
        <AverageResponseTime variants={childVariants} />
      </div>
    </motion.div>
  );
}
