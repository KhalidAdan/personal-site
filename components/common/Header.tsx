import { TypographyLarge, TypographyMutedP } from "@/components/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Variants, motion } from "framer-motion";

export default function Header({ variants }: { variants: Variants }) {
  return (
    <motion.div variants={variants} className="flex gap-4">
      <div>
        <Avatar className="h-16 w-16">
          <AvatarImage src="/smallUI.jpg" alt="Khalid!" />
          <AvatarFallback>KA</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <TypographyLarge>Khalid Adan</TypographyLarge>
        <TypographyMutedP>
          Senior software developer and science fiction nerd!
        </TypographyMutedP>
      </div>
    </motion.div>
  );
}
