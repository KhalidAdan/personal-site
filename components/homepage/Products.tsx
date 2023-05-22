"use client";

import { TypographyLarge, TypographyMutedP } from "@/components/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Variants, motion } from "framer-motion";
import Link from "next/link";

export default function Products({ variants }: { variants: Variants }) {
  return (
    <motion.div variants={variants} className="flex flex-col mb-4">
      <div className="flex justify-between mt-10">
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
                <TypographyMutedP>An AI news product.</TypographyMutedP>
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
                  A platform for building a culture of learning.
                </TypographyMutedP>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
