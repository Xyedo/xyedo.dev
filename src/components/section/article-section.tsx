import { BlogInfo } from "content/blog/list";
import { ProjectInfo } from "content/project/list";
import { Accessor, Component, Show } from "solid-js";
import { ReadingTime, Section } from "~/types";
import TableOfContent from "./toc";

type Props = {
  details: ProjectInfo | BlogInfo;
  sections: Accessor<Section[] | undefined>;
  readingTime: Accessor<ReadingTime | undefined>;
  articleData: Accessor<string | undefined>;
  currHeading: Accessor<string | null>;
};
const ArticleSection: Component<Props> = (props) => (
    <div class="mx-auto text-primary my-2 lg:my-10 pt-5 pb-10 px-3 lg:px-12 container">
      <div class="mb-10 lg:flex justify-center">
        <div class="space-y-10 px-4 lg:px-0">
          <div class="container lg:px-10">
            <div class="text-left space-y-5">
              <h1 class="container text-4xl break-words text-center font-semibold mt-10">
                {props.details.title}
              </h1>
              <span class="flex flex-row justify-between">
                <Show when={typeof props.readingTime() !== "undefined"}>
                  <p>
                    {props.readingTime()!.words} words -{" "}
                    {props.readingTime()!.text}
                  </p>
                </Show>
                <p> {props.details.date.toLocaleDateString()}</p>
              </span>

              <img
                class="rounded-md mb-10 shadow-md container object-cover max-h-[1100px]"
                src={props.details.banner}
              />
              <Show when={typeof props.details.bannerCredit === "string"}>
                <p class="text-right">
                  {" "}
                  photo{" "}
                  <a href={props.details.bannerCredit!} class="underline">
                    credit
                  </a>
                </p>
              </Show>
              <hr class="mt-10 w-3/6 mx-auto text-primary" />
            </div>
            <div class="lg:grid lg:grid-cols-12 xl:mx-[5vw]">
              <article class="lg:col-span-10 my-10 prose dark:prose-invert dark:text-blog-dark text-blog">
                <Show when={props.articleData()}>{props.articleData()!}</Show>
              </article>
              <aside class="hidden lg:block lg:col-start-11 lg:col-span-full my-10 text-primary text-lg">
                <div class="sticky top-36">
                  <h1 class="text-2xl mb-4">Table of Content</h1>
                  <TableOfContent
                    currHeading={props.currHeading()}
                    section={props.sections()}
                  />
                </div>
              </aside>
            </div>
          </div>
          <hr class="mt-10 w-3/6 mx-auto" />
        </div>
      </div>
    </div>
  );

export default ArticleSection;
