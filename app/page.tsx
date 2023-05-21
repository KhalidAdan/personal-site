import About from "@/components/About";
import AvailableForWork from "@/components/AvailableForWork";
import Experience from "@/components/Experience";
import FavouriteTech from "@/components/FavouriteTech";
import Products from "@/components/Products";
import { TypographyLarge, TypographyMutedP } from "@/components/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TooltipProvider } from "@/components/ui/tooltip";

const availableForWork = true;

export default function Home() {
  return (
    <>
      <TooltipProvider>
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
          <About />
          {availableForWork && <AvailableForWork />}
        </div>
        <Experience />
        <Products />
        <FavouriteTech />
      </TooltipProvider>
    </>
  );
}
