import { Component, For } from "solid-js";
import { A, useRouteData } from "solid-start";
import ButtonWrapper from "~/components/Button";
import HeroSections from "~/components/section/hero-sections";
import { list } from "~/../content/blog/list";
import SEO from "~/components/SEO";
type Props = {};

export function routeData() {
  return {
    get articles() {
      return list;
    },
  };
}

const Blog: Component<Props> = () => {
  const data = useRouteData<typeof routeData>();

  const sortedArticles = Object.entries(data.articles).sort(
    (entry1, entry2) =>
      new Date(entry2[1].date).getUTCMilliseconds() -
      new Date(entry1[1].date).getUTCMilliseconds()
  );
  return (
    <main>
      <SEO title="Blog / Xyedo" />
      <HeroSections
        title={"The OG Blog"}
        subtitle={
          "You might feel you wasting your time, get enlightenment, get motivated or just wanna read more?"
        }
        imageProps={{ src: "/img/rocket-boy-2.png" }}
        imageSize="large"
        action={
          <div class="flex space-x-4">
            <ButtonWrapper href="/subscribe" withGradient>
              Subcribe The Blog
            </ButtonWrapper>
          </div>
        }
        arrowIcon
        arrowUrl="#curated-blogs"
      />
      <div class="flex flex-col">
        <div class="my-2 lg:my-10 pt-5 pb-10 px-3 lg:px-12 container">
          <div class="mb-10 lg:flex justify-center">
            <div class="space-y-10">
              <For each={sortedArticles}>
                {([id, article]) => (
                  <A href={`/blog/${id}`}>
                    <img
                      class="lg:w-4/6 mx-auto rounded-md mb-10 shadow-md"
                      src={article.banner}
                    />
                    <h1 class="text-xl lg:text-2xl mb-3 font-semibold text-solid-medium dark:text-solid-darkdefault">
                      {article.title}
                    </h1>
                    <span class="text-md">{article.description}</span>
                    <div class="text-xs mt-3">{article.date}</div>
                  </A>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
