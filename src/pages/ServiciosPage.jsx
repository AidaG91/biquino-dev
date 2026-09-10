import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ContactForm from "../components/contactForm/ContactForm";
import servicios from "../data/serviciosPageData";
import useSeo from "../hooks/useSeo";
import styles from "./ServiciosPage.module.scss";

export default function ServiciosPage() {
  useSeo(
    "Biquiño | Servicios",
    "Personalización de prendas y objetos, diseño técnico aplicado, gestión de proyectos gráficos y presencia web y en redes sociales."
  );

  return (
    <article>

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
              <img
                src={servicio.image}
                alt={servicio.photoCaption.replace(/^Foto:\s*/i, "")}
                loading="lazy"
              />
            </div>

            <div className={styles.rowContent}>
              <h2>{servicio.title}</h2>
              <p>{servicio.description}</p>
              <Link to={`/servicios/${servicio.id}`} className={styles.ctaLink}>
                Ver detalle
                <ArrowRight size={13} strokeWidth={2.3} aria-hidden="true" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <ContactForm />
    </article>
  );
}
