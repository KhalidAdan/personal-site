"use client";

import { TypographyMuted } from "@/components/Typography";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <motion.div className="pb-8">
      <Link href="/">
        <TypographyMuted>KHLD.DEV</TypographyMuted>
      </Link>
    </motion.div>
  );
}
