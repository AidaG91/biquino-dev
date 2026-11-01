/* eslint-disable react-refresh/only-export-components */
import LandingPage from "../pages/landingPage/LandingPage";
import SiteLayout from "./SiteLayout";

const ContactPage = () =>
  import("../pages/contactPage/ContactPage").then((m) => ({
    Component: m.default,
  }));
const ProjectsPage = () =>
  import("../pages/projectsPage/ProjectsPage").then((m) => ({
    Component: m.default,
  }));
const ServiciosPage = () =>
  import("../pages/serviciosPage/ServiciosPage").then((m) => ({
    Component: m.default,
  }));
const ServicioDetailPage = () =>
  import("../pages/servicioDetailPage/ServicioDetailPage").then((m) => ({
    Component: m.default,
  }));
const FaqPage = () =>
  import("../pages/faqPage/FaqPage").then((m) => ({ Component: m.default }));
const PoliticaPrivacidadPage = () =>
  import("../pages/politicaPrivacidadPage/PoliticaPrivacidadPage").then(
    (m) => ({
      Component: m.default,
    }),
  );
const AvisoLegalPage = () =>
  import("../pages/avisoLegalPage/AvisoLegalPage").then((m) => ({
    Component: m.default,
  }));
const NotFoundPage = () =>
  import("../pages/notFoundPage/NotFoundPage").then((m) => ({
    Component: m.default,
  }));

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
      { path: "/politica-de-privacidad", lazy: PoliticaPrivacidadPage },
      { path: "/aviso-legal", lazy: AvisoLegalPage },
      { path: "/404", lazy: NotFoundPage },
      { path: "*", lazy: NotFoundPage },
    ],
  },
];
