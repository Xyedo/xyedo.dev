import { MDXDoc } from "~/types";

export type ProjectInfo = {
  title: string;
  categories: string;
  date: Date;
  banner: string;
  bannerCredit?: string;
  description: string;
  stacks: string[];
  published_at?: Date;
  body: () => Promise<MDXDoc>;
};

export const projectList: { [key: string]: ProjectInfo } = {
  itsfess: {
    title: "Menfess Bot ITSFess and Website like twitter",
    categories: "web",
    date: new Date(2021,10, 21),
    banner: "/img/project/itsfess.jpg",
    description:
      "Menfess Bot ITSFess using python and website like twitter using next-js",
    stacks: [
      "python",
      "next-js",
      "typescript",
      "algolia",
      "firebase-firestore",
    ],
    published_at: new Date(2021, 7, 1),
    body: async () => await import("./itsfess.mdx"),
  },
  "self-balancing-robot": {
    title: "Self balancing Robot",
    description:
      "building self balancing Robot using PID method on arduino and elevate it using stm32",
    categories: "electronics",
    date: new Date(2021, 0, 13),
    banner: "/img/project/self-balancing-robot.jpg",
    stacks: ["arduino", "c"],
    published_at: new Date(2021, 0, 13),
    body: async () => await import("./self-balancing-robot.mdx"),
  },
  findfit: {
    title: "FindFit: Sport Venues that We Can Rent",
    description: "creating minimum viable product of findfit mobile app",
    categories: "mobile",
    banner: "/img/project/findfit.jpg",
    date: new Date(2022, 0, 31),
    stacks: ["react-native", "typescript", "google-map-api"],
    body: async () => await import("./findfit.mdx"),
  },
  "medium-alike-blog": {
    title: "Medium Alike Blog",
    description: "Building Medium like blog",
    categories: "web",
    banner: "/img/project/mediuma-like.jpg",
    stacks: ["typescript", "next-js", "firebase"],
    date: new Date(2022, 0, 31),
    body: async () => await import("./medium-alike-blog.mdx"),
  },
  molinav: {
    title: "Molinav",
    description: "Molinav - Electric Motor companion mobile app",
    categories: "mobile",
    banner: "/img/project/molinav.jpg",
    date: new Date(2022, 0, 31),
    stacks: ["react-native", "typescript", "golang", "tensorflow"],
    body: async () => await import("./molinav.mdx"),
  },
  "bookshelf-api": {
    title: "Bookshelf Api",
    description:
      "API submission on learning on backend for beginner on dicoding",
    categories: "api",
    banner:
      "https://images.unsplash.com/photo-1605116959031-6e2d13a2ee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    bannerCredit: "https://unsplash.com/@kellysikkema",
    date: new Date(2022, 5, 4),
    stacks: ["javascript", "hapi-js"],
    body: async () => await import("./bookshelf-api.mdx"),
  },
  snippetbox: {
    title: "Snippetbox",
    description:
      "Snippetbox is to snippet code, or whatever text you wanna snip",
    categories: "api",
    banner: "https://github.com/Xyedo/snippetbox/blob/main/image/first.jpg?raw=true",
    date: new Date(2022, 6, 4),
    stacks: ["golang", "mySQL"],
    body: async () => await import("./snippetbox.mdx"),
  },
  "locker-using-RFID": {
    title: "Locker Using RFID",
    description:
      "locker using RFID scanner or keypad and OLED screen and Using SMS as Notification and Solenoid as a Lock",
    categories: "electronics",
    banner:
      "https://github.com/Xyedo/locker-using-RFID/blob/main/assets/built.jpg?raw=true",
    date: new Date(2022, 7, 26),
    stacks: ["arduino", "c++"],
    body: async () => await import("./locker-using-rfid.mdx"),
  },
  "subsciption-service": {
    title: "Subscription Service",
    description:
      "Subscription Service API and creating on demand pdf using golang concurency",
    categories: "api",
    banner: "/img/project/subscription-api.jpg",
    date: new Date(2022, 7, 31),
    stacks: ["golang", "mailhog", "redis", "postgreSQL"],
    body: async () => await import("./subscription-api.mdx"),
  },
  "notes-app-api": {
    title: "Notes App API",
    description: "note api that collabolating on creating notes",
    banner:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bannerCredit: "https://unsplash.com/@dtravisphd",
    categories: "api",
    date: new Date(2022, 8, 14),
    stacks: ["javascript", "hapi-js", "redis", "postgreSQL", "rabbitMQ"],
    body: async () => await import("./notes-app-api.mdx"),
  },
  "open-music-api": {
    title: "Open Music API",
    description: "open music api that manages song, album, and playlist",
    banner:
      "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    bannerCredit: "https://unsplash.com/@jamesstamler",
    categories: "api",
    date: new Date(2022, 8, 17),
    stacks: [
      "javascript",
      "hapi-js",
      "redis",
      "postgreSQL",
      "rabbitMQ",
      "aws-s3",
    ],
    body: async () => await import("./open-music-api.mdx"),
  },
};
