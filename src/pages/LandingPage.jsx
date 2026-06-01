import Hero from "../components/hero/Hero";
import ContactForm from "../components/sections/ContactForm";
import ServicesSection from "../components/servicesSection/ServicesSection";
import ProjectsSection from "../components/projectsSection/ProjectsSection";

export default function LandingPage() {
  return (
    <article>
      <Hero />

      <ServicesSection />

      <ProjectsSection />

      <ContactForm />
    </article>
  );
}
