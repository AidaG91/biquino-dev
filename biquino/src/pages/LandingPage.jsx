import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import CallToAction from "../components/sections/CallToAction";
import ContactForm from "../components/sections/ContactForm";

export default function LandingPage() {
  return (
    <article>
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <CallToAction
        variant="light"
        title="Gran variedad de materiales con infinidad de aplicaciones"
        subtitle="Explora nuestra galería de materiales."
        buttonText="Materiales"
        buttonLink="/materiales"
      />
      <ContactForm />
    </article>
  );
}
