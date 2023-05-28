import { TypographyMuted } from "@/components/Typography";
import AnimatedTurbulence from "@/components/common/AnimatedTurbulence";
import Nav from "@/components/common/Nav";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Khalid Adan",
    template: "%s | Khalid Adan",
  },
  description: "Personal website of Khalid Adan",
  openGraph: {
    title: "Khalid Adan",
    description: "Developer and Next.js enthusiast.",
    url: "https://khld.dev",
    siteName: "Khalid Adan",
    locale: "en-CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-full">
      <body className={inter.className}>
        <main className="w-full">
          <section className="flex flex-col sm:flex-row container max-w-[662px] h-full pt-8 pb-10 px-4 w-full">
            <Nav />
            <div className="flex flex-col w-full">{children}</div>
          </section>
        </main>
        <div className="flex justify-center pt-8 pb-6 bottom-0">
          <TypographyMuted>
            {" "}
            &#169; KHLD.DEV {new Date().getFullYear()}.
          </TypographyMuted>
        </div>
        <AnimatedTurbulence />
      </body>
    </html>
  );
}
