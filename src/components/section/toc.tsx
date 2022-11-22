import { slug } from "github-slugger";
import { Component, For, JSX, ParentComponent, Show } from "solid-js";
import { useThemeCtx } from "~/context/ThemeProvider";
import { Section } from "~/types";

const SectionButton: ParentComponent<{
  href: string;
  title: string;
  class?: string;
  style?: string | JSX.CSSProperties | undefined;
  classList?: { [k: string]: boolean | undefined };
}> = (props) => (
  <li class={props.class} style={props.style} classList={props.classList}>
    <a href={props.href} target="_self">
      {props.title}
    </a>
    {props.children}
  </li>
);
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
          >
            <Show when={firstLevel.children}>
              <ul>
                <For each={firstLevel.children}>
                  {(secondLevel, idx) => (
                    <SectionButton
                      title={secondLevel.value}
                      class={`text-secondary hover:text-primary list-none ml-4 my-2
                      `}
                      classList={{
                        "mb-2": idx() === firstLevel.children!.length,
                      }}
                      style={textColor(slug(secondLevel.value))}
                      href={`#${slug(secondLevel.value)}`}
                    >
                      <Show when={secondLevel.children}>
                        <ul>
                          <For each={secondLevel.children}>
                            {(thirdLevel, idx) => (
                              <SectionButton
                                title={thirdLevel.value}
                                class={
                                  "text-secondary hover:text-primary list-none ml-4 my-2"
                                }
                                classList={{
                                  "mb-2":
                                    idx() === secondLevel.children!.length,
                                }}
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
