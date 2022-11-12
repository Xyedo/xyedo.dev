import { A } from "solid-start";
import {
  Component,
  splitProps,
  mergeProps,
  JSXElement,
  children,
  JSX,
} from "solid-js";
import { Dynamic } from "solid-js/web";

type ALinkButtonProps = {
  withGradient?: boolean;
  children: JSXElement | string;
  as?: "A" | "button";
};

/**
 *  It give a Link/ anchor that behaves like a button
 * @param props.Link all Props of Link
 * @param props.withGradient - will the button have gradient, default to false
 * @param props.children -can be JSXElement or a string
 * @return {JSXElement} a Linker that behaves like a Button
 */
const ButtonWrapper: Component<
  (Parameters<typeof A>["0"] | JSX.HTMLAttributes<HTMLButtonElement>) &
    ALinkButtonProps
> = (props) => {
  const [not_used, buttonProps] = splitProps(props, [
    "as",
    "children",
    "withGradient",
    "class",
    "classList",
  ]);
  const localProps = mergeProps({ withGradient: false }, not_used);
  const c = children(() => localProps.children);
  return (
    <Dynamic
      component={localProps.as ?? "A"}
      class={`px-5 py-2 text-primary md:text-xl  scale-100 hover:scale-105 transition duration-200 
      ease-linear bg-primary rounded-full border-2 border-secondary hover:border-primary ${localProps.class}`}
      classList={{
        "dark:shadow-gradient-pink shadow-gradient-red":
          localProps.withGradient,
        ...localProps.classList,
      }}
      {...buttonProps}
    >
      {c()}
    </Dynamic>
  );
};
export default ButtonWrapper;
// .box::after {
//   content: "";
//   z-index: -1;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background: inherit;
//   border-radius: inherit;
// }
