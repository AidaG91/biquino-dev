import { Link } from "react-router-dom";
import styles from "./CallToAction.module.scss";

export default function CallToAction({
  title,
  subtitle,
  buttonText,
  buttonLink,
  variant = "primary",
}) {
  return (
    <section className={`${styles.cta} ${styles[variant]}`}>
      <h2 className={styles.ctaTitle}>{title}</h2>

      {subtitle && <p className={styles.ctaSubtitle}>{subtitle}</p>}

      <Link to={buttonLink} className={styles.ctaButton}>
        {buttonText}
      </Link>
    </section>
  );
}
