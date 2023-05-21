import ContactForm from "@/components/ContactForm";
import {
  TypographyH3,
  TypographyLarge,
  TypographyMutedP,
  TypographySmall,
} from "@/components/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";

export default function Contact() {
  return (
    <div>
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

      <div className="flex flex-col pt-6 gap-6">
        <TypographyH3>Say hello!</TypographyH3>

        <TypographyMutedP>
          Looking for a developer to help you join your team? Or maybe you just
          want to say hi? Feel free to reach out to me using the form below.
        </TypographyMutedP>

        <div className="flex items-center gap-1 pb-16 border-b border-light/10">
          <svg className="w-4 h-4">
            <circle cx="7" cy="9" r="6" fill="green" />
          </svg>
          <TypographySmall>Available for new opportunities</TypographySmall>
        </div>

        <div className="flex gap-7">
          <ContactForm />
        </div>
        <TypographySmall>
          <span className="flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            <span>Avg. response time: </span>
            <span className="text-muted-foreground ml-1"> 24 hours.</span>
          </span>
        </TypographySmall>
      </div>
    </div>
  );
}
