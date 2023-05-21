"use client";

import { TypographyLarge, TypographyMutedP } from "@/components/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <Avatar className="h-16 w-16">
          <AvatarImage src="/smallUI.jpg" alt="Khalid!" />
          <AvatarFallback>KA</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <TypographyLarge>Khalid Adan</TypographyLarge>
        <TypographyMutedP>
          Senior software developer and Next.js enthusiast!
        </TypographyMutedP>
      </div>
    </motion.div>
  );
}
