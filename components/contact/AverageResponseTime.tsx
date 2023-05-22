import { Variants, motion } from "framer-motion";
import { Clock } from "lucide-react";
import { TypographySmall } from "../Typography";

export default function AverageResponseTime({
  variants,
}: {
  variants: Variants;
}) {
  return (
    <motion.div variants={variants} className="flex gap-4">
      <TypographySmall>
        <span className="flex items-center">
          <Clock className="mr-2 h-5 w-5" />
          <span>Avg. response time: </span>
          <span className="text-muted-foreground ml-1"> 24 hours.</span>
        </span>
      </TypographySmall>
    </motion.div>
  );
}
