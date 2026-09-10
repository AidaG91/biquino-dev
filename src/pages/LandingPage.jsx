import Hero from "../components/hero/Hero";
import TrustStrip from "../components/trustStrip/TrustStrip";
import ContactForm from "../components/contactForm/ContactForm";
import ServicesSection from "../components/servicesSection/ServicesSection";
import ProjectsTeaser from "../components/projectsTeaser/ProjectsTeaser";
import useSeo from "../hooks/useSeo";

export default function LandingPage() {
  useSeo(
    "Biquiño | Diseño, papelería, rótulos y merchandising",
    "Biquiño ofrece diseño, producción e instalación de papelería corporativa, merchandising, rótulos y escaparates en toda España."
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
