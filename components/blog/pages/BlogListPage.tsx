"use client";

import { TypographyH1, TypographyH3 } from "@/components/Typography";
import Header from "@/components/common/Header";
import { Badge } from "@/components/ui/badge";

import { AnimatedSection } from "@/components/ui/section";
import { dateHelper, getAnimationVariants } from "@/lib/utils";
import { Blog, allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Variants } from "framer-motion";
import BlogBadge from "../BlogBadge";

const animation = getAnimationVariants("fadeInFromBottom");

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export type BlogPageProps = {
  isDev: boolean;
};

export default function BlogListPage({ isDev }: BlogPageProps) {
  const blogs: Blog[] = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <AnimatedSection
      variants={animation}
      initial="hidden"
      animate="visible"
      className="mt-0 gap-y-0"
    >
      <Header variants={childVariants}></Header>
      <AnimatedSection variants={childVariants} className="mt-10">
        <TypographyH1>Thoughts and ideas go here</TypographyH1>
        <h1 className="sr-only">Blog posts</h1>
      </AnimatedSection>
      {blogs.map((blog, idx) => {
        const { isNew, hasBeenReleased } = dateHelper(new Date(blog.date));

        if (!hasBeenReleased && !isDev) return null;
        return (
          <AnimatedSection
            className="gap-y-1 mt-1"
            variants={childVariants}
            key={idx}
          >
            <article className="flex max-w-xl flex-col items-start justify-between pb-4 sm:-mx-5 px-5 py-5 rounded-xl dark:hover:bg-light/5 light:hover:bg-dark/5">
              <a href={`blog/${blog.url}`}>
                {blog.image && (
                  <div className="mb-4">
                    <img
                      src={blog.image}
                      alt={`${blog.title} cover image`}
                      className="w-full max-h-64 object-cover object-center rounded-lg shadow-md"
                      loading="lazy"
                      aria-label={blog.title}
                      aria-describedby="image-description"
                    />
                    <p id="image-description" className="sr-only">
                      {blog.title} image
                    </p>
                  </div>
                )}
                <div className="flex items-center gap-x-3.5 text-xs">
                  <time
                    dateTime={blog.date}
                    className="dark:text-light/75 light:text-dark/75"
                  >
                    {Intl.DateTimeFormat("en-CA", {
                      timeZone: "America/Toronto",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(blog.date))}
                  </time>
                  {blog.tags &&
                    blog.tags.map((tag, index) => (
                      <Badge key={index}>{tag}</Badge>
                    ))}
                  <BlogBadge isNew={isNew} hasBeenReleased={hasBeenReleased} />
                </div>

                <div className="group relative pt-4">
                  <TypographyH3>
                    <span className="absolute inset-0" />
                    {blog.title}
                  </TypographyH3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                    {blog.description}
                  </p>
                </div>
              </a>
            </article>
          </AnimatedSection>
        );
      })}
    </AnimatedSection>
  );
}
