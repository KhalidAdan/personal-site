"use client";

import { TypographyH1, TypographyH3 } from "@/components/Typography";
import Header from "@/components/common/Header";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/section";
import { getAnimationVariants } from "@/lib/utils";
import { Blog, allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Variants } from "framer-motion";

const animation = getAnimationVariants("fadeInFromBottom");

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogList() {
  const blogs: Blog[] = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <AnimatedSection
      variants={animation}
      initial="hidden"
      animate="visible"
      className="mt-0"
    >
      <Header variants={childVariants}></Header>
      <AnimatedSection variants={childVariants}>
        <TypographyH1>Thoughts and ideas go here</TypographyH1>
      </AnimatedSection>
      {blogs.map((blog, idx) => (
        <AnimatedSection
          className="gap-y-1 mt-1"
          variants={childVariants}
          key={idx}
        >
          <article className="flex max-w-xl flex-col items-start justify-between pb-4 sm:-mx-5 px-5 py-3.5 rounded-xl hover:bg-light/10">
            <a href={`blog/${blog.url}`}>
              <div className="flex items-center gap-x-3.5 text-xs">
                <time dateTime={blog.date} className="text-gray-500">
                  {Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(blog.date))}
                </time>
                {blog.tags &&
                  blog.tags.map((tag, index) => (
                    <Badge key={index}>{tag}</Badge>
                  ))}
              </div>
              {blog.image && (
                <img
                  src={blog.image}
                  alt=""
                  className="w-full mt-4 max-h-64 object-cover object-center rounded-lg shadow-md"
                />
              )}
              <div className="group relative pt-4">
                <TypographyH3>
                  <span className="absolute inset-0" />
                  {blog.title}
                </TypographyH3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {blog.description}
                </p>
              </div>
            </a>{" "}
          </article>
        </AnimatedSection>
      ))}
    </AnimatedSection>
  );
}
