"use client";

import { TypographyH1 } from "@/components/Typography";
import AnimatedTurbulence from "@/components/common/AnimatedTurbulence";
import { AnimatedSection } from "@/components/ui/section";
import { getAnimationVariants } from "@/lib/utils";
import { Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const animation = getAnimationVariants("fadeInFromBottom");

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPost() {
  return (
    <AnimatedSection
      variants={animation}
      initial="hidden"
      animate="visible"
      className="mt-0"
    >
      <Link
        href="/blog"
        className="flex gap-x-1 text-muted-foreground uppercase text-sm mb-6 items-center"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>
      <AnimatedSection variants={childVariants}>
        <TypographyH1>Title</TypographyH1>
      </AnimatedSection>
      <AnimatedTurbulence />
    </AnimatedSection>
  );
}
