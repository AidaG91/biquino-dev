import Hero from "../components/hero/Hero";
import TrustStrip from "../components/trustStrip/TrustStrip";
import ContactForm from "../components/contactForm/ContactForm";
import ServicesSection from "../components/servicesSection/ServicesSection";
import ProjectsTeaser from "../components/projectsTeaser/ProjectsTeaser";
import useSeo from "../hooks/useSeo";

export default function LandingPage() {
  useSeo(
    "Biquiño | Diseño, papelería, rótulos y merchandising",
    "Biquiño ofrece impresión digital, estampados, merchandising, pegatinas, etiquetas, rotulación de locales y vehículos y papelería corporativa, con diseño, producción e instalación en toda España."
  );

  return (
    <article>

      <Hero />

      <TrustStrip />

      <ServicesSection />

      <ProjectsTeaser />

      <ContactForm />
    </article>
  );
}
