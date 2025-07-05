import { projectList } from "~/../content/project/list";
import { Component, Show } from "solid-js";
import {
  createAsync,
  Params,
  query,
  useParams,
  type RouteDefinition,
} from "@solidjs/router";
import SEO from "~/components/SEO";
import createScrollSpy from "~/hooks/scroll";
import ArticleSection from "~/components/section/article-section";

const routeData = query(async (params: Params) => {
  const article = await projectList[params.slug].body();
  return {
    details: projectList[params.slug],
    article,
  };
}, "project/[slug]");

export const route = {
  preload: (args) => routeData(args.params),
} satisfies RouteDefinition;

const Project: Component = () => {
  const params = useParams();
  const data = createAsync(() => routeData(params));

  const sections = () => data()?.article.toc;
  const readingTime = () => data()?.article.readingTime;
  const project = () => data()?.article.default;
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
          articleData={project}
          currHeading={currHeading}
          details={data()!.details}
          readingTime={readingTime}
          sections={sections}
        />
      </Show>
    </>
  );
};
export default Project;
