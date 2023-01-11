import { Component } from "solid-js";
import HeroSections from "~/components/section/hero-sections";
import ButtonWrapper from "~/components/Button";

const NotFound: Component = () => (
    <main>
      <HeroSections
        title={"Oops Sorry"}
        subtitle={"The sites doesnt have this route, yet!"}
        imageProps={{ src: "/img/404.png" }}
        imageSize={"giant"}
        action={
          <div class="flex space-x-4">
            <ButtonWrapper href="/" withGradient>
              Take me Home
            </ButtonWrapper>
          </div>
        }
      />
    </main>
  );

export default NotFound;
