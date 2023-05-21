"use client";

import { TypographyLarge, TypographyMutedP } from "@/components/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Products() {
  return (
    <motion.div
      className="flex flex-col mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between mt-16 mb-4">
        <TypographyLarge>Products</TypographyLarge>
      </div>

      <div>
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              className="flex gap-4 items-start px-6 py-4 hover:bg-light/20 rounded-md cursor-pointer"
              href="https://eto.news"
              target="_blank"
            >
              <div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/eto-logo.jpg" alt="Eto" />
                  <AvatarFallback className="bg-accent-gray ">
                    Eto.
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <TypographyLarge>Eto</TypographyLarge>
                <TypographyMutedP>
                  An AI product that helps you stay up to date with the latest
                  news, without the noise. Currently on hiatus.
                </TypographyMutedP>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4 items-start px-6 py-4 hover:bg-light/5 rounded-md cursor-pointer"
              href="#"
            >
              <div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/skillbox.jpg" alt="Skillbox" />
                  <AvatarFallback className="bg-accent-gray ">
                    SB
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <TypographyLarge>Skillbox</TypographyLarge>
                <TypographyMutedP>
                  Skillbox is a corporate learning tool that helps companies
                  build a culture of learning.
                </TypographyMutedP>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
