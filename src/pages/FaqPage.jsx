import FaqAccordion from "../components/faqAccordion/FaqAccordion";
import ContactForm from "../components/contactForm/ContactForm";
import faqData from "../data/faqData";
import styles from "./FaqPage.module.scss";

export default function FaqPage() {
  return (
    <section>
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
        <h1>Preguntas frecuentes</h1>
      </div>

      <div className={styles.container}>
        <FaqAccordion items={faqData} />
      </div>

      <ContactForm />
    </section>
  );
}
