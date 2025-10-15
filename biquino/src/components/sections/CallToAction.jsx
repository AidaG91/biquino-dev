import { Link } from "react-router-dom";
import styles from "../../styles/CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <h1 className={styles.ctaTitle}>
        Gran variedad de materiales con infinidad de aplicaciones
      </h1>
      <p className={styles.ctaSubtitle}>
        Explora nuestra galería de materiales.
      </p>
      <Link to="/materiales" className={styles.ctaButton}>
        Materiales
      </Link>
    </section>
  );
}
