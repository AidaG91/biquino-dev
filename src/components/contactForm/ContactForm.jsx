import { useState } from "react";
import { useContactForm } from "../../hooks/useContactForm";
import contactInfo from "../../data/contactInfo";
import styles from "./ContactForm.module.scss";
import { Toaster } from "react-hot-toast";

export default function ContactForm({ showInfoColumn = true }) {
  const [showThanks, setShowThanks] = useState(false);

  const {
    formData,
    errors,
    isSending,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm(() => setShowThanks(true));

  return (
    <section className={styles.contactWrapper}>
      <div className={styles.contact}>
        {showInfoColumn && (
          <div className={styles.cfLeft}>
            <span className={styles.pill}>Hablemos</span>
            <h2 className={styles.contactTitle}>
              ¿Hablamos de tu proyecto?
            </h2>
            <p className={styles.contactLead}>
              Cuéntanos qué necesitas — sin compromiso. Te respondemos en un
              máximo de 24–48 horas.
            </p>

            <div className={styles.contactLinks}>
              <a
                href={`mailto:${contactInfo.email}`}
                className={styles.contactLink}
              >
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
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phoneHref}`}
                className={styles.contactLink}
              >
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
                    <path d="M4 4h4l2 6-3 2a13 13 0 0 0 6 6l2-3 6 2v4a2 2 0 0 1-2 2A17 17 0 0 1 2 6a2 2 0 0 1 2-2Z" />
                  </svg>
                </span>
                {contactInfo.phoneDisplay}
              </a>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
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
                {contactInfo.addressLine1}, {contactInfo.addressLine2}
              </a>
            </div>
          </div>
        )}

        <div className={styles.cfRight}>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre completo *</label>
              <input
                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                type="text"
                id="name"
                name="name"
                placeholder="Nombre y apellidos"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.name && (
                <p className={styles.errorMessage}>{errors.name}</p>
              )}
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Correo electrónico *</label>
                <input
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Teléfono</label>
                <input
                  className={styles.input}
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+34 600 000 000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Sobre tu proyecto *</label>
              <textarea
                className={`${styles.input} ${errors.message ? styles.inputError : ""}`}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                placeholder="Cuéntanos tu proyecto…"
                required
              />
              {errors.message && (
                <p className={styles.errorMessage}>{errors.message}</p>
              )}
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar mensaje"}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>

            {showThanks && (
              <div className={styles.formSuccess} role="status">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Mensaje enviado. Te responderemos en un máximo de 24–48 horas.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
