import { Component, For } from "solid-js";
import { useRouteData } from "solid-start";
import ButtonWrapper from "~/components/Button";
import HeroSections from "~/components/section/hero-sections";
import { blogList } from "~/../content/blog/list";
import SEO from "~/components/SEO";
import BlogCard from "~/components/BlogCard";
type Props = {};

export function routeData() {
  return {
    get articles() {
      return Object.entries(blogList).sort(
        (a, b) =>
          a[1].date.getUTCMilliseconds() - b[1].date.getUTCMilliseconds()
      ).reverse();
    },
  };
}

const Blog: Component<Props> = () => {
  const data = useRouteData<typeof routeData>();

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
      <section class="mx-[10vw]">
        <div
          class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
          id="curated-blogs"
        >
          <For each={data.articles}>
            {([id, article]) => (
              <BlogCard
                categories={article.categories}
                href={`/blog/${id}`}
                banner={article.banner}
                date={article.date}
                title={article.title}
                description={article.description}
              />
            )}
          </For>
        </div>
      </section>
    </main>
  );
};

export default Blog;
