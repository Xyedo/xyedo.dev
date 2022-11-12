import { A } from "solid-start";
import { Component } from "solid-js";

type Props = {
  href: string;
};

const ArrowBtn: Component<Props> = (props) => {
  return (
    <A href={props.href}>
      <svg class="w-20 h-16 hover-btn scale-[0.65] fill-primary">
        <polygon
          class="arrow-top transition-all duration-200 ease-in-out opacity-50"
          points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
        />
        <polygon
          class="arrow-middle transition-all duration-200 ease-in-out opacity-75"
          points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
        />
        <polygon
          class="arrow-bottom transition-all duration-200 ease-in-out"
          points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
        />
      </svg>
    </A>
  );
};

export default ArrowBtn;
