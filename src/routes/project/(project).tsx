import { Component } from "solid-js";
import SEO from "~/components/SEO";
import HeroSections from "../../components/section/hero-sections";
import ButtonWrapper from "~/components/Button";
type Props = {};

const Project: Component<Props> = () => {
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
        arrowUrl={"#curated"}
      />
    </main>
  );
};

export default Project;
