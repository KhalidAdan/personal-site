import { TypographyMuted } from "@/components/Typography";
import Nav from "@/components/common/Nav";
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
          <p className="hidden md:block absolute px-3 py-1.5 bg-dark/10 dark:bg-light/10 rounded-lg m-4 italic">
            This site is a work in progress!
          </p>
          <section className="flex flex-col sm:flex-row container max-w-[662px] h-full pt-8 pb-10 px-4 w-full">
            <Nav />
            <div className="flex flex-col ml-4">{children}</div>
          </section>
        </main>
        <div className="flex justify-center pt-8 pb-6 bottom-0">
          <TypographyMuted>
            {" "}
            &#169; KHLD.DEV {new Date().getFullYear()}.
          </TypographyMuted>
        </div>
      </body>
    </html>
  );
}
