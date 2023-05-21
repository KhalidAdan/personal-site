"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TypographyLarge, TypographyMuted } from "./Typography";

export default function Experience() {
  return (
    <motion.div
      className="flex justify-between mt-16 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
    >
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
