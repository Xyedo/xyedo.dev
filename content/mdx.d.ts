import { MDXComponents } from "mdx/types";

declare module '*.mdx' {
  export function SomeComponent(): MDXComponents;
}
