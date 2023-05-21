"use client";

import { motion } from "framer-motion";
import { TypographyH3, TypographyLead } from "../Typography";

export default function About() {
  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
    >
      <TypographyH3>
        I help humans build software that solves problems.
      </TypographyH3>
      <TypographyLead>
        I&apos;m Khalid Adan, a software developer working out of Ottawa,
        Canada. I&apos;ve lead software teams and built products for start-ups,
        huge enterprises and the public sector. Currently, I&apos;m hacking on a
        product called Skillbox, and hope to show something soon!
      </TypographyLead>
    </motion.div>
  );
}
