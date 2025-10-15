import ContactForm from "../components/sections/ContactForm";
import styles from "../styles/ContactPage.module.css";

export default function ContactPage() {
  return (
    <section>
      <div className={styles.hero}>
        <h1>Contacto</h1>
      </div>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>¿Hablamos de tu proyecto?</h1>
        <p className={styles.pageSubtitle}>
          Rellena el formulario y te responderemos lo antes posible.
        </p>

        <ContactForm className={styles.formContainer} showInfoColumn={false} />
      </div>
    </section>
  );
}
