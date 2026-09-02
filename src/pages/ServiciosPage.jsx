import { Link } from "react-router-dom";
import services from "../data/servicesData";
import styles from "./ServiciosPage.module.scss";


export default function ServiciosPage() {
  return (
    <section>
      <title>Biquiño | Servicios</title>
      <meta
        name="description"
        content="Servicios de diseño, producción e instalación de papelería corporativa, merchandising, rótulos y escaparates en toda España."
      />
      <meta property="og:title" content="Biquiño | Servicios" />
      <meta property="og:description" content="Servicios de diseño, producción e instalación de papelería corporativa, merchandising, rótulos y escaparates en toda España." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Biquiño | Servicios" />
      <meta name="twitter:description" content="Servicios de diseño, producción e instalación de papelería corporativa, merchandising, rótulos y escaparates en toda España." />

      <div className={styles.hero}>
        <h1>Servicios</h1>
      </div>

      <div className={styles.container}>
        {services.map((service) => (
          <article key={service.id} className={styles.card}>
            <h2>{service.title}</h2>
            <p>{service.fullDescription}</p>
            <Link to="/contacto" className={styles.ctaButton}>
              Solicitar presupuesto
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
