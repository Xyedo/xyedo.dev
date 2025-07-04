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
  },
  "grpc-as-a-service-communication": {
    title: "gRPC as A Service Communication ",
    date: new Date(2023, 2, 27),
    banner: "https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bannerCredit: "https://unsplash.com/@ptrikutam",
    description:
    "here we digest and asking important question on gRPC, schema,data type, protobuf, how it differ from REST, and golang implementation",
    categories: "tutorial",
    keyword: ["golang", "grpc","protobuf"],
    body : async () => await import("./grpc-as-a-service-communication.mdx")
  },
  "database-concurency-problem-and-benchmark": {
    title: "Database Concurency Problem and Benchmark",
    date: new Date(2024, 1, 24),
    banner: "https://images.unsplash.com/photo-1519242220831-09410926fbff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bannerCredit: "https://unsplash.com/@qwitka",
    description:
    "How to Prevent Database Concurency Problem by Knowing the Problem, the Variety of Solutions, and Benchmark it to see some trade-off",
    categories: "tutorial",
    keyword: ["rdbms", "postgresql", "benchmark"],
    body : async () => await import("./database-concurency-problem-and-benchmark.mdx")
  },
  "on-the-way-to-50rps-guide": {
    title: "On the Way to 50 RPS: A Practical Guide to Scaling Your Backend",
    date: new Date(2025, 5, 4),
    banner: "https://images.unsplash.com/photo-1728986390942-31395b0d42e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bannerCredit: "https://unsplash.com/@bylukemiller",
    description:
      "A concise, practical guide to scaling your backend to 50 RPS. Learn how to optimize your database, avoid premature complexity, and apply proven techniques for performance and reliability—without overengineering your architecture.",
    categories: "tutorial",
    keyword: ["performance", "optimization", "databases"],
    body: async () => await import("./on-the-way-to-50rps-guide.mdx"),
  }
};
