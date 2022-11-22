export interface Section {
  depth: string;
  value: string;
  children?: Section[];
}
export interface MDXDoc {
  toc: Section[];
  readingTime: {
    text: string;
    time: number;
    words: number;
    minutes: number;
  };
  default: string;
}
