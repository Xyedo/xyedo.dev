import { BlogInfo } from "content/blog/list";
import { A } from "solid-start";

interface BlogCard
  extends Omit<BlogInfo, "body" | "bannerCredit" | "categories" | "keyword"> {
  href: string;
}
export default function BlogCard(props: BlogCard) {
  return (
    <A href={props.href}>
      <div class="bg-secondary shadow-xl border-transparent hover:scale-[.98] hover:border-primary border-4 hover:border-pink focus:border-pink focus:outline-none max-w-md min-h-[600px] rounded-3xl  p-5 box-border pb-7 my-5 flex flex-col transition">
        <img
          class="w-full max-h-72 rounded-3xl object-cover mb-4 my-auto"
          src={props.banner}
          alt="banner image"
        />
        <div class="my-auto">
          <time
            class="block font-light text-sm uppercase text-secondary mb-1 sm:mb-2"
            datetime={props.date.toISOString()}
          >
            {props.date.toDateString()}
          </time>
          <h1 class="text-2xl text-primary font-semibold box-decoration-clone pt-0 pb-1 -ml-1">
            {props.title}
          </h1>
          <p class="pt-3  text-secondary text-blog">{props.description}</p>
        </div>
      </div>
    </A>
  );
}
