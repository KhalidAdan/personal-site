"use client";

import { Variants } from "framer-motion";
import { TypographyH1, TypographyLead } from "../Typography";
import { AnimatedSection } from "../ui/section";

export default function About({ variants }: { variants: Variants }) {
  return (
    <AnimatedSection variants={variants} className="mt-0">
      <TypographyH1>
        I help humans build software that solves problems.
      </TypographyH1>
      <TypographyLead>
        I&apos;m Khalid Adan, a software developer working out of Ottawa,
        Canada. I&apos;ve lead software teams and built products for start-ups,
        huge enterprises and the public sector. Currently, I&apos;m hacking on a
        product called Skillbox, and hope to show something soon!
      </TypographyLead>
    </AnimatedSection>
  );
}
