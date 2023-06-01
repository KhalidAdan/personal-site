import BlogListPage from "@/components/blog/pages/BlogListPage";

export default function BlogList() {
  return <BlogListPage isDev={process.env.NODE_ENV === "development"} />;
}
