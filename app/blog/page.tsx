"use client";

import { TypographyH1 } from "@/components/Typography";
import Header from "@/components/common/Header";
import { AnimatedSection } from "@/components/ui/section";
import Image from "next/image";

// a Blog has a title, a date, a desc, a tag, an image and content

export default async function BlogList() {
  return (
    <AnimatedSection className="">
      <Header variants={{}}></Header>
      <div className="mt-10">
        <TypographyH1>Some of my words</TypographyH1>
      </div>
      <div className="col-span-2">
        <Image
          src="https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          width={1000}
          height={500}
          alt="AI"
        />
      </div>
    </AnimatedSection>
  );
}
