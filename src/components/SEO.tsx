import { Meta, Title, useLocation } from "solid-start";
import { Component, mergeProps } from "solid-js";

const defaultMeta = {
  title: "Hafid Mahdi",
  siteName: "xyedo.dev",
  description:
    "A blog and online portfolio by Hafid Mahdi. Showcase of my projects, and some of my thoughts about being an engineers.",
  url: "https://xyedo.dev",
  image: "https://xyedo.dev/favicon/large-og.jpg",
  type: "website",
  robots: "follow, index",
};
type Props = {};

const SEO: Component<Props & Partial<typeof defaultMeta>> = (props) => {
  const location = useLocation();
  const localProps = mergeProps(defaultMeta, props);
  return (
    <>
      <Title>{localProps.title}</Title>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <Meta name="robots" content={localProps.robots} />
      <Meta name="description" content={localProps.description} />

      <Meta property="og:title" content={localProps.title} />
      <Meta property="og:type" content={localProps.type} />
      <Meta
        property="og:url"
        content={`${localProps.url}/${location.pathname}`}
      />
      <Meta property="og:image" content={localProps.image} />

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@hafidmahdiii" />
      <Meta name="twitter:title" content={localProps.title} />
      <Meta name="twitter:description" content={localProps.description} />
      <Meta name="twitter:image" content={localProps.image} />

      <Meta name="theme-color" content="#000000" />
    </>
  );
};

export default SEO;
