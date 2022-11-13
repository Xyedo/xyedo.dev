import { Component, createEffect, onCleanup } from "solid-js";
import { createStore } from "solid-js/store";
import { Title } from "solid-start";
import ButtonWrapper from "../components/Button";
import HeroSections from "../components/section/hero-sections";
import SEO from "../components/SEO";

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
const Home: Component = () => {
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
    <main>
      <SEO title="Home / Xyedo"/>
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
      <div class="min-h-screen" id="main-section"></div>
    </main>
  );
};

export default Home;
