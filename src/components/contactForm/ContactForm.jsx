import { useState, useRef, useEffect } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import styles from "./ContactForm.module.scss";

export default function ContactForm({ showInfoColumn = true }) {
  const [showThanks, setShowThanks] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (showThanks && modalRef.current) {
      modalRef.current.focus();
    }
  }, [showThanks]);

  useEffect(() => {
    if (!showThanks) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowThanks(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showThanks]);

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
            <h2 className={styles.contactTitle}>¿Hablamos de tu proyecto?</h2>
            <h2 className={styles.contactTitle}>Te escuchamos</h2>
            <p>Impresión digital en España</p>
            <h3>Datos de contacto</h3>
            <p>
              biquinostudio@gmail.com <br /> +34 630 53 68 21
            </p>
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

            <button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar"}
            </button>
          </form>
          {showThanks && (
            <div className={styles.modalOverlay}>
              <div
                className={styles.modal}
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                tabIndex="-1"
              >
                <div className={styles.iconWrapper}>
                  <svg
                    className={styles.checkIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>

                <h2 id="modal-title">¡Gracias!</h2>
                <p>Tu mensaje ha sido enviado correctamente.</p>

                <button
                  className={styles.closeButton}
                  onClick={() => setShowThanks(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
