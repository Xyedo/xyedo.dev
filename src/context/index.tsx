import { Component, JSXElement } from "solid-js";
import { ThemeProvider } from "./ThemeProvider";

type Props = {
  children: JSXElement;
};

const AppContext: Component<Props> = (props) => <ThemeProvider>{props.children}</ThemeProvider>;

export default AppContext;
