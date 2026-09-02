import { Link } from "react-router-dom";
import ContactForm from "../components/contactForm/ContactForm";
import servicios from "../data/serviciosPageData";
import styles from "./ServiciosPage.module.scss";

export default function ServiciosPage() {
  return (
    <article>
      <title>Biquiño | Servicios</title>
      <meta
        name="description"
        content="Personalización de prendas y objetos, diseño técnico aplicado, gestión de proyectos gráficos y presencia web y en redes sociales."
      />
      <meta property="og:title" content="Biquiño | Servicios" />
      <meta
        property="og:description"
        content="Personalización de prendas y objetos, diseño técnico aplicado, gestión de proyectos gráficos y presencia web y en redes sociales."
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Biquiño | Servicios" />
      <meta
        name="twitter:description"
        content="Personalización de prendas y objetos, diseño técnico aplicado, gestión de proyectos gráficos y presencia web y en redes sociales."
      />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Servicios</p>
          <h1 className={styles.heroTitle}>
            Todo lo que necesita tu proyecto, en un mismo sitio
          </h1>
          <p className={styles.lead}>
            De la idea al montaje final: cuatro formas en las que trabajamos
            contigo para que tu marca llegue más lejos.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {servicios.map((servicio) => (
          <div key={servicio.id} className={styles.row}>
            <div className={styles.rowImage}>
              <svg
                width="26"
                height="26"
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
              <span>{servicio.photoCaption}</span>
            </div>

            <div className={styles.rowContent}>
              <h2>{servicio.title}</h2>
              <p>{servicio.description}</p>
              <Link to="/contacto" className={styles.ctaLink}>
                Solicitar presupuesto
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <ContactForm />
    </article>
  );
}
