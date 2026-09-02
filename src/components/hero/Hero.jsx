import logoBiquino from "../../assets/icons/LOGO_WEB.svg";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Presentación">
      <img src={logoBiquino} alt="Biquiño Logo" className={styles.heroLogo} />
    </section>
  );
}
