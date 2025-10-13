import ServiceCard from "./ServiceCard";
import services from "../../data/servicesData";
import styles from "../../styles/ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <h1 className={styles.servicesTitle}>¿Qué ofrecemos?</h1>
      <div className={styles.cardGrid}>
        {services.map((service) => (
          <ServiceCard key={service.id} data={service} />
        ))}
      </div>
    </section>
  );
}
