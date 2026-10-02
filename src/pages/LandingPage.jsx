import Hero from "../components/hero/Hero";
import TrustStrip from "../components/trustStrip/TrustStrip";
import ContactForm from "../components/contactForm/ContactForm";
import ServicesSection from "../components/servicesSection/ServicesSection";
import ProjectsTeaser from "../components/projectsTeaser/ProjectsTeaser";
import AboutSection from "../components/aboutSection/AboutSection";
import useSeo from "../hooks/useSeo";
import useLocalBusinessSchema from "../hooks/useLocalBusinessSchema";

export default function LandingPage() {
  useSeo(
    "Rotulación, impresión y merchandising en toda España | Biquiño",
    "Rotulación de locales y vehículos, impresión digital, merchandising y papelería. Diseño, producción e instalación desde Verín (Ourense) a toda España."
  );
  useLocalBusinessSchema();

  return (
    <article>

      <Hero />

      <TrustStrip />

      <ServicesSection />

      <ProjectsTeaser />

      <AboutSection />

      <ContactForm />
    </article>
  );
}
