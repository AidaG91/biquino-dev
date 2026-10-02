import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-bg.webp";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Presentación">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.pill}>Impresión digital en España</span>
          <h1 className={styles.title}>
            Damos forma a tu marca, de la idea a la instalación.
          </h1>
          <p className={styles.lead}>
            Rotulación de locales y vehículos, impresión digital y
            personalización de prendas y objetos: diseño, producción e
            instalación en un mismo sitio, en toda España.
          </p>
          <div className={styles.actions}>
            <Link to="/contacto" className={styles.ctaPrimary}>
              Solicita tu presupuesto gratis
            </Link>
          </div>
        </div>

        <div className={styles.art}>
          <img
            src={heroImage}
            alt="Trabajo de rotulación e impresión realizado por Biquiño"
            className={styles.artImage}
            width={1407}
            height={768}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
