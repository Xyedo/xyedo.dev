import { Component, For } from "solid-js";
import { useRouteData } from "solid-start";
import SEO from "~/components/SEO";
import ButtonWrapper from "~/components/Button";
import { projectList } from "~/../content/project/list";
import ProjectCard from "~/components/ProjectCard";
import HeroSections from "../../components/section/hero-sections";

type Props = {};
export function routeData() {
  return {
    get articles() {
      return Object.entries(projectList).sort(
        (a, b) =>
          a[1].date.getUTCMilliseconds() - b[1].date.getUTCMilliseconds()
      ).reverse();
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
        <div class="py-24 px-0" id="curated">
          <For each={data.articles}>
            {([id, article]) => (
              <ProjectCard
                categories={article.categories}
                stacks={article.stacks}
                id={id}
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
