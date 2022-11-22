import { blogList } from "~/../content/blog/list";
import { createResource, Component, Show } from "solid-js";

import { useRouteData } from "solid-start";
import SEO from "~/components/SEO";
import createScrollSpy from "~/hooks/scroll";
import TableOfContent from "~/components/section/toc";

export function routeData({ params }: any) {
  const [article] = createResource(async () => {
    return await blogList[params.slug].body();
  });
  return {
    get details() {
      return blogList[params.slug];
    },
    get article() {
      return article;
    },
  };
}

const Article: Component = () => {
  const data = useRouteData<typeof routeData>();
  const sections = () => data.article()?.toc;
  const readingTime = () => data.article()?.readingTime;
  const blog = () => data.article()?.default;
  const currHeading = createScrollSpy(sections);
  return (
    <>
      <SEO
        title={data.details.title + " | Xyedo"}
        image={data.details.banner}
        description={data.details.description}
      />
      <div class="mx-auto text-primary my-2 lg:my-10 pt-5 pb-10 px-3 lg:px-12 container">
        <div class="mb-10 lg:flex justify-center">
          <div class="space-y-10 px-4 lg:px-0">
            <div class="container lg:px-10">
              <div class="text-left space-y-5">
                <h1 class="container text-4xl break-words text-center font-semibold mt-10">
                  {data.details.title}
                </h1>
                <span class="flex flex-row justify-between">
                  <Show when={typeof readingTime() !== "undefined"}>
                    <p>
                      {readingTime()!.words} words - {readingTime()!.text}
                    </p>
                  </Show>
                  <p> {data.details.date.toLocaleDateString()}</p>
                </span>
                
                  <img
                    class="rounded-md mb-10 shadow-md container object-cover"
                    src={data.details.banner}
                  />
                
                <p class="text-right">
                  {" "}
                  photo{" "}
                  <a href={data.details.bannerCredit} class="underline">
                    credit
                  </a>
                </p>
                <hr class="mt-10 w-3/6 mx-auto text-primary" />
              </div>
              <div class="lg:grid lg:grid-cols-12 lg:mx-[5vw]">
                <article class="lg:col-span-10 my-10 prose dark:prose-invert dark:text-blog-dark text-blog">
                  <Show when={blog()}>{blog()!}</Show>
                </article>
                <aside class="hidden lg:block lg:col-start-11 lg:col-span-full my-10 text-primary text-lg">
                  <div class="sticky top-36">
                    <h1 class="text-2xl mb-4">Table of Content</h1>
                    <TableOfContent
                      currHeading={currHeading()}
                      section={sections()}
                    />
                  </div>
                </aside>
              </div>
            </div>
            <hr class="mt-10 w-3/6 mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Article;
