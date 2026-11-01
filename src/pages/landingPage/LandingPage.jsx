import Hero from "../../components/hero/Hero";
import TrustStrip from "../../components/trustStrip/TrustStrip";
import ContactForm from "../../components/contactForm/ContactForm";
import ServicesSection from "../../components/servicesSection/ServicesSection";
import ProjectsTeaser from "../../components/projectsTeaser/ProjectsTeaser";
import AboutSection from "../../components/aboutSection/AboutSection";
import useSeo from "../../hooks/useSeo";
import useLocalBusinessSchema from "../../hooks/useLocalBusinessSchema";
import styles from "./LandingPage.module.scss";

export default function LandingPage() {
  useSeo(
    "Rotulación, impresión y merchandising en toda España | Biquiño",
    "Rotulación de locales y vehículos, impresión digital, merchandising y papelería. Diseño, producción e instalación desde Verín (Ourense) a toda España.",
  );
  useLocalBusinessSchema();

  return (
    <article>
      <div className={styles.firstScreen}>
        <Hero />
        <TrustStrip />
      </div>

      <ServicesSection />

      <ProjectsTeaser />

      <AboutSection />

      <ContactForm />
    </article>
  );
}
