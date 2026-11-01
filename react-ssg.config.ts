import { createElement } from "react";
import { defineReactSsgConfig } from "vite-plugin-react-ssg";
import SiteLayout from "./src/routes/SiteLayout";
import LandingPage from "./src/pages/landingPage/LandingPage";
import ContactPage from "./src/pages/contactPage/ContactPage";
import ProjectsPage from "./src/pages/projectsPage/ProjectsPage";
import ServiciosPage from "./src/pages/serviciosPage/ServiciosPage";
import ServicioDetailPage from "./src/pages/servicioDetailPage/ServicioDetailPage";
import FaqPage from "./src/pages/faqPage/FaqPage";
import PoliticaPrivacidadPage from "./src/pages/politicaPrivacidadPage/PoliticaPrivacidadPage";
import AvisoLegalPage from "./src/pages/avisoLegalPage/AvisoLegalPage";
import NotFoundPage from "./src/pages/notFoundPage/NotFoundPage";
import serviciosSubpagesData from "./src/data/serviciosSubpagesData";

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
      {
        path: "/politica-de-privacidad",
        element: createElement(PoliticaPrivacidadPage),
      },
      { path: "/aviso-legal", element: createElement(AvisoLegalPage) },
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
    ...Object.keys(serviciosSubpagesData).map((slug) => `/servicios/${slug}`),
    "/proyectos",
    "/faq",
    "/contacto",
    "/politica-de-privacidad",
    "/aviso-legal",
  ],
  logLevel: "normal",
});
