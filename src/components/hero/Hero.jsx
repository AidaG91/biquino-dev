import { Link } from "react-router-dom";
import heroImage480 from "../../assets/images/hero-local-480.webp";
import heroImage960 from "../../assets/images/hero-local-960.webp";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Presentación">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.pill}>
            Rotulación e impresión en toda España
          </span>
          <h1 className={styles.title}>
            Damos forma a tu marca, de la idea a la instalación.
          </h1>
          <p className={styles.lead}>
            Rotulamos tu local y tus vehículos, imprimimos y personalizamos
            prendas. Diseñamos, producimos e instalamos nosotros, sin
            intermediarios.
          </p>
          <div className={styles.actions}>
            <Link to="/contacto" className={styles.ctaPrimary}>
              Solicita tu presupuesto gratis
            </Link>
          </div>
        </div>

        <div className={styles.art}>
          <img
            src={heroImage960}
            srcSet={`${heroImage480} 480w, ${heroImage960} 960w`}
            sizes="(min-width: 1024px) 45vw, 480px"
            alt="Fachada del local de Biquiño en Verín, con el escaparate rotulado con vinilo"
            className={styles.artImage}
            width={960}
            height={600}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
