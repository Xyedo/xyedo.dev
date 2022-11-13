import { list } from "~/../content/blog/list";
import { createResource, Component } from "solid-js";
import { useRouteData } from "solid-start";
export function routeData({ params }: any) {
  const [article] = createResource(async () => {
    return (await list[params.id].body()).default;
  });
  return {
    get details() {
      return list[params.id];
    },
    get article() {
      return article();
    },
  };
}
const Article: Component = () => {
  const data = useRouteData<typeof routeData>();
  return (
    <div class="flex flex-col text-primary">
      <div class="my-2 lg:my-10 pt-5 pb-10 px-3 lg:px-12 container">
        <div class="mb-10 lg:flex justify-center">
          <div class="space-y-10 px-4 lg:px-0">
            <div class="container lg:px-10">
              <div class="text-center space-y-5">
                <h1 class="text-4xl font-semibold mt-10 text-solid-medium dark:text-solid-darkdefault">
                  {data.details.title}
                </h1>
                <div class="text-md"> {data.details.date}</div>
               
                <img
                  class="rounded-md mb-10 shadow-md"
                  src={data.details.banner}
                />
                <p>
                  {" "}
                  photo <a href={data.details.bannerCredit}>credit</a>
                </p>
                <hr class="mt-10 w-3/6 mx-auto text-primary" />
              </div>
              <article class="my-10 prose dark:prose-invert mx-auto dark:text-blog-dark text-blog">
                {data.article && <data.article />}
              </article>
              <hr class="mt-10 w-3/6 mx-auto" />
              <div class="flex flex-row justify-center mt-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Article;
