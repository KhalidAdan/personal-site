"use client";

import { TypographyH1, TypographyMuted } from "@/components/Typography";
import Header from "@/components/common/Header";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/section";
import { getAnimationVariants } from "@/lib/utils";
import { allBlogs } from "contentlayer/generated";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Return a list of `params` to populate the [slug] dynamic segment of the URL for each blog
export function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog._raw.flattenedPath,
  }));
}

const animation = getAnimationVariants("fadeInFromBottom");

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slug);

  if (!blog) {
    return notFound();
  }

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
        <TypographyH1>{blog.title}</TypographyH1>
        <div className="flex -mt-8 items-center">
          <TypographyMuted>
            <time dateTime={blog.date}>
              {Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(blog.date))}
            </time>
          </TypographyMuted>
          {blog.tags &&
            blog.tags.map((tag, index) => (
              <Badge key={index} className="ml-2">
                {tag}
              </Badge>
            ))}
        </div>
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-lg backdrop-blur-2xl"
          />
        )}
        <section
          className="mt-0"
          dangerouslySetInnerHTML={{
            __html: blog.body.html,
          }}
        ></section>
      </AnimatedSection>
    </AnimatedSection>
  );
}
