import React from "react";
import logoBiquino from "../../assets/LOGO_WEB.svg";
import styles from "../../styles/Hero.module.css";

export default function Menu() {
  return (
    <section className={styles.hero}>
      <img src={logoBiquino} alt="Biquiño Logo" className={styles.heroLogo} />
    </section>
  );
}
