import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/faq" element={<h1>FAQ</h1>} />
      <Route path="*" element={<p>404 · Route not found</p>} />
    </Routes>
  );
}
