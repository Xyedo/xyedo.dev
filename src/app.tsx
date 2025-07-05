// @refresh reload
import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider } from "@solidjs/meta";
import NavBar from "~/components/NavBar";
import AppContext from "~/context";

import "~/style/tailwind.css";
import "~/style/fontface.css";
import "~/style/hljs.css";
import "~/style/mdx.css";
import Spinner from "~/components/loader/spinner";

function PageSpinner() {
  return (
    <div class="flex items-center justify-center">
      <Spinner />
    </div>
  );
}
export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <AppContext>
            <NavBar />
            <Suspense fallback={<PageSpinner />}>{props.children}</Suspense>
          </AppContext>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
