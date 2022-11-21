import { A, useIsRouting, useMatch } from "solid-start";
import {
  Component,
  createSignal,
  For,
  mergeProps,
  Show,
  splitProps,
  useContext,
} from "solid-js";
import { ThemeContext } from "~/context/ThemeProvider";
import { BiRegularMoon, BiRegularSun } from "solid-icons/bi";
import { FaSolidCircle } from "solid-icons/fa";
import { TiTimes } from "solid-icons/ti";
import { Motion } from "@motionone/solid";
import { Portal } from "solid-js/web";
import PageLoaderBar from "~/components/loader/page-loading-bar";
type Props = {};
const LINKS = [
  { name: "Blog", to: "/blog" },
  { name: "Project", to: "/project" },
  { name: "About", to: "/about" },
];
const MOBILE_LINK = [
  { name: "Home", to: "/" },
  ...LINKS,
  { name: "Subscribe", to: "/subscribe" },
];

const NavLink: Component<Parameters<typeof A>["0"] & { name: string }> = (
  props
) => {
  const [local, linkProps] = splitProps(props, ["href", "name"]);
  const match = useMatch(() => local.href);
  return (
    <li class="px-5 py-2">
      <A
        href={local.href}
        {...linkProps}
        class="underlined font-semibold focus:outline-none block whitespace-nowrap text-lg hover:text-pink focus:text-pink"
        classList={{
          "active text-pink": Boolean(match()),
          "text-primary": Boolean(!match()),
        }}
      >
        {local.name}
      </A>
    </li>
  );
};
const iconTransformOrigin = { "transform-origin": "50% 100px" };
const DarkModeToggle: Component<{
  variant?: "icon" | "labelled";
}> = (props) => {
  const merged = mergeProps({ variant: "icon" }, props);
  const ctx = useContext(ThemeContext);

  return (
    <button
      onClick={() => {
        ctx?.setTheme((previousTheme) =>
          previousTheme === "dark" ? "light" : "dark"
        );
      }}
      class={
        "border-secondary hover:border-pink focus:border-pink focus:outline-none inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition"
      }
      classList={{
        "w-14": merged.variant === "icon",
        "px-8": merged.variant === "labelled",
      }}
    >
      <div class="relative h-8 w-8">
        <span
          class="absolute inset-0 rotate-0 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
          style={iconTransformOrigin}
        >
          <div>
            <BiRegularSun size={30} />
          </div>
        </span>

        <span
          class="absolute inset-0 rotate-90 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
          style={iconTransformOrigin}
        >
          <div>
            <BiRegularMoon size={30} />
          </div>
        </span>
      </div>
      <span
        class={"ml-4 text-primary font-medium dark:text-white"}
        classList={{ "sr-only": merged.variant === "icon" }}
      >
        {ctx?.theme() === "dark"
          ? "switch to light mode"
          : "switch to dark mode"}
      </span>
    </button>
  );
};
const topVariants = {
  open: { rotate: 45, y: 7 },
  closed: { rotate: 0, y: 0 },
};

const centerVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const bottomVariants = {
  open: { rotate: -45, y: -5 },
  closed: { rotate: 0, y: 0 },
};

const MobileMenu: Component = () => {
  const [isExpanded, setExpanded] = createSignal(false);
  const state = () => (isExpanded() ? "open" : "closed");
  return (
    <>
      <button
        class="focus:border-pink hover:border-pink border-secondary text-primary focus:outline-none inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition"
        onClick={() => setExpanded((v) => !v)}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Motion.rect
            animate={state()}
            variants={topVariants}
            transition={{ duration: 0 }}
            x="6"
            y="9"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
          />
          <Motion.rect
            animate={state()}
            variants={centerVariants}
            transition={{ duration: 0 }}
            x="6"
            y="15"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
          />
          <Motion.rect
            animate={state()}
            variants={bottomVariants}
            transition={{ duration: 0 }}
            x="6"
            y="21"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
          />
        </svg>
      </button>
      <MobileMenuList isExpanded={isExpanded()} setExpanded={setExpanded} />
    </>
  );
};
type MobileMenuListProps = {
  isExpanded: boolean;
  setExpanded: (v: boolean) => void;
};
const MobileMenuList: Component<MobileMenuListProps> = (props) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <Show when={props.isExpanded}>
      <Portal>
        <aside
          class="fixed z-50 w-full h-full bg-primary grid items-center top-20 left-0 right-0
    transition duration-300 ease-in-out"
          classList={{
            "opacity-1 top-0": props.isExpanded,
            "opacity-0 -top-full": !props.isExpanded,
          }}
        >
          <div
            class={`absolute top-7 right-4 bg-transparent text-4xl cursor-pointer 
              outline-none`}
            onClick={() => props.setExpanded(false)}
          >
            <TiTimes
              class="text-primary"
              color={themeCtx?.theme() === "dark" ? "#fff" : "#000"}
            />
          </div>

          <div class="text-primary">
            <ul class="grid text-center grid-cols-1 grid-rows-[repeat(5,90px)]">
              <For each={MOBILE_LINK}>
                {(link) => (
                  <li
                    class="flex items-center justify-center text-2xl no-underline list-none 
                   transition duration-200 ease-in-out cursor-pointer hover:text-pink font-medium"
                  >
                    <A href={link.to} onClick={() => props.setExpanded(false)}>
                      {link.name}
                    </A>
                  </li>
                )}
              </For>
            </ul>
            <div class="py-9 text-center">
              <DarkModeToggle variant="labelled" />
            </div>
          </div>
        </aside>
      </Portal>
    </Show>
  );
};
const Subscribe: Component = () => {
  return (
    <A
      href="/subscribe"
      aria-label="Subscribe My Blog"
      class={
        "focus:outline-none ml-4 inline-flex h-14 w-14 items-center justify-center rounded-full"
      }
    >
      <FaSolidCircle class={"text-pink transition"} size={50} />
    </A>
  );
};

const NavBar: Component<Props> = () => {
  const isRouting = useIsRouting();
  return (
    <header>
      <div class="px-[5vw] py-9 lg:py-12">
        <nav class="text-primary mx-auto flex items-center justify-between">
          <div>
            <A
              href="/"
              class="text-primary underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition"
            >
              <h1 class="font-semibold">Xyedo</h1>
            </A>
          </div>

          <ul class="hidden lg:flex">
            <For each={LINKS}>
              {(link) => <NavLink href={link.to} name={link.name} />}
            </For>
          </ul>
          <div class="flex items-center justify-center">
            <div class="block lg:hidden">
              <MobileMenu />
            </div>
            <div class="hidden lg:block ">
              <DarkModeToggle />
            </div>
            <Subscribe />
          </div>
        </nav>
      </div>
      <PageLoaderBar active={isRouting()} />
    </header>
  );
};

export default NavBar;
