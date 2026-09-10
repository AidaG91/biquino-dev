import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";
import contactInfo from "../../data/contactInfo";
import servicios from "../../data/serviciosPageData";
import styles from "./ContactForm.module.scss";

export default function ContactForm({
  showInfoColumn = true,
  initialServicio = "",
}) {
  const [showThanks, setShowThanks] = useState(false);

  const {
    formData,
    errors,
    isSending,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm(() => setShowThanks(true), {
    servicio: initialServicio,
  });

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
                  <Mail size={17} strokeWidth={1.8} aria-hidden="true" />
                </span>
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phoneHref}`}
                className={styles.contactLink}
              >
                <span className={styles.badge}>
                  <Phone size={17} strokeWidth={1.8} aria-hidden="true" />
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
                  <MapPin size={17} strokeWidth={1.8} aria-hidden="true" />
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
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className={styles.errorMessage}>{errors.name}</p>
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
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className={styles.errorMessage}>{errors.email}</p>
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
              <label htmlFor="servicio">Servicio de interés</label>
              <select
                className={styles.input}
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
              >
                <option value="">Consulta general / no lo tengo claro</option>
                {servicios.map((servicio) => (
                  <option key={servicio.id} value={servicio.id}>
                    {servicio.title}
                  </option>
                ))}
              </select>
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
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className={styles.errorMessage}>{errors.message}</p>
              )}
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar mensaje"}
              <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </button>

            {showThanks && (
              <div className={styles.formSuccess} role="status">
                <Check size={16} strokeWidth={2.4} aria-hidden="true" />
                Mensaje enviado. Te responderemos en un máximo de 24–48 horas.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
