import { createElement } from "react";
import { defineReactSsgConfig } from "vite-plugin-react-ssg";
import SiteLayout from "./src/routes/SiteLayout";
import LandingPage from "./src/pages/LandingPage";
import ContactPage from "./src/pages/ContactPage";
import ProjectsPage from "./src/pages/ProjectsPage";
import ServiciosPage from "./src/pages/ServiciosPage";
import ServicioDetailPage from "./src/pages/ServicioDetailPage";
import FaqPage from "./src/pages/FaqPage";
import NotFoundPage from "./src/pages/NotFoundPage";

const ssgRoutes = [
  {
    element: createElement(SiteLayout),
    children: [
      { path: "/", element: createElement(LandingPage) },
      { path: "/faq", element: createElement(FaqPage) },
      { path: "/contacto", element: createElement(ContactPage) },
      { path: "/servicios", element: createElement(ServiciosPage) },
      { path: "/servicios/:slug", element: createElement(ServicioDetailPage) },
      { path: "/proyectos", element: createElement(ProjectsPage) },
      { path: "/404", element: createElement(NotFoundPage) },
    ],
  },
];

export default defineReactSsgConfig({
  history: "browser",
  origin: "https://biquino.es",
  routes: ssgRoutes,
  paths: [
    "/",
    "/servicios",
    "/servicios/personalizacion",
    "/servicios/diseno-tecnico",
    "/servicios/gestion-proyectos",
    "/servicios/web-rrss",
    "/proyectos",
    "/faq",
    "/contacto",
  ],
  logLevel: "normal",
});