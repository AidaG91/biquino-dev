import Hero from "../components/hero/Hero";
import CallToAction from "../components/sections/CallToAction";
import ContactForm from "../components/sections/ContactForm";
import ServicesSection from "../components/servicesSection/ServicesSection";

export default function LandingPage() {
  return (
    <article>
      <Hero />

      <ServicesSection />
    
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
