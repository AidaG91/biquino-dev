import React from "react";
import styles from "../../styles/ServicesSection.module.css";

export default function ServiceCard({ data }) {
  const { icon, title, text } = data;

  return (
    <div className={styles.serviceCard}>
      <img src={icon} alt={title} className={styles.cardIcon} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
}
