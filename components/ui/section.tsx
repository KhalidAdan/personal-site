import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as React from "react";

const Section = React.forwardRef<
  React.ElementRef<"section">,
  React.ComponentPropsWithoutRef<"section">
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("flex flex-col mt-12", className)}
    {...props}
  />
));
Section.displayName = "Section";

const AnimatedSection = motion(Section, { forwardMotionProps: true });

export { AnimatedSection, Section };
