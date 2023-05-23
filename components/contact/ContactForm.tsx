"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Variants, motion } from "framer-motion";
import { Loader2, Mail } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ContactFormProps extends React.HTMLAttributes<HTMLFormElement> {
  variants: Variants;
}

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm({ variants }: ContactFormProps) {
  const [isSending, setIsSending] = React.useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSending(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully.");
    } else {
      console.log("Message failed to send.");
    }
    setIsSending(false);
    reset();
  };

  return (
    <motion.form
      variants={variants}
      name="contact-form"
      className="flex flex-col mt-8 pt-6 mb-2 border-t border-light/10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4">
        <div className="w-full">
          <label htmlFor="name" className="hidden sr-only">
            Name
          </label>
          <Input
            className="dark:bg-accent-gray/50 dark:placeholder:text-light/50 border-none placeholder-shown:motion-safe:focus:animate-pulse"
            placeholder="Name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="hidden sr-only">
            E-mail
          </label>
          <Input
            className="dark:bg-accent-gray/50 dark:placeholder:text-light/50 border-none placeholder-shown:motion-safe:focus:animate-pulse"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
      </div>
      <Textarea
        className="mt-4 dark:bg-accent-gray/50 dark:placeholder:text-light/50 border-none resize-none placeholder-shown:motion-safe:focus:animate-pulse"
        placeholder="Type your message here."
        rows={6}
        {...register("message", { required: true })}
      />
      <Button
        className="flex gap-2 items-center mt-4 w-full"
        variant="secondary"
        type="submit"
        disabled={isSending}
      >
        {isSending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Mail className="h-6 w-6" />
        )}
        Send transmission
      </Button>
    </motion.form>
  );
}
