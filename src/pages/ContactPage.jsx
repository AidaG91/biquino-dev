import { useSearchParams } from "react-router-dom";
import { Clock, Check, Image, MapPin, ExternalLink } from "lucide-react";
import ContactForm from "../components/contactForm/ContactForm";
import contactInfo from "../data/contactInfo";
import styles from "./ContactPage.module.scss";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const servicioInicial = searchParams.get("servicio") || "";

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
          <Clock size={16} strokeWidth={2} aria-hidden="true" />
          Respuesta en 24–48h
        </span>
        <span>
          <Check size={16} strokeWidth={2} aria-hidden="true" />
          Presupuesto sin compromiso
        </span>
      </div>

      <div className={styles.photoBand}>
        <Image size={32} strokeWidth={1.5} aria-hidden="true" />
        <span>Foto: taller o equipo de Biquiño</span>
      </div>

      <div className={styles.visitSection}>
        <div className={styles.visitInfo}>
          <h2 className={styles.visitTitle}>Visítanos</h2>
          <div className={styles.visitAddress}>
            <span className={styles.badge}>
              <MapPin size={17} strokeWidth={1.8} aria-hidden="true" />
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
            <ExternalLink size={13} strokeWidth={2.2} aria-hidden="true" />
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

      <ContactForm initialServicio={servicioInicial} />
    </article>
  );
}
