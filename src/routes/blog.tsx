import { Component } from "solid-js";
import ButtonWrapper from "../components/Button";
import HeroSections from "../components/section/hero-sections";
type Props = {};

const Blog: Component<Props> = (props) => {
  return (
    <main>
      <HeroSections
        title={"The OG Blog"}
        subtitle={
          "You might feel you wasting your time, get enlightenment, get motivated or just wanna read more?"
        }
        imageProps={{ src: "/img/rocket-boy-2.png" }}
        imageSize="large"
        action={
          <div class="flex space-x-4">
            <ButtonWrapper href="/subscribe" withGradient>
              Subcribe The Blog
            </ButtonWrapper>
          </div>
        }
        arrowIcon
        arrowUrl="#curated-blogs"
      />
    </main>
  );
};

export default Blog;
