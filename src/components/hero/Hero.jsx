import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/hero-bg.svg";
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
            Papelería corporativa, merchandising, rótulos y escaparatismo —
            diseño, producción e instalación en un solo equipo, en toda
            España.
          </p>
          <div className={styles.actions}>
            <Link to="/contacto" className={styles.ctaPrimary}>
              Solicita tu presupuesto gratis
            </Link>
            <Link to="/proyectos" className={styles.ctaSecondary}>
              Ver proyectos
              <ArrowRight size={14} strokeWidth={2.3} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={styles.art}>
          <img
            src={heroImage}
            alt="Trabajo de rotulación e impresión realizado por Biquiño"
            className={styles.artImage}
          />
        </div>
      </div>
    </section>
  );
}
