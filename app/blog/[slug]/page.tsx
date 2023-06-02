import BlogPost from "@/components/blog/pages/BlogPage";
import { allBlogs } from "contentlayer/generated";

export function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog._raw.flattenedPath,
  }));
}

export default function BlogBySlug({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find(
    (blog) => blog._raw.flattenedPath === params.slug
  )!;

  return (
    <BlogPost
      isDev={process.env.NODE_ENV === "development"}
      title={blog.title}
      date={blog.date}
      tags={blog.tags}
      image={blog.image}
      body={blog.body}
    />
  );
}
