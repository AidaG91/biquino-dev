import styles from "../styles/ProjectsPage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactForm from "../components/sections/ContactForm";

const filters = [
  "Papelería",
  "Merchandising",
  "Restauración",
  "Rótulos",
  "Escaparatismo",
  "Vehículos",
  "Oficinas",
  "Eventos",
];

const projects = Array(8).fill(null);

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("Rótulos");

  return (
    <section>
      <div className={styles.hero}>
        <h1>Proyectos</h1>
      </div>

      <div className={styles.galleryWrapper}>
        <div className={styles.filters}>
          <span>Filtros:</span>
          <ul>
            {filters.map((filter) => (
              <li
                key={filter}
                className={activeFilter === filter ? styles.active : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((_, index) => (
            <div key={index} className={styles.projectCard}>
              <img
                src={`https://picsum.photos/seed/${activeFilter}${index}/300/300`}
                alt={`Placeholder de proyecto ${index + 1}`}
                className={styles.projectImage}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>
          ¿Aún no has visto con qué materiales trabajamos?
        </h1>
        <Link to="/materiales" className={styles.ctaButton}>
          Materiales
        </Link>
      </div>

      <ContactForm showInfoColumn={true} />
    </section>
  );
}
