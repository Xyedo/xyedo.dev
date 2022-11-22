import { list } from "~/../content/blog/list";
import { createResource, Component, Show } from "solid-js";
import { useRouteData } from "solid-start";
import SEO from "~/components/SEO";

export function routeData({ params }: any) {
  const [article] = createResource(async () => {
    return await list[params.slug].body();
  });
  return {
    get details() {
      return list[params.slug];
    },
    get article() {
      return article()?.default;
    },
    get readingTime() {
      return article()?.readingTime;
    },
    get section() {
      return article()?.toc;
    },
  };
}
const Article: Component = () => {
  const data = useRouteData<typeof routeData>();
  return (
    <>
      <SEO
        title={data.details.title + " | Xyedo"}
        image={data.details.banner}
        description={data.details.description}
      />
      <div class="text-primary my-2 lg:my-10 pt-5 pb-10 px-3 lg:px-12 container">
        <div class="mb-10 lg:flex justify-center">
          <div class="space-y-10 px-4 lg:px-0">
            <div class="container lg:px-10">
              <div class="text-left space-y-5">
                <h1 class="max-w-3xl text-4xl break-words font-semibold mt-10 ">
                  {data.details.title}
                </h1>
                <span class="flex flex-row justify-between">
                  <Show when={typeof data.readingTime !== "undefined"}>
                    <p>
                      {data.readingTime?.words} words - {data.readingTime?.text}
                    </p>
                  </Show>
                  <p> {data.details.date.toLocaleDateString()}</p>
                </span>
                <img
                  class="rounded-md mb-10 shadow-md container"
                  src={data.details.banner}
                />
                <p class="text-right">
                  {" "}
                  photo <a href={data.details.bannerCredit} class="underline">credit</a>
                </p>
                <hr class="mt-10 w-3/6 mx-auto text-primary" />
              </div>
              <article class="my-10 prose dark:prose-invert mx-auto dark:text-blog-dark text-blog">
                {data.article && <data.article />}
              </article>
              <hr class="mt-10 w-3/6 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Article;
