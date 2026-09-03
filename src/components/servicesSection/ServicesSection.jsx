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
          <p className={styles.eyebrow}>Qué ofrecemos</p>
          <h2 className={styles.servicesTitle}>
            Un servicio integral, de principio a fin
          </h2>
        </div>
        <Link to="/servicios" className={styles.linkArrow}>
          Ver todos los servicios
          <ArrowRight size={13} strokeWidth={2.3} aria-hidden="true" />
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
