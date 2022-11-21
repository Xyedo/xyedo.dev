import solid from "solid-start/vite";
import { defineConfig } from "vite";
// @ts-ignore
import vercel from "solid-start-vercel";
export default defineConfig({
  plugins: [
    {
      // @ts-ignore
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
      enforce: "pre",
    },
    solid({
      extensions: [".mdx", ".md"],
      adapter: vercel(),
    }),
  ],
});
