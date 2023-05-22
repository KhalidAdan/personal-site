"use client";

import { TypographyH3, TypographyMutedP } from "@/components/Typography";
import AvailableForWork from "@/components/common/AvailableForWork";
import Header from "@/components/common/Header";
import AverageResponseTime from "@/components/contact/AverageResponseTime";
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
      delayChildren: 0.2,
      staggerChildren: 0.3,
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
        <motion.div variants={childVariants}>
          <TypographyH3>Say hello!</TypographyH3>

          <TypographyMutedP>
            Looking for a developer to help you join your team? Or maybe you
            just want to say hi? Feel free to reach out to me using the form
            below.
          </TypographyMutedP>
        </motion.div>

        <AvailableForWork variants={childVariants} contactMe={false} />

        <ContactForm variants={childVariants} />
        <AverageResponseTime variants={childVariants} />
      </div>
    </motion.div>
  );
}
