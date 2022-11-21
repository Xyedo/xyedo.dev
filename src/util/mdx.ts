import fs from "fs";
import path from "path";
import readingTime from "reading-time";
type ContentType = "blog" | "project";
export function getReadingTime(contentType: ContentType, slug: string) {
  return readingTime(
    fs.readFileSync(
      path.join(process.cwd(), `content/${contentType}`, `${slug}.mdx`),
      "utf-8"
    )
  );
}
