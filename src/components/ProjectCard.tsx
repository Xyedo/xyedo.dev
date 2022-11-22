import { ProjectInfo } from "content/project/list";
import { Component, For } from "solid-js";
import { A } from "solid-start";

interface ProjectCard extends Omit<ProjectInfo, "body"> {
  id: string;
}
const ProjectCard: Component<ProjectCard> = (props) => {
  return (
    <A href={`/project/${props.id}`}>
      <div
        class={`relative w-100% h-72 mb-10 rounded-xl bg-primary border-2
     border-pink text-lg overflow-hidden cursor-pointer shadow-xl 
     transition hover:shadow-sm hover:-translate-y-1 before:content-[""] 
     before:absolute before:top-0 before:right-0 before:bottom-0 
     before:left-0 before:opacity-[0.07] before:bg-gradient-to-l 
     even:before:bg-gradient-to-bl`}
      >
        <div class="absolute top-0 right-0 bottom-0 left-0">
          <img
            class="absolute h-72 w-[400px] top-0 left-0 transition 
          even:left-[initial] even:right-0 hover:scale-105 hover:rotate-1"
            src={props.banner}
          />
          <div
            class={`absolute top-[7%] bottom-[7%] left-[430px] 
          w-[calc(100%-470px) text-lg even:left-[initial] even:right-[430px]
          before:content-[""] before:absolute before:block 
          before:-top-[20%] before:-left-14 before:h-[140%] 
          before:w-14 before:rotate-6 after:content-[""] 
          after:absolute after:-top-[20%] after:h-[140%] 
          after:w-14 after:rotate-6 even:before:hidden 
          after:hidden after:left-[initial] after:-right-14 
          even:after:block
          `}
          >
            <h1 class="text-primary text-2xl">{props.title}</h1>
            <div class="text-secondary">{props.categories}</div>
            <div class="-left-1 w-12 h-1 my-2 mx-0 rounded-md transition" />
            <p class="z-10 text-lg overflow-hidden text-ellipsis">
              {props.description}
            </p>
            <div class="absolute bottom-[3%] text-sm cursor-default select-none pointer-events-none">
              <For each={props.stacks}>
                {(stack) => (
                  <span
                    class={`"inline-block bg-gray-200 dark:bg-gray-800
             text-[#777] rounded-tl-sm rounded-tr-none rounded-br-none 
             rounded-bl-sm leading-6 pt-0 pr-2 pb-9 pl-6 relative mr-5 
             cursor-default select-none transition-colors before:content-[""]
             before:absolute before:bg-current before:rounded-lg 
             before:shadow-inner before:h-1 before:left-2 
             before:w-1 before:top-2 after:content-[""] after:absolute 
             after:border-b-[13px] after:border-b-transparent 
             after:border-l-[10px] after:border-l-[#E0E0E0] 
             after:border-t-[13px] after:border-t-transparent after:-right-3 
             after:top-0
             `}
                  >
                    {stack}
                  </span>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </A>
  );
};
export default ProjectCard;
