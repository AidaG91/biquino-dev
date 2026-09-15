import { hydrateRoot } from "react-dom/client";
import { startTransition } from "react";
import { createAppRouter } from "./routes/AppRouter";
import "./styles/main.scss";
import App from "./App.jsx";

const router = createAppRouter();

if (router.state.initialized) {
  startTransition(() => {
    hydrateRoot(document.getElementById("app"), <App router={router} />);
  });
} else {
  const unsub = router.subscribe((state) => {
    if (state.initialized) {
      unsub();
      startTransition(() => {
        hydrateRoot(document.getElementById("app"), <App router={router} />);
      });
    }
  });
}
