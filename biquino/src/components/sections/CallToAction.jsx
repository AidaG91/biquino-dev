import { Link } from "react-router-dom";
import styles from "../../styles/CallToAction.module.css";

export default function CallToAction({
  title,
  subtitle,
  buttonText,
  buttonLink,
  variant = "primary",
}) {
  return (
    <section className={`${styles.cta} ${styles[variant]}`}>
      <h1 className={styles.ctaTitle}>{title}</h1>

      {subtitle && <p className={styles.ctaSubtitle}>{subtitle}</p>}

      <Link to={buttonLink} className={styles.ctaButton}>
        {buttonText}
      </Link>
    </section>
  );
}
