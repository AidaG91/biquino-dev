import styles from "./ServicesSection.module.scss";

export default function ServiceCard({ data }) {
  const { icon, title, teaser } = data;

  return (
    <div className={styles.serviceCard}>
      {icon && (
        <div className={styles.cardIconTile}>
          <img src={icon} alt="" className={styles.cardIcon} />
        </div>
      )}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{teaser}</p>
    </div>
  );
}
