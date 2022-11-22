import solid from "solid-start/vite";
import { defineConfig } from "vite";
import remarkGfm from "remark-gfm";
import { remarkMdxToc } from "remark-mdx-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
// @ts-ignore
import vercel from "solid-start-vercel";
import remarkReadingTime from "remark-reading-time";
import readingMdxTime from "remark-reading-time/mdx";
export default defineConfig({
  plugins: [
    {
      // @ts-ignore
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        remarkPlugins: [
          remarkReadingTime,
          remarkGfm,
          remarkMdxToc,
          readingMdxTime,
        ],
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              properties: { class: "header-anchor" },
              content: { type: "text", value: "# " },
            },
          ],
        ],
      }),
      enforce: "pre",
    },
    solid({
      extensions: [".mdx", ".md"],
      adapter: vercel(),
    }),
  ],
});
