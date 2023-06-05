import { TypographyLarge } from "@/components/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Variants } from "framer-motion";
import { TooltipHelper } from "../TooltipHelper";
import { AnimatedSection } from "../ui/section";

export default function FavouriteTech({ variants }: { variants: Variants }) {
  return (
    <AnimatedSection variants={variants}>
      <TypographyLarge>Favourite technologies</TypographyLarge>

      <div className="grid grid-cols-4 md:grid-cols-6 md:gap-x-8 gap-y-6 pt-6">
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

        <TooltipHelper title="Typescript">
          <Avatar className="h-14 w-14 bg-black rounded-lg">
            <AvatarImage src="/ts.svg" alt="Typescript" />
            <AvatarFallback className="bg-accent-gray ">
              Typescript
            </AvatarFallback>
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

        <TooltipHelper title="React Email">
          <Avatar className="h-14 w-14 bg-black">
            <AvatarImage src="/react-email.svg" alt="React Email" />
            <AvatarFallback className="bg-accent-gray ">
              React Email
            </AvatarFallback>
          </Avatar>
        </TooltipHelper>

        <TooltipHelper title="Postmark">
          <Avatar className="h-14 w-14">
            <AvatarImage src="/postmark.bmp" alt="Postmark" />
            <AvatarFallback className="bg-accent-gray ">
              Postmark
            </AvatarFallback>
          </Avatar>
        </TooltipHelper>

        <TooltipHelper title="shadcn/ui">
          <Avatar className="h-14 w-14 bg-black dark:bg-white rounded-full dark:border dark:border-white">
            <AvatarImage src="/ui.shad.svg" alt="UI by shad.cn" />
            <AvatarFallback className="bg-black text-white text-xl">
              UI
            </AvatarFallback>
          </Avatar>
        </TooltipHelper>
      </div>
    </AnimatedSection>
  );
}
