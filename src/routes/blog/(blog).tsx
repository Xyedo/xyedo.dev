import { Component, For } from "solid-js";
import ButtonWrapper from "~/components/Button";
import HeroSections from "~/components/section/hero-sections";
import { blogList } from "~/../content/blog/list";
import SEO from "~/components/SEO";
import BlogCard from "~/components/BlogCard";
import {  RouteDefinition } from "@solidjs/router";
type Props = {};

const routeData =  ({
    get blogs() {
      return Object.entries(blogList)
        .sort(
          (a, b) =>
            b[1].date.getUTCMilliseconds() - a[1].date.getUTCMilliseconds()
        )
        .reverse()
        .map(([id, blog]) => ({
          banner: blog.banner,
          categories: blog.categories,
          date: blog.date,
          description: blog.description,
          title: blog.title,
          id: id,
        }));
    },
  })

export const route = {
  preload: () => routeData,
} satisfies RouteDefinition;

const Blog: Component<Props> = () => {
  const data = routeData;
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
          class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:space-x-4 "
          id="curated-blogs"
        >
          <For each={data.blogs}>
            {(blog) => (
              <BlogCard
                categories={blog.categories}
                id={blog.id}
                banner={blog.banner}
                date={blog.date}
                title={blog.title}
                description={blog.description}
              />
            )}
          </For>
        </div>
      </section>
    </main>
  );
};

export default Blog;
