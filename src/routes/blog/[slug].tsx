import { createResource, Component } from "solid-js";

import { useRouteData } from "solid-start";
import { blogList } from "~/../content/blog/list";
import SEO from "~/components/SEO";
import createScrollSpy from "~/hooks/scroll";
import ArticleSection from "~/components/section/article-section";

export function routeData({ params }: any) {
  const [article] = createResource(async () => blogList[params.slug].body());
  return {
    get details() {
      return blogList[params.slug];
    },
    get article() {
      return article;
    },
  };
}

const Blog: Component = () => {
  const data = useRouteData<typeof routeData>();
  const sections = () => data.article()?.toc;
  const readingTime = () => data.article()?.readingTime;
  const blog = () => data.article()?.default;
  const currHeading = createScrollSpy(sections);
  return (
    <>
      <SEO
        title={`${data.details.title  } | Xyedo`}
        image={data.details.banner}
        description={data.details.description}
      />
      <ArticleSection
        articleData={blog}
        currHeading={currHeading}
        details={data.details}
        readingTime={readingTime}
        sections={sections}
      />
    </>
  );
};
export default Blog;
