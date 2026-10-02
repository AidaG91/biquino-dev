import { useSearchParams } from "react-router-dom";
import { Clock, Check, Image, MapPin, ExternalLink } from "lucide-react";
import ContactForm from "../components/contactForm/ContactForm";
import contactInfo from "../data/contactInfo";
import useSeo from "../hooks/useSeo";
import useLocalBusinessSchema from "../hooks/useLocalBusinessSchema";
import styles from "./ContactPage.module.scss";

const HOURS = [
  { label: "En el local", slots: contactInfo.hours.local },
  { label: "Por teléfono", slots: contactInfo.hours.phone },
];

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const servicioInicial = searchParams.get("servicio") || "";

  useSeo(
    "Contacto y presupuesto | Biquiño",
    "Pide presupuesto sin compromiso. Estamos en Verín (Ourense) y trabajamos en toda España; te respondemos en un máximo de 24–48 horas.",
  );
  useLocalBusinessSchema();

  return (
    <article>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Contacto</p>
          <h1 className={styles.heroTitle}>Cuéntanos tu proyecto</h1>
          <p className={styles.lead}>
            Rellena el formulario o escríbenos directamente.
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

          <div className={styles.hours}>
            <h3 className={styles.hoursTitle}>Horario</h3>
            <div className={styles.hoursGroups}>
              {HOURS.map(({ label, slots }) => (
                <div key={label}>
                  <p className={styles.hoursLabel}>{label}</p>
                  <dl className={styles.hoursList}>
                    {slots.map((slot) => (
                      <div key={slot.days} className={styles.hoursRow}>
                        <dt>{slot.days}</dt>
                        <dd>
                          {slot.opens} – {slot.closes}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
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
