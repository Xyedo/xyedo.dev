import { blogList } from "~/../content/blog/list";
import { Component, Show } from "solid-js";

import SEO from "~/components/SEO";
import createScrollSpy from "~/hooks/scroll";
import ArticleSection from "~/components/section/article-section";
import {
  query,
  Params,
  RouteDefinition,
  createAsync,
  useParams,
} from "@solidjs/router";

const routeData = query(async (params: Params) => {
  const article = await blogList[params.slug].body();
  return {
    details: blogList[params.slug],
    article,
  };
}, "blog/[slug]");

export const route = {
  preload: (args) => routeData(args.params),
} satisfies RouteDefinition;

const Blog: Component = () => {
  const params = useParams();
  const data = createAsync(() => routeData(params));
  const sections = () => data()?.article.toc;
  const readingTime = () => data()?.article.readingTime;
  const blog = () => data()?.article.default;
  const currHeading = createScrollSpy(sections);

  return (
    <>
      <SEO
        title={data()?.details.title + " | Xyedo"}
        image={data()?.details.banner}
        description={data()?.details.description}
      />
      <Show when={data()?.details}>
        <ArticleSection
          articleData={blog}
          currHeading={currHeading}
          details={data()!.details}
          readingTime={readingTime}
          sections={sections}
        />
      </Show>
    </>
  );
};
export default Blog;
