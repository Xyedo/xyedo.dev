import { throttle } from "@solid-primitives/scheduled";
import { createScrollPosition } from "@solid-primitives/scroll";
import { slug } from "github-slugger";
import { createEffect, createSignal, onMount } from "solid-js";
import { Section } from "~/types";
export default function createScrollSpy(sections: () => Section[] | undefined) {
  const [currHeadings, setCurrHeadings] = createSignal<string | null>(null);
  let scrollPosition: { readonly x: number; readonly y: number } | null = null;
  onMount(() => {
    scrollPosition = createScrollPosition();
  });
  const scrollSpy = throttle((position: number) => {
    if (!sections()) {
      return;
    }
    if (sections()?.length === 0) {
      return;
    }
    const flatSections: Omit<Section, "children">[] = [];
    walkSections(sections(), flatSections);
    let prev = flatSections[0];
    const pos = position + 500;
    for (let i = 0; i < flatSections.length; i++) {
      const el = document.getElementById(slug(flatSections[i].value))!;
      if (pos < el?.offsetTop + el?.clientHeight) {
        break;
      }
      prev = flatSections[i];
    }
    setCurrHeadings(slug(prev.value));
  }, 250);
  createEffect(() => scrollSpy(scrollPosition?.y ?? 0));
  return currHeadings;
}
const walkSections = (
  sections: Section[] | undefined,
  flatsection: Omit<Section, "children">[]
) => {
  if (!sections) return;
  if (sections.length === 0) return;
  for (let i = 0; i < sections.length; i++) {
    flatsection.push(sections[i]);
    walkSections(sections[i].children, flatsection);
  }
};
