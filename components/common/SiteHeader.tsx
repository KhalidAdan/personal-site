"use client";

import { TypographyMuted } from "@/components/Typography";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <div className="pb-8">
      <Link href="/">
        <TypographyMuted>KHLD.DEV</TypographyMuted>
      </Link>
    </div>
  );
}
