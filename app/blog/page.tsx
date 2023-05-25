"use client";

import { TypographyH1, TypographyH3 } from "@/components/Typography";
import AnimatedTurbulence from "@/components/common/AnimatedTurbulence";
import Header from "@/components/common/Header";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/section";
import { getAnimationVariants } from "@/lib/utils";
import { Variants } from "framer-motion";

const animation = getAnimationVariants("fadeInFromBottom");

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
// a Blog has a title, a date, a desc, a tag, an image and content
const blogs = [
  {
    id: 1,
    title: "A brand new product",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",

    image:
      "https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    date: "May 21, 2023",
    datetime: "2020-05-21",
    tags: [{ title: "Skillbox" }, { title: "Product" }],
    author: {
      name: "Michael Foster",
    },
  },
  {
    id: 2,
    title: "Black eyed blonde",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2023",
    datetime: "2020-03-16",
    tags: [{ title: "Books" }],
    author: {
      name: "Michael Foster",
    },
  },
  {
    id: 3,
    title: "Designing the perfect dark mode",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2023",
    datetime: "2020-03-16",
    tags: [{ title: "Development" }],
    author: {
      name: "Michael Foster",
    },
  },
  {
    id: 4,
    title: "Why changing the news is hard",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Feb 21, 2023",
    datetime: "2020-02-21",
    tags: [{ title: "Eto" }, { title: "Product" }],
    author: {
      name: "Michael Foster",
    },
  },
];

export default function BlogList() {
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
      {blogs.map((post) => (
        <AnimatedSection
          className="gap-y-1 mt-1"
          variants={childVariants}
          key={post.id}
        >
          <article
            key={post.id}
            className="flex max-w-xl flex-col items-start justify-between pb-4 sm:-mx-5 px-5 py-3.5 rounded-xl hover:bg-light/10"
          >
            <a href={`blog/${post.id}`}>
              <div className="flex items-center gap-x-3.5 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                {post.tags.map((tag, index) => (
                  <Badge key={index}>{tag.title}</Badge>
                ))}
              </div>
              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  className="w-full mt-4 h-64 object-cover object-center rounded-lg shadow-md"
                />
              )}
              <div className="group relative pt-4">
                <TypographyH3>
                  <span className="absolute inset-0" />
                  {post.title}
                </TypographyH3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </a>{" "}
          </article>
        </AnimatedSection>
      ))}
      <AnimatedTurbulence />
    </AnimatedSection>
  );
}
