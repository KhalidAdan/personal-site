"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Variants, motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactForm({ variants }: { variants: Variants }) {
  return (
    <motion.div variants={variants} className="flex gap-7">
      <form name="contact-form" className="w-full">
        <div className="flex gap-4">
          <Input
            className="dark:bg-accent-gray/50 dark:placeholder:text-light/50 border-none"
            type="name"
            placeholder="Name"
            required
          />
          <Input
            className="dark:bg-accent-gray/50 dark:placeholder:text-light/50 border-none"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <Textarea
          className="mt-4 dark:bg-accent-gray/50 dark:placeholder:text-light/50 border-none resize-none"
          placeholder="Type your message here."
          rows={6}
          required
        />
        <Button
          className="flex gap-2 items-center mt-4 w-full"
          variant="secondary"
          type="submit"
        >
          <Mail className="h-6 w-6" /> Send transmission
        </Button>
      </form>
    </motion.div>
  );
}
