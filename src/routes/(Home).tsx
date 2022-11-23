import { blogList } from "~/../content/blog/list";
import { projectList } from "~/../content/project/list";
import { Component, createEffect, For, onCleanup } from "solid-js";
import { createStore } from "solid-js/store";
import { useRouteData } from "solid-start";
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

const BannerInitVal: InitVal = {
  loopNum: 0,
  isDeleting: false,
  delta: 300 - Math.random() * 100,
  text: "",
};
export function routeData() {
  return {
    get blogs() {
      return Object.entries(blogList).sort(
        (a, b) =>
          b[1].date.getUTCMilliseconds() - a[1].date.getUTCMilliseconds()
      ).reverse();
    },
    get projects() {
      return Object.entries(projectList)
        .sort(
          (a, b) =>
            a[1].date.getUTCMilliseconds() - b[1].date.getUTCMilliseconds()
        )
        .reverse().slice(0, 5);
    },
  };
}
const Home: Component = () => {
  const data = useRouteData<typeof routeData>();
  const [state, setState] = createStore(BannerInitVal);
  const toRotate = ["Fullstack dev", "Firmware Eng"];
  const tick = (loopNum: number, isDeleting: boolean, text: string) => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    if (isDeleting) {
      setState((state) => ({
        text: fullText.substring(0, state.text.length - 1),
        delta: 100,
      }));
    } else {
      setState((state) => ({
        text: fullText.substring(0, state.text.length + 1),
      }));
    }
    if (!isDeleting && text === fullText) {
      setState({
        delta: 2000,
        isDeleting: true,
      });
    } else if (isDeleting && text === "") {
      setState((state) => ({
        delta: 200,
        loopNum: state.loopNum + 1,
        isDeleting: false,
      }));
    }
  };
  createEffect(() => {
    const track = setInterval(() => {
      tick(state.loopNum, state.isDeleting, state.text);
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
          <section class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center space-x-4 ">
            <For each={data.blogs}>
              {([id, blog]) => (
                <BlogCard
                  banner={blog.banner}
                  categories={blog.categories}
                  date={blog.date}
                  id={id}
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
              {([idx, project]) => (
                <ProjectCard
                  id={idx}
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
