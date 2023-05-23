"use client";

import { TypographyLarge, TypographyMutedP } from "@/components/Typography";
import { Variants } from "framer-motion";
import { AnimatedSection } from "../ui/section";

export default function Experience({ variants }: { variants: Variants }) {
  return (
    <AnimatedSection variants={variants}>
      <div className="flex justify-between w-full mb-2">
        <TypographyLarge>My experience</TypographyLarge>
        {/* <Link href="/resume">
          <TypographyMuted>
            <div className="flex gap-2 items-center">
              <TypographyLarge>Read more</TypographyLarge>
              <ArrowRight className="mr-2 h-6 w-6" />
            </div>
          </TypographyMuted>
        </Link> */}
      </div>
      <TypographyMutedP>
        I&apos;ve worked with a variety of large entreprise clients as a
        contractor and as a full-time engineer with startups and in the public
        sector. I&apos;ve worked across the stack, and lead backend and frotend
        teams and in multiple different stacks and languages.
      </TypographyMutedP>
    </AnimatedSection>
  );
}
