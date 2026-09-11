import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routesConfig";

export function createAppRouter() {
  return createBrowserRouter(routes);
}