import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import services from "../../data/servicesData";
import styles from "./ServicesSection.module.scss";

export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <div className={styles.head}>
        <div>
          <p className={styles.eyebrow}>Por qué Biquiño</p>
          <h2 className={styles.servicesTitle}>
            Un servicio integral, de principio a fin
          </h2>
        </div>
        <Link to="/servicios" className={styles.linkArrow}>
          Descubre nuestros servicios
          <ArrowRight size={13} strokeWidth={2.3} aria-hidden="true" />
        </Link>
      </div>

      <ul className={styles.cardGrid}>
        {services.map((service) => (
          <ServiceCard key={service.id} data={service} />
        ))}
      </ul>
    </section>
  );
}
