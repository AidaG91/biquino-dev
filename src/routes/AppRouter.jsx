import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const ContactPage = lazy(() => import("../pages/ContactPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
const ServiciosPage = lazy(() => import("../pages/ServiciosPage"));

function Loading() {
  return null;
}

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/faq" element={<h1>FAQ</h1>} />

        <Route path="/contacto" element={<ContactPage />} />

        <Route path="/servicios" element={<ServiciosPage />} />

        <Route path="/proyectos" element={<ProjectsPage />} />

        <Route path="*" element={<p>404 · Route not found</p>} />
      </Routes>
    </Suspense>
  );
}
