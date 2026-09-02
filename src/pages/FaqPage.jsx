import FaqAccordion from "../components/faqAccordion/FaqAccordion";
import ContactForm from "../components/contactForm/ContactForm";
import faqData from "../data/faqData";
import styles from "./FaqPage.module.scss";

export default function FaqPage() {
  return (
    <article>
      <title>Biquiño | Preguntas frecuentes</title>
      <meta
        name="description"
        content="Resolvemos las dudas más habituales sobre plazos de entrega, envíos, formas de pago y presupuestos de Biquiño."
      />
      <meta property="og:title" content="Biquiño | Preguntas frecuentes" />
      <meta
        property="og:description"
        content="Resolvemos las dudas más habituales sobre plazos de entrega, envíos, formas de pago y presupuestos de Biquiño."
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Biquiño | Preguntas frecuentes" />
      <meta
        name="twitter:description"
        content="Resolvemos las dudas más habituales sobre plazos de entrega, envíos, formas de pago y presupuestos de Biquiño."
      />

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
