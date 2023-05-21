"use client";

import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  return (
    <form>
      <div className="flex gap-4">
        <Input
          className="dark:bg-accent-gray/50 dark:placeholder:text-light/50 border-none"
          type="name"
          placeholder="Name"
        />
        <Input
          className="dark:bg-accent-gray/50 dark:placeholder:text-light/50 border-none"
          type="email"
          placeholder="Email"
        />
      </div>
      <Textarea
        className="mt-4 dark:bg-accent-gray/50 dark:placeholder:text-light/50 border-none resize-none"
        placeholder="Type your message here."
        rows={6}
      />
      <Button className="mt-4 w-full" variant="secondary" type="submit">
        Send
      </Button>
    </form>
  );
}
