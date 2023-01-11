import { Component } from "solid-js";
import { Motion } from "@motionone/solid";
import ButtonWrapper from "~/components/Button";
import SEO from "~/components/SEO";

type Props = {};

const About: Component<Props> = () => (
    <main class="relative mx-[10vw] text-primary min-h-max">
      <SEO title="About / Xyedo" />
      <Motion.section
        initial={{ opacity: 0, y: -25 }}
        inView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      >
        <h1 class="text-2xl md:text-3xl font-semibold">About</h1>
        <h2 class="bg-red-grad dark:bg-pink-grad transition-colors duration-200 ease-linear font-black text-pink text-lg md:text-xl lg:text-3xl pb-2">
          Xyedo | hafid Mahdi
        </h2>
        <div class="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 lg:mx-auto">
          <div class="col-span-full mb-12 lg:mb-0 px-10 lg:col-span-4 lg:col-start-9 ">
            <Motion.img
              src="/img/jetpack.png"
              class="h-auto w-full object-contain md:-mt-20"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.75 }}
            />
          </div>
          <article class="col-span-full pt-6 lg:col-start-1 lg:row-start-1  lg:h-full lg:col-span-8 dark:text-blog-dark text-blog">
            <p>
              Hello readers! I'm Xyedo if you know me from Online, or Hafid
              Mahdi if you know me from my real life. I Have a Major in
              Electronics, So, ive been suffering writing Embedded C/C++ in
              Arduino or HAL API in STM32.
            </p>
            <p class="my-5">
              I started Web Development espescially in Front-End Development in
              2019, when i wanna run away from low level programming to high
              level like Javascript, and eventually fall in love with
              Typescript. In 2021, I just tired using Firebase as a Back-End As
              a Services, I started Learning Back End Development too,
              espescially in Express and Golang. Because of my background
              (Embedded C/C++) , i grasp golang Enourmosly because its kinda
              like C, but battery included. so i started to learn Golang aswell.
            </p>
            <p>
              I like to call myself T-shaped Engineer because my skillset is
              broad. Documenting my past project is essential to remember things
              and sharing my thought through writing blogs makes me can easily
              share my knowledge and thought. So at last, if you have some
              critics or need some helps, feel free to contact me.
            </p>
          </article>
        </div>
      </Motion.section>
      <Motion.div
        initial={{ opacity: 0, y: -25 }}
        inView={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
        class="mt-4 flex space-x-4"
      >
        <ButtonWrapper
          as="A"
          withGradient
          href="https://www.linkedin.com/in/hafidmahdi/"
          target="_blank"
        >
          Connect
        </ButtonWrapper>
        <ButtonWrapper href="">Portofolio</ButtonWrapper>
      </Motion.div>
    </main>
  );

export default About;
