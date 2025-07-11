import { BlogInfo } from "content/blog/list";
import { A } from "@solidjs/router";

interface BlogCard extends Omit<BlogInfo, "body" | "bannerCredit" | "keyword"> {
  id: string;
}
export default function BlogCard(props: BlogCard) {
  return (
    <A href={`/blog/${props.id}`}>
      <div
        class="bg-secondary shadow-xl border-transparent relative hover:scale-[.98] hover:border-primary 
      border-4 hover:border-pink focus:border-pink focus:outline-hidden max-w-md min-h-[600px] 
      rounded-3xl  p-5 box-border pb-7 my-5 flex flex-col transition"
      >
        <div class="relative">
          <img
            class="w-full max-h-72 rounded-3xl object-cover mb-4 my-auto"
            src={props.banner}
            alt="banner image"
          />
          <div class="bg-primary bottom-4 left-0 py-1 px-3 absolute z-10 bg-pink border-pink border-2 rounded-xs uppercase text-inverse font-bold ">
            {props.categories}
          </div>
        </div>
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
