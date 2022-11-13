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
import "~/style/fontface.css";
import "~/style/tailwind.css";

export default function Root() {
  return (
    <Html lang="en">
      <Body>
        <ErrorBoundary>
          <Suspense>
            <AppContext>
              <NavBar />
              <Routes>
                <FileRoutes />
              </Routes>
            </AppContext>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
