import { Component, For } from "solid-js";
import SEO from "~/components/SEO";
import HeroSections from "../../components/section/hero-sections";
import ButtonWrapper from "~/components/Button";
import { projectList } from "~/../content/project/list";
import { type RouteDefinition } from "@solidjs/router";
import ProjectCard from "~/components/ProjectCard";
type Props = {};
const routeData =  {
    get projects() {
      return Object.entries(projectList)
        .sort(
          (a, b) =>
            a[1].date.getUTCMilliseconds() - b[1].date.getUTCMilliseconds()
        )
        .reverse()
        .slice(0, 5).
        map(([id, project]) => {
          return {
            id,
            banner: project.banner,
            categories: project.categories,
            date: project.date,
            description: project.description,
            stacks: project.stacks,
            title: project.title,
          };
        });
    },
  }

export const route = {
  preload: () => routeData,
} satisfies RouteDefinition;

const Project: Component<Props> = () => {
  const data = routeData
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
          <For each={data.projects}>
            {(project) => (
              <ProjectCard
                categories={project.categories}
                stacks={project.stacks}
                id={project.id}
                banner={project.banner}
                date={project.date}
                title={project.title}
                description={project.description}
              />
            )}
          </For>
        </div>
      </section>
    </main>
  );
};

export default Project;
