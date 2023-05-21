"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, Mail } from "lucide-react";
import { TypographyH3, TypographyLead, TypographySmall } from "./Typography";

export default function About() {
  return (
    <motion.div
      className="flex flex-col gap-7 pt-8"
      initial={{
        x: -2000,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <TypographyH3>
        I help humans build software that solves problems.
      </TypographyH3>
      <TypographyLead>
        I'm Khalid Adan, a software developer working out of Ottawa, Canada.
        I've lead software teams and built products for start-ups, huge
        enterprises and the public sector. Currently, I'm hacking on a product
        called Skillbox, and hope to show something soon!
      </TypographyLead>

      <div className="flex items-center gap-1">
        <svg className="w-4 h-4">
          <circle cx="7" cy="9" r="6" fill="green" />
        </svg>
        <TypographySmall>Available for new opportunities</TypographySmall>
      </div>
      <div>
        <Link href="/contact">
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Contact me
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
