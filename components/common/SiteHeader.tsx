"use client";

import { TypographyMuted } from "@/components/Typography";
import useHover from "@/hooks/useHover";
import { motion } from "framer-motion";
import Link from "next/link";

const funOpinion = [
  "STAR WARS IS BETTER THAN STAR TREK!",
  "THE COMIC BOOKS ARE BETTER THAN MOVIES!",
  "SERVER FIRST REACT == GOOD THING!",
];

export default function SiteHeader() {
  const [ref, isHovered] = useHover<HTMLDivElement>();
  const randomOpinion =
    funOpinion[Math.floor(Math.random() * funOpinion.length)];

  return (
    <div className="flex pb-8 gap-2 items-center" ref={ref}>
      <Link href="/">
        <TypographyMuted>KHLD.DEV</TypographyMuted>
      </Link>{" "}
      {isHovered && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm"
        >
          =&gt;
        </motion.span>
      )}
      {isHovered && (
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted-foreground text-sm"
        >
          {randomOpinion}
        </motion.p>
      )}
    </div>
  );
}
