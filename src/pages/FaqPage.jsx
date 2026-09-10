import FaqAccordion from "../components/faqAccordion/FaqAccordion";
import ContactForm from "../components/contactForm/ContactForm";
import faqData from "../data/faqData";
import useSeo from "../hooks/useSeo";
import styles from "./FaqPage.module.scss";

export default function FaqPage() {
  useSeo(
    "Biquiño | Preguntas frecuentes",
    "Resolvemos las dudas más habituales sobre plazos de entrega, envíos, formas de pago y presupuestos de Biquiño."
  );

  return (
    <article>

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>FAQ</p>
          <h1 className={styles.heroTitle}>Preguntas frecuentes</h1>
          <p className={styles.lead}>
            Lo que más nos preguntan antes de empezar un proyecto. ¿No
            encuentras tu respuesta? Escríbenos.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <FaqAccordion items={faqData} openFirstByDefault />
      </div>

      <ContactForm />
    </article>
  );
}
