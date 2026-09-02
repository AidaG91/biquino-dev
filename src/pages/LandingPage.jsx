import Hero from "../components/hero/Hero";
import TrustStrip from "../components/trustStrip/TrustStrip";
import ContactForm from "../components/contactForm/ContactForm";
import ServicesSection from "../components/servicesSection/ServicesSection";
import ProjectsTeaser from "../components/projectsTeaser/ProjectsTeaser";

export default function LandingPage() {
  return (
    <article>
      <title>Biquiño | Diseño, papelería, rótulos y merchandising</title>
      <meta
        name="description"
        content="Biquiño ofrece diseño, producción e instalación de papelería corporativa, merchandising, rótulos y escaparates en toda España."
      />
      <meta property="og:title" content="Biquiño | Diseño, papelería, rótulos y merchandising" />
      <meta property="og:description" content="Diseño, producción e instalación de papelería corporativa, merchandising, rótulos y escaparates en toda España." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Biquiño | Diseño, papelería, rótulos y merchandising" />
      <meta name="twitter:description" content="Diseño, producción e instalación de papelería corporativa, merchandising, rótulos y escaparates en toda España." />

      <Hero />

      <TrustStrip />

      <ServicesSection />

      <ProjectsTeaser />

      <ContactForm />
    </article>
  );
}
