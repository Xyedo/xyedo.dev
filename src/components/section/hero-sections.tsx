import { Motion, MotionProxyComponent } from "solid-motionone";
import {
  Component,
  JSXElement,
  mergeProps,
  Show,
  JSX,
  children,
  createSignal,
  createEffect,
  ResolvedChildren,
} from "solid-js";
import ArrowBtn from "../svg/arrow-btn";

type Props =
  | {
      title: string | JSXElement;
      subtitle?: string | JSXElement;
      action: JSXElement;
      imageProps?: Parameters<
        MotionProxyComponent<JSX.ImgHTMLAttributes<HTMLImageElement>>
      >["0"];
      imageSize?: "medium" | "large" | "giant";
    } & {
      arrowIcon?: boolean;
      arrowUrl?: string;
    };

//   // action?: JSXElement;
//   // as?: string;
//   // arrowUrl?: string;
//   // arrowLabel?: string;

// } & {
//   imageProps?: Parameters<typeof Motion.img>["0"];
//   imageSize?: "medium" | "large" | "giant";
//   image?: JSXElement;
// };
// const textVariant = {
//   initial: { opacity: 0, y: 25 },
//   inView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };
const HeroSections: Component<Props> = (props) => {
  const localProps = mergeProps(
    { imageSize: "medium", arrowIcon: false },
    props
  );

  const [title, setTitle] = createSignal<ResolvedChildren | string>();
  const [subtitle, setSubtitle] = createSignal<ResolvedChildren | string>();
  const action = children(() => localProps.action);
  createEffect(() => {
    if (typeof localProps.title !== "string") setTitle(children(() => localProps.title));
    else setTitle(localProps.title);

    if (localProps.subtitle && typeof localProps.subtitle !== "string") setSubtitle(children(() => localProps.subtitle));
    else setSubtitle(localProps.subtitle);
  });
  return (
    <section class="relative mx-[10vw] text-primary">
      <div
        class="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 lg:mx-auto max-w-7xl
        lg:mb-4 h-auto pt-24 lg:min-h-160 lg:pb-12"
      >
        <div
          class="col-span-full mb-12 lg:mb-0"
          classList={{
            "px-10 lg:col-span-5 lg:col-start-7":
              localProps.imageSize === "medium",
            "flex items-start justify-end pl-10 lg:col-span-6 lg:col-start-6 lg:-mt-20":
              localProps.imageSize === "large",
            "flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mt-25 lg:-mr-5vw lg:px-0":
              localProps.imageSize === "giant",
          }}
        >
          <Motion.img
            {...localProps.imageProps}
            class={
              "h-auto w-full object-contain" + localProps.imageProps?.class
            }
            classList={{
              "max-h-50vh": localProps.imageSize === "medium",
              "max-h-75vh": localProps.imageSize === "giant",
              ...localProps.imageProps?.classList,
            }}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.75 }}
          />
        </div>
        <div class="col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
          <div class="py-auto">
            <Motion.div
              initial={{ opacity: 0, y: -25 }}
              inView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            >
              <Show
                when={typeof title() !== "string"}
                fallback={
                  <h1 class="bg-red-grad dark:bg-pink-grad transition-colors duration-200 ease-linear font-black text-pink text-xl md:text-3xl lg:text-5xl pb-2">
                    {title()}
                  </h1>
                }
              >
                {title?.()}
              </Show>
            </Motion.div>
          </div>
          <div class="my-2 lg:mr-8">
            <Show when={typeof subtitle() !== undefined}>
              <Motion.div
                initial={{ opacity: 0, y: -25 }}
                inView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              >
                <Show
                  when={typeof subtitle() !== "string"}
                  fallback={
                    <p class="font-medium text-lg md:text-xl">
                      {subtitle()}
                    </p>
                  }
                >
                  {subtitle?.()}
                </Show>
              </Motion.div>
            </Show>
          </div>
          <Motion.div
            initial={{ opacity: 0, y: -25 }}
            inView={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
            class="mt-4"
          >
            {action()}
          </Motion.div>
        </div>
      </div>
      <Show when={localProps.arrowIcon && localProps.arrowUrl}>
        <div class="mt-4 lg:mt-8">
          <Motion.div
            class=" rounded-full py-2 px-2 w-fit mx-auto cursor-pointer animate-bounce"
            initial={{ opacity: 0, y: -25 }}
            inView={{ opacity: 1, y: 0, transition: { duration: 2.4 } }}
          >
            <ArrowBtn href={localProps.arrowUrl!} />
          </Motion.div>
        </div>
      </Show>
    </section>
  );
};

export default HeroSections;
