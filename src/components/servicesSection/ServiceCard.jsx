import styles from "./ServicesSection.module.scss";

export default function ServiceCard({ data }) {
  const { icon, title, teaser } = data;

  return (
    <div className={styles.serviceCard}>
      {icon && <img src={icon} alt={title} className={styles.cardIcon} />}
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardText}>{teaser}</p>
    </div>
  );
}
