export type Section = {
  depth: string;
  value: string;
  children?: Section[];
};
export type ReadingTime = {
  text: string;
  time: number;
  words: number;
  minutes: number;
};
export interface MDXDoc {
  toc: Section[];
  readingTime: ReadingTime;
  default: string;
}
