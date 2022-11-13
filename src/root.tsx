// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Html,
  Routes,
  Scripts,
} from "solid-start";
import NavBar from "./components/NavBar";
import AppContext from "./context";

import "~/style/tailwind.css";
import "~/style/fontface.css";

export default function Root() {
  return (
    <Html lang="en">
      <Body>
        <ErrorBoundary>
          <AppContext>
            <Suspense>
              <NavBar />
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
