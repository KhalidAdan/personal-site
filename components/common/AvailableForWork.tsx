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
      <div className="flex items-center gap-1">
        <svg className="w-4 h-4">
          <circle cx="7" cy="9" r="6" fill="green" />
        </svg>
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
