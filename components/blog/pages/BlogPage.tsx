"use client";

import { TypographyH1, TypographyMuted } from "@/components/Typography";
import BlogBadge from "@/components/blog/BlogBadge";
import Header from "@/components/common/Header";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/section";
import { dateHelper, getAnimationVariants } from "@/lib/client.utils";
import { Blog } from "contentlayer/generated";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const animation = getAnimationVariants("fadeInFromBottom");

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface BlogPageProps {
  isDev: boolean;
  title: Blog["title"];
  date: Blog["date"];
  tags: Blog["tags"];
  image: Blog["image"];
  body: Blog["body"];
}

export default function Blog({
  isDev,
  title,
  date,
  tags,
  image,
  body,
}: BlogPageProps) {
  const { isNew, hasBeenReleased } = dateHelper(new Date(date));

  if (!hasBeenReleased && !isDev) return notFound();

  return (
    <AnimatedSection
      className="mt-0"
      variants={animation}
      initial="hidden"
      animate="visible"
    >
      <Link
        href="/blog"
        className="flex gap-x-1 text-muted-foreground uppercase text-sm mb-6 items-center"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>
      <Header variants={childVariants}></Header>
      <AnimatedSection
        variants={childVariants}
        className="mt-0 prose prose-lg prose-neutral dark:prose-invert prose-h2:mt-8 prose-h3:mt-8 pt-4 sm:pt-12 prose-pre:max-w-[512px]"
      >
        <TypographyH1>{title}</TypographyH1>
        <div className="flex -mt-8 gap-x-3 items-center">
          <TypographyMuted>
            <time dateTime={date}>
              {Intl.DateTimeFormat("en-US", {
                timeZone: "America/Toronto",
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(date))}
            </time>
          </TypographyMuted>
          {tags && tags.map((tag, index) => <Badge key={index}>{tag}</Badge>)}
          <BlogBadge isNew={isNew} hasBeenReleased={hasBeenReleased} />
        </div>
        {image && (
          <Image
            src={image}
            alt={title}
            className="rounded-lg backdrop-blur-2xl my-2 object-contain object-center"
          />
        )}
        <section
          className="mt-0"
          dangerouslySetInnerHTML={{
            __html: body.html,
          }}
        ></section>
      </AnimatedSection>
    </AnimatedSection>
  );
}
