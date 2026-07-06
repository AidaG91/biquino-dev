import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ContactPage from "../pages/ContactPage";
import ProjectsPage from "../pages/ProjectsPage";
import MaterialsPage from "../pages/MaterialsPage";
import MaterialDetailPage from "../pages/MaterialDetailPage";
import Gracias from "../pages/gracias/Gracias";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/faq" element={<h1>FAQ</h1>} />

      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/gracias" element={<Gracias />} />

      <Route path="/proyectos" element={<ProjectsPage />} />

      <Route path="/materiales" element={<MaterialsPage />} />
      <Route path="/materiales/:id" element={<MaterialDetailPage />} />

      <Route path="*" element={<p>404 · Route not found</p>} />
    </Routes>
  );
}
