import About from "@/components/homepage/About";
import AvailableForWork from "@/components/homepage/AvailableForWork";
import Experience from "@/components/homepage/Experience";
import FavouriteTech from "@/components/homepage/FavouriteTech";
import Header from "@/components/homepage/Header";
import Products from "@/components/homepage/Products";
import { TooltipProvider } from "@/components/ui/tooltip";

const availableForWork = true;

export default function Home() {
  return (
    <>
      <TooltipProvider>
        <Header />
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
