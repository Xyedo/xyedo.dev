import { Component } from "solid-js";

export type MDXComponent = Component;

type BlogInfo = {
  title: string;
  date: string;
  banner: string;
  description?: string;
  categories: string[];
  keyword: string[];
  published_at?: number;
  body: () => Promise<{ default: MDXComponent }>;
};
export const list: { [key: string]: BlogInfo } = {
  "why-learning-another-lang-matter": {
    title: "Why Learning Another Languange / Framework Matter",
    date: "21-07-2022",
    banner: "",
    description:
      "Becoming programmer is essentially become to fulltime learning experience, and learning another languange or framework can help you to become a better programmer",
    categories: ["learning", "development"],
    keyword: ["javascript", "typescript", "golang", "C#"],
    body: async () => await import("./why-learning-another-lang-matter.mdx"),
  },
};
