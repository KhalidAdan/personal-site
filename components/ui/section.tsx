import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as React from "react";

const Div = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col mt-12", className)} {...props} />
));
Div.displayName = "Section";

const AnimatedSection = motion(Div, { forwardMotionProps: true });

export { AnimatedSection };
