// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import NavBar from "./components/NavBar";
import AppContext from "~/context";

import "~/style/tailwind.css";
import "~/style/fontface.css";
import "~/style/hljs.css";
import "~/style/mdx.css";
import Spinner from "~/components/loader/spinner";

function CustomHead() {
  return (
    <Head>
      <Title>Xyedo's Websites</Title>
      <Meta charset="utf-8" />
      <Link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
      />
      <Link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
      />
      <Link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
      />
      <Link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
      />
      <Link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
      />
      <Link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
      />
      <Link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
      />
      <Link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
      />
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-icon-192x192.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <Link rel="manifest" href="/favicon/manifest.json" />
      <Meta name="msapplication-TileColor" content="#ffffff" />
      <Meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      <Meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
function PageSpinner() {
  return (
    <div class="flex items-center justify-center">
      <Spinner />
    </div>
  );
}
export default function Root() {
  return (
    <Html lang="en">
      <CustomHead />
      <Body>
        <ErrorBoundary>
          <AppContext>
            <NavBar />
            <Suspense fallback={<PageSpinner />}>
              <Routes>
                <FileRoutes />
              </Routes>
            </Suspense>
          </AppContext>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
