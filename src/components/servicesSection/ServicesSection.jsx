import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import services from "../../data/servicesData";
import styles from "./ServicesSection.module.scss";

export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <div className={styles.head}>
        <div>
          <p className={styles.eyebrow}>Qué ofrecemos</p>
          <h2 className={styles.servicesTitle}>
            Un servicio integral, de principio a fin
          </h2>
        </div>
        <Link to="/servicios" className={styles.linkArrow}>
          Ver todos los servicios
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      <div className={styles.cardGrid}>
        {services.map((service) => (
          <ServiceCard key={service.id} data={service} />
        ))}
      </div>
    </section>
  );
}
