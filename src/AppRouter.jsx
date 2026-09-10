import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const LandingPage = lazy(() => import("@/pages/LandingPage/LandingPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage/ContactPage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage/ProjectsPage"));
const MaterialsPage = lazy(() => import("@/pages/MaterialsPage/MaterialsPage"));
const MaterialDetailPage = lazy(() =>
  import("@/pages/MaterialDetailPage/MaterialDetailPage"),
);
const FAQPage = lazy(() => import("@/pages/FAQPage/FAQPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/faq" element={<FAQPage />} />

        <Route path="/contacto" element={<ContactPage />} />

        <Route path="/proyectos" element={<ProjectsPage />} />

        <Route path="/materiales" element={<MaterialsPage />} />
        <Route path="/materiales/:id" element={<MaterialDetailPage />} />

        <Route path="/404" element={<NotFoundPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}