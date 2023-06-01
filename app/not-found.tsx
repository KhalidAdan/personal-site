import {
  TypographyH1,
  TypographyMuted,
  TypographySmall,
} from "@/components/Typography";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <TypographySmall>404</TypographySmall>
        <TypographyH1>Page not found</TypographyH1>
        <TypographyMuted>
          I don&apos;t know how you got so lost, but maybe you should try going
          back home? Or contact me if you think this is a mistake.
        </TypographyMuted>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="/">
            <Button>Go back home</Button>
          </a>
          <a href="/contact">
            <Button variant="outline">Contact me</Button>
          </a>
        </div>
      </div>
    </main>
  );
}
