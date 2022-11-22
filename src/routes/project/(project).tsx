import { Component, For } from "solid-js";
import SEO from "~/components/SEO";
import HeroSections from "../../components/section/hero-sections";
import ButtonWrapper from "~/components/Button";
import { projectList } from "~/../content/project/list";
import { useRouteData } from "solid-start";
import BlogCard from "~/components/BlogCard";
import ProjectCard from "~/components/ProjectCard";
type Props = {};
export function routeData() {
  return {
    get articles() {
      return Object.entries(projectList).sort(
        (a, b) =>
          b[1].date.getUTCMilliseconds() - a[1].date.getUTCMilliseconds()
      );
    },
  };
}
const Project: Component<Props> = () => {
  const data = useRouteData<typeof routeData>();
  return (
    <main>
      <SEO title="Project / Xyedo" />
      <HeroSections
        title={"The Endeavour"}
        subtitle={
          "See Xyedo | Hafid Endeavour to make the world better by his side project / learning. Watchout the license 😱"
        }
        imageProps={{ src: "/img/project.png" }}
        imageSize="large"
        action={
          <div class="flex space-x-4">
            <ButtonWrapper href="https://github.com/xyedo" withGradient>
              Check Github
            </ButtonWrapper>
          </div>
        }
        arrowIcon
        arrowUrl="#curated"
      />
      <section class="mx-[10vw]">
        <div
          class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
          id="curated"
        >
          <For each={data.articles}>
            {([id, article]) => (
              <BlogCard
                href={`/project/${id}`}
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

export default Project;
