"use client";

import { TypographyLarge, TypographyMutedP } from "@/components/Typography";
import { Variants, motion } from "framer-motion";

export default function Experience({ variants }: { variants: Variants }) {
  return (
    <motion.div variants={variants} className="flex flex-col gap-6">
      <div className="flex justify-between mt-8 w-full">
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
    </motion.div>
  );
}
