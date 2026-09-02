import ContactForm from "../components/contactForm/ContactForm";
import contactInfo from "../data/contactInfo";
import styles from "./ContactPage.module.scss";

export default function ContactPage() {
  return (
    <article>
      <title>Biquiño | Contacto</title>
      <meta
        name="description"
        content="Cuéntanos tu proyecto. Rellena el formulario o escríbenos directamente — te respondemos en un máximo de 24–48 horas."
      />
      <meta property="og:title" content="Biquiño | Contacto" />
      <meta
        property="og:description"
        content="Cuéntanos tu proyecto. Rellena el formulario o escríbenos directamente — te respondemos en un máximo de 24–48 horas."
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Biquiño | Contacto" />
      <meta
        name="twitter:description"
        content="Cuéntanos tu proyecto. Rellena el formulario o escríbenos directamente — te respondemos en un máximo de 24–48 horas."
      />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Contacto</p>
          <h1 className={styles.heroTitle}>Cuéntanos tu proyecto</h1>
          <p className={styles.lead}>
            Rellena el formulario o escríbenos directamente — te respondemos
            en un máximo de 24–48 horas.
          </p>
        </div>
      </div>

      <div className={styles.trustRow}>
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
          </svg>
          Respuesta en 24–48h
        </span>
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M20 7 9 18l-5-5" />
          </svg>
          Presupuesto sin compromiso
        </span>
      </div>

      <div className={styles.photoBand}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.6" />
          <path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2 0L4 19" />
        </svg>
        <span>Foto: taller o equipo de Biquiño</span>
      </div>

      <div className={styles.visitSection}>
        <div className={styles.visitInfo}>
          <h2 className={styles.visitTitle}>Visítanos</h2>
          <div className={styles.visitAddress}>
            <span className={styles.badge}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <div>
              <div className={styles.addressLine1}>
                {contactInfo.addressLine1}
              </div>
              <div className={styles.addressLine2}>
                {contactInfo.addressLine2}
              </div>
            </div>
          </div>
          <a
            href={contactInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapsLink}
          >
            Cómo llegar (Google Maps)
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        <div className={styles.visitMap}>
          <iframe
            src={contactInfo.mapEmbedUrl}
            title={`Mapa de ubicación: ${contactInfo.addressLine1}, ${contactInfo.addressLine2}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <ContactForm />
    </article>
  );
}
