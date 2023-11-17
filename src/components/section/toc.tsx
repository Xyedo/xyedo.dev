import { slug } from "github-slugger";
import {
  Component,
  For,
  JSX,
  ParentComponent,
  Show,
  children,
  createSignal,
} from "solid-js";
import { useThemeCtx } from "~/context/ThemeProvider";
import { Section } from "~/types";
import { FiChevronDown } from "solid-icons/fi";
const SectionButton: ParentComponent<{
  href: string;
  title: string;
  class?: string;
  style?: string | JSX.CSSProperties | undefined;
  classList?: { [k: string]: boolean | undefined };
  collasible?: {
    children: Section[] | undefined;
    open?: boolean;
  };
}> = (props) => {
  const [open, setOpen] = createSignal<boolean>(!props.collasible || Boolean(props.collasible.open));

  const handleCollapsible = () => setOpen((v) => !v);
  return (
    <li class={props.class} style={props.style} classList={props.classList}>
      <span class="hover:cursor-pointer flex justify-between">
        <a href={props.href} target="_self">
          {props.title}
        </a>
        <Show when={props.collasible && props.collasible.children?.length != 0}>
          <FiChevronDown onClick={handleCollapsible} class="mt-1" />
        </Show>
      </span>
      <Show when={open()}>{props.children}</Show>
    </li>
  );
};
type Props = {
  section: Section[] | undefined;
  currHeading: string | null;
};

const TableOfContent: Component<Props> = (props) => {
  const themeCtx = useThemeCtx();
  const textColor = (currHead: string) => {
    const retVal =
      themeCtx?.theme() === "dark"
        ? ({ color: "white" } as const)
        : ({ color: "black" } as const);
    if (currHead === props.currHeading) {
      return retVal;
    }
    return undefined;
  };
  return (
    <For each={props.section}>
      {(firstLevel) => (
        <ul>
          <SectionButton
            title={firstLevel.value}
            class={`text-secondary list-none transition mb-2 hover:text-primary`}
            style={textColor(slug(firstLevel.value))}
            href={`#${slug(firstLevel.value)}`}
            collasible={{
              children: firstLevel.children,
              open:  firstLevel.children && firstLevel.children.length <5
            }}
          >
            <Show when={firstLevel.children}>
              <ul>
                <For each={firstLevel.children}>
                  {(secondLevel, secondIdx) => (
                    <SectionButton
                      title={secondLevel.value}
                      class={`text-secondary hover:text-primary list-none ml-4 my-2
                      `}
                      classList={{
                        "mb-2": secondIdx() === firstLevel.children!.length,
                      }}
                      style={textColor(slug(secondLevel.value))}
                      href={`#${slug(secondLevel.value)}`}
                      collasible={{
                        children: secondLevel.children,
                      }}
                    >
                      <Show when={secondLevel.children}>
                        <ul>
                          <For each={secondLevel.children}>
                            {(thirdLevel, thridIdx) => (
                              <SectionButton
                                title={thirdLevel.value}
                                class={
                                  "text-secondary hover:text-primary list-none ml-4 my-2"
                                }
                                classList={{
                                  "mb-2":
                                    thridIdx() === secondLevel.children!.length,
                                }}
                                style={textColor(slug(thirdLevel.value))}
                                href={`#${slug(thirdLevel.value)}`}
                              />
                            )}
                          </For>
                        </ul>
                      </Show>
                    </SectionButton>
                  )}
                </For>
              </ul>
            </Show>
          </SectionButton>
        </ul>
      )}
    </For>
  );
};

export default TableOfContent;
