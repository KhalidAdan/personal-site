import { TypographyLarge, TypographyMutedP } from "@/components/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
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
    </div>
  );
}
