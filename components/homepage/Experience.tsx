"use client";

import { TypographyLarge, TypographyMuted } from "@/components/Typography";
import { Variants, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Experience({ variants }: { variants: Variants }) {
  return (
    <motion.div variants={variants} className="flex justify-between mt-8 mb-4">
      <TypographyLarge>My experience</TypographyLarge>
      <Link href="/resume">
        <TypographyMuted>
          <div className="flex gap-2 items-center">
            <TypographyLarge>All</TypographyLarge>
            <ArrowRight className="mr-2 h-6 w-6" />
          </div>
        </TypographyMuted>
      </Link>
    </motion.div>
  );
}
