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
      <CallToAction />
      <ContactForm />
    </article>
  );
}
