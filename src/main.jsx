import { hydrateRoot } from "react-dom/client";
import { startTransition } from "react";
import { createHead, UnheadProvider } from "@unhead/react/client";
import { createAppRouter } from "./routes/AppRouter";
import "./styles/main.scss";
import App from "./App.jsx";

const router = createAppRouter();
const head = createHead();

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document.getElementById("app"),
      <UnheadProvider head={head}>
        <App router={router} />
      </UnheadProvider>,
    );
  });
}

if (router.state.initialized) {
  hydrate();
} else {
  const unsub = router.subscribe((state) => {
    if (state.initialized) {
      unsub();
      hydrate();
    }
  });
}
