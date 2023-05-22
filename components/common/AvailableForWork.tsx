"use client";

import { TypographySmall } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Variants, motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function AvailableForWork({
  variants,
  contactMe,
}: {
  variants: Variants;
  contactMe: boolean;
}) {
  return (
    <motion.div variants={variants}>
      <div className="flex items-end gap-1">
        <span className="relative flex h-3 w-3 mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <TypographySmall>Available for new opportunities</TypographySmall>
      </div>
      {contactMe && (
        <div className="mt-4">
          <Link href="/contact">
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Contact me
            </Button>
          </Link>
        </div>
      )}
    </motion.div>
  );
}
