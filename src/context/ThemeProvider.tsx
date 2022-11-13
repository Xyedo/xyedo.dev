import {
  Accessor,
  Component,
  createContext,
  createEffect,
  createSignal,
  JSXElement,
  mergeProps,
  onCleanup,
  onMount,
  Setter,
} from "solid-js";

type Ctx = { theme: Accessor<Theme>; setTheme: Setter<Theme> };
type Theme = "light" | "dark" | undefined;
type Props = {
  children: JSXElement;
  storageKey?: string;
};

const MEDIA = "(prefers-color-scheme: dark)";

export const ThemeContext = createContext<Ctx>();

export const ThemeProvider: Component<Props> = (props) => {
  const local = mergeProps({ storageKey: "theme" }, props);

  const [theme, setTheme] = createSignal<Theme>(getTheme(local.storageKey));
  const getSystemTheme = (ev: MediaQueryListEvent | MediaQueryList) => {
    const isDark = ev.matches;
    const systemTheme = isDark ? "dark" : "light";
    setTheme(systemTheme);
    localStorage.setItem(local.storageKey, systemTheme);
  };
  onMount(() => {
    const val = localStorage.getItem(local.storageKey) as Theme | null;
    if (val) {
      setTheme(val);
    }
  });
  //listen to system pref
  createEffect(() => {
    const media = window.matchMedia(MEDIA);
    media.addListener(getSystemTheme);
    media.addEventListener("change", getSystemTheme);

    onCleanup(() => {
      media.removeListener(getSystemTheme);
      media.removeEventListener("change", getSystemTheme);
    });
  });
  //listen to state theme
  createEffect(() => {
    const root = window.document.documentElement;
    if (theme() === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
    } else if (theme() === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    if (typeof theme() !== "undefined") {
      window.localStorage.setItem(local.storageKey, theme()!);
    }
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
const getTheme = (key: string, fallback?: Theme): Theme => {
  if (typeof window === "undefined") return undefined;
  let theme: Theme;
  try {
    theme = (localStorage.getItem(key) as Theme) ?? undefined;
  } catch (e) {
    // Unsupported
  }
  return theme ?? fallback;
};
