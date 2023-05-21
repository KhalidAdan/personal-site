"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { TypographySmall } from "./Typography";
import { Button } from "./ui/button";

export default function AvailableForWork() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-1">
        <svg className="w-4 h-4">
          <circle cx="7" cy="9" r="6" fill="green" />
        </svg>
        <TypographySmall>Available for new opportunities</TypographySmall>
      </div>
      <div className="mt-4">
        <Link href="/contact">
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Contact me
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
