import { Component } from "solid-js";

type Props = {
  active: boolean;
};

const PageLoadingBar: Component<Props> = (props) => {
  const duration = 8000;
  const animationName = "page-loading-bar";
  const animationValue = () =>
    props.active ? `${animationName} ${duration}ms infinite` : "none";
  return (
    <div class=" absolute z-50 w-full overflow-hidden pointer-events-none h-1">
      <div
        class="w-full h-full rounded-full bg-pink-alt"
        // style={`transform: translateX(-100%); animation: ${animationValue()}; transform-origin: left; `}
        style={{
          transform: "translateX(-100%)",
          "transform-origin": "left",
          animation: animationValue(),
        }}
      />
    </div>
  );
};

export default PageLoadingBar;
