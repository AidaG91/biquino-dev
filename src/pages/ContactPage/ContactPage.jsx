import ContactForm from "@/components/contactForm/ContactForm";
import styles from "./ContactPage.module.scss";

export default function ContactPage() {
  return (
    <section>
      <div className={styles.hero}>
        <h1>Contacto</h1>
      </div>
      <div className={styles.pageContainer}>
        <h2 className={styles.pageTitle}>¿Hablamos de tu proyecto?</h2>
        <p className={styles.pageSubtitle}>
          Rellena el formulario y te responderemos lo antes posible.
        </p>

        <ContactForm className={styles.formContainer} showInfoColumn={false} />
      </div>
    </section>
  );
}
