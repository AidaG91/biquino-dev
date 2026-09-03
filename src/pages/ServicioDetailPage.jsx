import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import serviciosSubpagesData from "../data/serviciosSubpagesData";
import styles from "./ServicioDetailPage.module.scss";

export default function ServicioDetailPage() {
  const { slug } = useParams();
  const servicio = serviciosSubpagesData[slug];

  if (!servicio) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <article>
      <title>{`Biquiño | ${servicio.title}`}</title>
      <meta name="description" content={servicio.lead} />
      <meta property="og:title" content={`Biquiño | ${servicio.title}`} />
      <meta property="og:description" content={servicio.lead} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Biquiño | ${servicio.title}`} />
      <meta name="twitter:description" content={servicio.lead} />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Servicios</p>
          <h1 className={styles.heroTitle}>{servicio.title}</h1>
          <p className={styles.lead}>{servicio.lead}</p>
        </div>
      </div>

      <div className={styles.container}>
        <Link to="/servicios" className={styles.backLink}>
          <ArrowLeft size={14} strokeWidth={2.3} aria-hidden="true" />
          Volver a Servicios
        </Link>

        <div className={styles.svcGrid}>
          {servicio.cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardTile}>
                <img
                  src={card.image}
                  alt={card.photoCaption.replace(/^Foto:\s*/i, "")}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardBody}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaBand}>
          <p className={styles.ctaText}>
            ¿Te interesa este servicio? Cuéntanos tu proyecto y te
            preparamos un presupuesto sin compromiso.
          </p>
          <Link
            to={`/contacto?servicio=${slug}`}
            className={styles.ctaButton}
          >
            Solicitar presupuesto
            <ArrowRight size={15} strokeWidth={2.3} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
