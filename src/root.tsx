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

import "~/style/app.css";
import "~/style/tailwind.css";
import "~/style/fontface.css";

export default function Root() {
  return (
    <Html lang="en">
      <Body>
        <ErrorBoundary>
          <AppContext>
            <NavBar />
            <Suspense>
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
