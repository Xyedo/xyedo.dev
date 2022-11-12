import {
  Accessor,
  Component,
  createContext,
  createEffect,
  createSignal,
  JSXElement,
  mergeProps,
  Setter,
  onMount,
} from "solid-js";

type Ctx = { theme: Accessor<Theme>; setTheme: Setter<Theme> };
type Theme = "light" | "dark";
type Props = {
  children: JSXElement;
  storageKey?: string;
};

const MEDIA = "(prefers-color-scheme: dark)";

export const ThemeContext = createContext<Ctx>();

export const ThemeProvider: Component<Props> = (props) => {
  const local = mergeProps({ storageKey: "theme" }, props);

  const [theme, setTheme] = createSignal<Theme>(
    getInitialTheme(local.storageKey)
  );

  createEffect(() => {
    const root = window.document.documentElement;
    if (theme() === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    window.localStorage.setItem(local.storageKey, theme());
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
const getInitialTheme = (key: string): Theme => {
  let theme: Theme | null = null;
  try {
    const userMedia = window.matchMedia(MEDIA);
    if (userMedia.matches) {
      return "dark";
    }
    theme = (window.localStorage.getItem(key) as Theme) ?? null;

    if (typeof theme === "string") {
      return theme;
    }
  } catch (e) {
    return "dark";
  }
};
