import { MDXDoc } from "~/types";

export type BlogInfo = {
  title: string;
  date: Date;
  banner: string;
  bannerCredit: string;
  description: string;
  categories: string;
  keyword: string[];
  published_at?: number;
  body: () => Promise<MDXDoc>;
};

export const blogList: { [key: string]: BlogInfo } = {
  "why-learning-another-lang-matter": {
    title: "Why Learning Another Languange / Framework Matter",
    date: new Date(2022, 6, 21),
    banner:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bannerCredit: "https://unsplash.com/@ffstop",
    description:
      "Becoming programmer is essentially become to fulltime learning experience, and learning another languange or framework can help you to become a better programmer",
    categories: "learning",
    keyword: ["javascript", "typescript", "golang", "C#"],
    body: async () => await import("./why-learning-another-lang-matter.mdx"),
  },
  "uploading-file-in-gin-with-s3": {
    title: "Uploading File in Gin With S3",
    date: new Date(2022, 10, 20),
    banner:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bannerCredit: "https://unsplash.com/@joshuahanson43",
    description:
      "How to upload a file using gin gonic and s3 with correct error handling and security first approach",
    categories: "tutorial",
    keyword: ["golang", "gin", "s3"],
    body: async () => await import("./uploading-file-in-gin-with-s3.mdx"),
  },
  "mitigating-panic-nil-pointer-derefence-in-go": {
    title: "Mitigating Panic Nil Pointer Derefence in Golang",
    date: new Date(2023, 2, 27),
    banner: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    bannerCredit: "https://unsplash.com/@markusspiske",
    description:
    "How to mitigating a panic invalid memory address or nil pointer dereference in Go with stealing feature from another languange",
    categories: "tutorial",
    keyword: ["golang", "pointer"],
    body : async () => await import("./migitating-panic-nil-pointer-derefence-in-go.mdx")
  }
};
