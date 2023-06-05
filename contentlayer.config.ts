import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import rehypeRaw from "rehype-raw";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.md`,
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    image: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "blogs",
  documentTypes: [Blog],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [rehypeRaw],
  },
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [rehypeRaw],
  },
});
