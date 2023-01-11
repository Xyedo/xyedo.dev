// port from next-themes
import {
  Accessor,
  Component,
  createContext,
  createEffect,
  createSignal,
  JSXElement,
  mergeProps,
  on,
  onCleanup,
  onMount,
  Setter,
  useContext,
} from "solid-js";

type Theme = "light" | "dark" | undefined;
type Ctx = { theme: Accessor<Theme>; setTheme: Setter<Theme> };

type Props = {
  children: JSXElement;
  storageKey?: string;
};

const MEDIA = "(prefers-color-scheme: dark)";

const ThemeContext = createContext<Ctx>();
export function useThemeCtx() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // eslint-disable-next-line no-console
    console.error("Should use this inside a ThemeProvider Component");
  }
  return ctx;
}
const getInitialTheme = (key: string, fallback?: "dark" | "light"): Theme => {
  if (typeof window === "undefined") return undefined;
  let theme: Theme;
  try {
    theme = (localStorage.getItem(key) as Theme) ?? undefined;
  } catch (e) {
    // Unsupported
  }
  return theme ?? fallback;
};

export const ThemeProvider: Component<Props> = (props) => {
  const local = mergeProps({ storageKey: "theme" }, props);

  const [theme, setTheme] = createSignal<Theme>(
    getInitialTheme(local.storageKey)
  );

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
  // listen to system pref
  createEffect(() => {
    const media = window.matchMedia(MEDIA);
    media.addListener(getSystemTheme);
    media.addEventListener("change", getSystemTheme);

    onCleanup(() => {
      media.removeListener(getSystemTheme);
      media.removeEventListener("change", getSystemTheme);
    });
  });
  // listen to theme change
  createEffect(
    on(theme, (currTheme) => {
      const root = window.document.documentElement;
      if (currTheme === "dark") {
        root.classList.remove("light");
        root.classList.add("dark");
      } else if (currTheme === "light") {
        root.classList.remove("dark");
        root.classList.add("light");
      }
      if (typeof currTheme !== "undefined") {
        window.localStorage.setItem(local.storageKey, currTheme);
      }
    })
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
