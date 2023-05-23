import { Variants, motion } from "framer-motion";
import { TypographyH1, TypographyLead } from "../Typography";

export default function ContactCTA({ variants }: { variants: Variants }) {
  return (
    <motion.div variants={variants} className="flex flex-col mb-4 mt-8">
      <TypographyH1>Say hello!</TypographyH1>

      <TypographyLead>
        Looking for a developer to join your team? Or maybe you just want to say
        hi? Feel free to reach out to me using the form below.
      </TypographyLead>
    </motion.div>
  );
}
