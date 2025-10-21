import { useContactForm } from "../../hooks/useContactForm";
import styles from "../../styles/ContactForm.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm({ showInfoColumn = true }) {
  const {
    formData,
    errors,
    isSending,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  return (
    <section className={styles.contactWrapper}>
      <div className={styles.contact}>
        {showInfoColumn && (
          <div className={styles.cfLeft}>
            <h1 className={styles.contactTitle}>¿Hablamos de tu proyecto?</h1>
            <h2 className={styles.contactTitle}>Te escuchamos</h2>
            <p>Impresión digital en España</p>
            <h3>Datos de contacto</h3>
            <p>
              biquinostudio@gmail.com <br /> +34 630 53 68 21
            </p>
          </div>
        )}

        <div className={styles.cfRight}>
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
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
              />
              {errors.message && (
                <p className={styles.errorMessage}>{errors.message}</p>
              )}
            </div>

            <button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
