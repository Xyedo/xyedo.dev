// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import NavBar from "./components/NavBar";
import AppContext from "~/context";

import "~/style/tailwind.css";
import "~/style/fontface.css";
import Spinner from "~/components/loader/spinner";

export default function Root() {
  return (
    <Html lang="en">
      <Body>
        <Head>
          <Title>Xyedo's Websites</Title>
          <Meta charset="utf-8" />
        </Head>
        <ErrorBoundary>
          <AppContext>
            <NavBar />
            <Suspense
              fallback={
                <div class="flex items-center justify-center">
                  <Spinner />
                </div>
              }
            >
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
