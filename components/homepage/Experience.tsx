import { TypographyLarge, TypographyMutedP } from "@/components/Typography";
import { Variants } from "framer-motion";
import { AnimatedSection } from "../ui/section";

export default function Experience({ variants }: { variants: Variants }) {
  return (
    <AnimatedSection variants={variants}>
      <div className="flex justify-between items-center w-full mb-2">
        <TypographyLarge>My experience</TypographyLarge>
        {/* <Link href="/resume">
          <TypographyMuted>
            <div className="flex gap-2 items-center">
              <p>Read more</p>
              <ArrowRight className="mr-2 h-6 w-6" />
            </div>
          </TypographyMuted>
        </Link> */}
      </div>
      <TypographyMutedP>
        I&apos;ve worked with a variety of large enterprise clients as a
        contractor and as a full-time engineer with startups and in the public
        sector. I am comfortable across the stack, and have lead backend and
        frotend teams and in multiple different stacks and languages.
      </TypographyMutedP>
    </AnimatedSection>
  );
}
