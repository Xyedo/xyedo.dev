import { ProjectInfo } from "content/project/list";
import { Component, For } from "solid-js";
import { FaSolidArrowRightLong } from "solid-icons/fa";
import { A } from "solid-start";

interface ProjectCard extends Omit<ProjectInfo, "body"> {
  id: string;
}
const ProjectCard: Component<ProjectCard> = (props) => {
  return (
    <div class="box-border w-[92%] md:w-[initial] m-auto md:m-[initial]">
      <A
        href={`/project/${props.id}`}
        class="group block box-border bg-secondary relative p-7 md:flex md:p-12 overflow-hidden items-center max-w-[1000px] m-auto text-primary text rounded-md mb-12 no-underline transition-all hover:shadow-lg"
      >
        <div class="absolute top-0 right-0 uppercase z-10 text-xs border-pink rounded-md border-2 text-primary bg-primary text-primary  py-2 px-4">{props.categories}</div>
        <div class="w-full mt-4 md:my-0 md:w-[35%] object-cover mr-12 rounded-md overflow-hidden shadow-xl">
          <img
            class="block w-full box-border h-36 md:h-[initial] object-cover md:object-[initial] align-middle"
            src={props.banner}
          />
        </div>
        <div class=" box-border w-full mt-9 md:mt-0 md:w-[65%]">
          <div class="box-border text-pink capitalize font-semibold text-lg md:text-xl">
            {props.title}
            <span
              class={`text-xs ml-5 text-primary before:content-['/'] before:text-pink-inverse before:text-2xl before:top-auto before:relative before:mr-3`}
            >
              {props.date.toLocaleDateString()}
            </span>
          </div>
          <div class="box-border ml-0 my-3 w-[70px] h-1 rounded-md bg-gradient-to-r from-[#D23669] to-[#FFA7C4] dark:from-[#FFA7C4] dark:to-[#D23669]" />
          <p class="max-w-md break-words">{props.description}</p>
          <div class="space-x-2 text-sm mt-6">
            <span>Stacks: </span>
            <For each={props.stacks}>
              {(stack) => <span class="capitalize inline-block">{stack}</span>}
            </For>
          </div>
        </div>
        <div class="box-border hidden md:block h-5 w-[15%] relative text-center text-4xl left-0 transition-all group-hover:text-pink group-hover:left-7 m-auto md:m-0">
          <FaSolidArrowRightLong />
        </div>
      </A>
    </div>
  );
};
export default ProjectCard;
