import { blogList } from "~/../content/blog/list";
import { projectList } from "~/../content/project/list";
import { Component, createEffect, For, onCleanup } from "solid-js";
import { createStore } from "solid-js/store";
import { type RouteDefinition } from "@solidjs/router";
import ButtonWrapper from "~/components/Button";
import HeroSections from "~/components/section/hero-sections";
import SEO from "~/components/SEO";
import ProjectCard from "~/components/ProjectCard";
import BlogCard from "~/components/BlogCard";

type InitVal = {
  loopNum: number;
  isDeleting: boolean;
  text: string;
  delta: number;
};

const routeData = {
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
  get projects() {
    return Object.entries(projectList)
      .sort(
        (a, b) =>
          a[1].date.getUTCMilliseconds() - b[1].date.getUTCMilliseconds()
      )
      .reverse()
      .slice(0, 5)
      .map(([id, project]) => {
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
};

export const route = {
  preload: () => routeData,
} satisfies RouteDefinition;

const Home: Component = () => {
  const data = routeData;
  const [state, setState] = createStore<InitVal>({
    loopNum: 0,
    isDeleting: false,
    delta: 300 - Math.random() * 100,
    text: "",
  });

  const toRotate = ["Fullstack dev", "Firmware Eng"];
  createEffect(() => {
    const track = setInterval(() => {
      const i = state.loopNum % toRotate.length;
      const fullText = toRotate[i];
      if (state.isDeleting) {
        setState((state) => ({
          text: fullText.substring(0, state.text.length - 1),
          delta: 100,
        }));
      } else {
        setState((state) => ({
          text: fullText.substring(0, state.text.length + 1),
        }));
      }
      if (!state.isDeleting && state.text === fullText) {
        setState({
          delta: 2000,
          isDeleting: true,
        });
      } else if (state.isDeleting && state.text === "") {
        setState((state) => ({
          delta: 200,
          loopNum: state.loopNum + 1,
          isDeleting: false,
        }));
      }
    }, state.delta);

    onCleanup(() => clearInterval(track));
  });
  return (
    <>
      <SEO title="Home / Xyedo" />
      <main>
        <HeroSections
          title={
            <>
              <p class="text-2xl md:text-3xl font-semibold">Sup! 👋</p>
              <h1 class="bg-red-grad dark:bg-pink-grad transition-colors duration-200 ease-linear font-black text-pink text-xl md:text-3xl lg:text-5xl pb-2">
                I am Hafid
              </h1>
            </>
          }
          subtitle={
            <>
              <p class="text-lg md:text-2xl mb-2 font-medium">
                I enthusiast in{" "}
                <span
                  class="border-r-2 border-solid border-primary animate-[border-pulsate-light_1s_infinite]
              dark:animate-[border-pulsate-dark_1s_infinite]"
                >
                  {state.text}
                </span>
              </p>
              <p class="font-medium text-lg md:text-xl">
                I documented my thought about development, engineering and my
                learning journey so it benefit the future me and maybe you
              </p>
            </>
          }
          // image={<img class="object-cover" src={HeroImage} />}
          imageProps={{ src: "/img/rocket-boy.png" }}
          imageSize="large"
          action={
            <div class="flex space-x-4">
              <ButtonWrapper href="/blog" withGradient>
                Read the Blog
              </ButtonWrapper>
              <ButtonWrapper href="/about">Learn More</ButtonWrapper>
            </div>
          }
          arrowIcon
          arrowUrl="#main-section"
        />
        <div id="main-section" class="mx-[10vw]">
          <h1 class="text-center mx-4 my-8 bg-red-grad dark:bg-pink-grad transition-colors duration-200 ease-linear font-black text-pink text-xl md:text-3xl lg:text-5xl pb-2">
            Latest Blog
          </h1>
          <section class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:space-x-4 ">
            <For each={data.blogs}>
              {(blog) => (
                <BlogCard
                  banner={blog.banner}
                  categories={blog.categories}
                  date={blog.date}
                  id={blog.id}
                  description={blog.description}
                  title={blog.title}
                />
              )}
            </For>
          </section>
          <h1 class="text-center mx-4 my-8 bg-red-grad dark:bg-pink-grad transition-colors duration-200 ease-linear font-black text-pink text-xl md:text-3xl lg:text-5xl pb-2">
            Latest Project
          </h1>
          <section>
            <For each={data.projects}>
              {(project) => (
                <ProjectCard
                  id={project.id}
                  description={project.description}
                  categories={project.categories}
                  banner={project.banner}
                  date={project.date}
                  stacks={project.stacks}
                  title={project.title}
                />
              )}
            </For>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
