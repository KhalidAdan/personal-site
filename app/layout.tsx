import { TypographyMuted } from "@/components/Typography";
import SiteHeader from "@/components/common/SiteHeader";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "khld.dev",
  description: "Personal website of Khalid Adan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full">
          <div className="container max-w-[512px] h-full pt-8 pb-10 px-4">
            <SiteHeader />
            {children}
          </div>
        </main>
        <div className="flex justify-center pt-8 pb-6">
          <TypographyMuted>
            {" "}
            &#169; KHLD.DEV {new Date().getFullYear()}.
          </TypographyMuted>
        </div>
      </body>
    </html>
  );
}
