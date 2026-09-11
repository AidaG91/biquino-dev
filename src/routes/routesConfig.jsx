/* eslint-disable react-refresh/only-export-components */
import LandingPage from "../pages/LandingPage";
import SiteLayout from "./SiteLayout";

const ContactPage = () =>
  import("../pages/ContactPage").then((m) => ({ Component: m.default }));
const ProjectsPage = () =>
  import("../pages/ProjectsPage").then((m) => ({ Component: m.default }));
const ServiciosPage = () =>
  import("../pages/ServiciosPage").then((m) => ({ Component: m.default }));
const ServicioDetailPage = () =>
  import("../pages/ServicioDetailPage").then((m) => ({ Component: m.default }));
const FaqPage = () =>
  import("../pages/FaqPage").then((m) => ({ Component: m.default }));
const NotFoundPage = () =>
  import("../pages/NotFoundPage").then((m) => ({ Component: m.default }));

export const routes = [
  {
    element: <SiteLayout />,
    HydrateFallback: () => null,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/faq", lazy: FaqPage },
      { path: "/contacto", lazy: ContactPage },
      { path: "/servicios", lazy: ServiciosPage },
      { path: "/servicios/:slug", lazy: ServicioDetailPage },
      { path: "/proyectos", lazy: ProjectsPage },
      { path: "/404", lazy: NotFoundPage },
      { path: "*", lazy: NotFoundPage },
    ],
  },
];