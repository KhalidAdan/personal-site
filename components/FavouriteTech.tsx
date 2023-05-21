"use client";

import { motion } from "framer-motion";
import { TooltipHelper } from "./TooltipHelper";
import { TypographyLarge } from "./Typography";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function FavouriteTech() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
    >
      <TypographyLarge>Favourite technologies</TypographyLarge>

      <div className="grid grid-cols-4 md:grid-cols-6 mt-4 md:gap-x-8 gap-y-6">
        <TooltipHelper title="Next.js">
          <Avatar className="h-14 w-14 dark:bg-white rounded-full dark:border dark:border-white">
            <AvatarImage src="/next.svg" alt="Next.js" />
            <AvatarFallback className="bg-accent-gray ">Next</AvatarFallback>
          </Avatar>
        </TooltipHelper>

        <TooltipHelper title="React">
          <Avatar className="h-14 w-14">
            <AvatarImage src="/react.svg" alt="React" />
            <AvatarFallback className="bg-accent-gray ">React</AvatarFallback>
          </Avatar>
        </TooltipHelper>

        <TooltipHelper title="Prisma">
          <Avatar className="h-14 w-14">
            <AvatarImage src="/prisma.bmp" alt="Prisma" />
            <AvatarFallback className="bg-accent-gray ">Prisma</AvatarFallback>
          </Avatar>
        </TooltipHelper>

        <TooltipHelper title="Postgres">
          <Avatar className="h-14 w-14 rounded">
            <AvatarImage src="/psql.svg" alt="Postgres" />
            <AvatarFallback className="bg-accent-gray ">
              Postgres
            </AvatarFallback>
          </Avatar>
        </TooltipHelper>

        <TooltipHelper title="Tailwind">
          <Avatar className="h-14 w-14">
            <AvatarImage src="/tailwind.bmp" alt="Tailwind" />
            <AvatarFallback className="bg-accent-gray ">
              Tailwind
            </AvatarFallback>
          </Avatar>
        </TooltipHelper>

        <TooltipHelper title="VSCode">
          <Avatar className="h-14 w-14">
            <AvatarImage src="/vscode.bmp" alt="VSCode" />
            <AvatarFallback className="bg-accent-gray ">VSCode</AvatarFallback>
          </Avatar>
        </TooltipHelper>

        <TooltipHelper title="ChatGPT">
          <Avatar className="h-14 w-14">
            <AvatarImage src="/ChatGPT.bmp" alt="ChatGPT" />
            <AvatarFallback className="bg-accent-gray ">ChatGPT</AvatarFallback>
          </Avatar>
        </TooltipHelper>

        <TooltipHelper title="Python">
          <Avatar className="h-14 w-14">
            <AvatarImage src="/python.png" alt="python" />
            <AvatarFallback className="bg-accent-gray ">Python</AvatarFallback>
          </Avatar>
        </TooltipHelper>
      </div>
    </motion.div>
  );
}
