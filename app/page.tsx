import {
  TypographyH3,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyMutedP,
  TypographySmall,
} from "@/components/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex gap-4">
        <div>
          <Avatar className="h-20 w-20">
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
      </div>

      <div className="flex flex-col gap-7 pt-8">
        <TypographyH3>
          I help humans build software that solves problems.
        </TypographyH3>
        <TypographyLead>
          I&apos;m Khalid Adan, a software developer working out of Ottawa,
          Canada. I&apos;ve lead software teams and built products for
          start-ups, huge enterprises and the public sector. Currently, I&apos;m
          hacking on a product called Skillbox, and hope to show something soon!
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
      </div>

      <div className="flex justify-between mt-16 mb-4">
        <TypographyLarge>Products</TypographyLarge>
        <Link href="/products">
          <TypographyMuted>
            <ArrowRight className="mr-2 h-8 w-8" />
          </TypographyMuted>
        </Link>
      </div>

      <div>
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              className="flex gap-4 items-start px-6 py-4 hover:bg-light/5 rounded-md cursor-pointer"
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

      <div className="flex justify-between mt-16 mb-4">
        <TypographyLarge>Stack</TypographyLarge>
      </div>

      <div className="grid sm:grid-cols-4 grid-cols-6 mt-4 md:gap-x-20 gap-y-6">
        <Avatar className="h-14 w-14 bg-white rounded-full border border-white">
          <AvatarImage src="/next.svg" alt="Next.js" />
          <AvatarFallback className="bg-accent-gray ">Next</AvatarFallback>
        </Avatar>

        <Avatar className="h-14 w-14">
          <AvatarImage src="/react.svg" alt="React" />
          <AvatarFallback className="bg-accent-gray ">React</AvatarFallback>
        </Avatar>

        <Avatar className="h-14 w-14">
          <AvatarImage src="/prisma.bmp" alt="Prisma" />
          <AvatarFallback className="bg-accent-gray ">Prisma</AvatarFallback>
        </Avatar>

        <Avatar className="h-14 w-14 rounded">
          <AvatarImage src="/psql.svg" alt="Postgres" />
          <AvatarFallback className="bg-accent-gray ">Postgres</AvatarFallback>
        </Avatar>

        <Avatar className="h-14 w-14">
          <AvatarImage src="/tailwind.bmp" alt="Tailwind" />
          <AvatarFallback className="bg-accent-gray ">Tailwind</AvatarFallback>
        </Avatar>

        <Avatar className="h-14 w-14">
          <AvatarImage src="/vscode.bmp" alt="VSCode" />
          <AvatarFallback className="bg-accent-gray ">VSCode</AvatarFallback>
        </Avatar>

        <Avatar className="h-14 w-14">
          <AvatarImage src="/ChatGPT.bmp" alt="ChatGPT" />
          <AvatarFallback className="bg-accent-gray ">ChatGPT</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
}
