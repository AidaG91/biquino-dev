import { useMemo, useState } from "react";
import ContactForm from "../components/contactForm/ContactForm";
import projects from "../data/projectsData";
import styles from "./ProjectsPage.module.scss";

const ALL = "Todos";

export default function ProjectsPage() {
  const categories = useMemo(() => {
    const unique = [...new Set(projects.map((project) => project.category))];
    return [ALL, ...unique];
  }, []);

  const [activeFilter, setActiveFilter] = useState(ALL);

  const isBentoLayout = activeFilter === ALL;
  const filteredProjects = isBentoLayout
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <article>
      <title>Biquiño | Proyectos</title>
      <meta
        name="description"
        content="Una muestra de proyectos recientes de Biquiño: papelería, equipaciones, rotulación y escaparatismo."
      />
      <meta property="og:title" content="Biquiño | Proyectos" />
      <meta
        property="og:description"
        content="Una muestra de proyectos recientes de Biquiño: papelería, equipaciones, rotulación y escaparatismo."
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Biquiño | Proyectos" />
      <meta
        name="twitter:description"
        content="Una muestra de proyectos recientes de Biquiño: papelería, equipaciones, rotulación y escaparatismo."
      />

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Proyectos</p>
          <h1 className={styles.heroTitle}>
            Trabajos que hemos hecho realidad
          </h1>
          <p className={styles.lead}>
            Una muestra de proyectos recientes, de la papelería más pequeña a
            la rotulación de fachadas completas.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.chip} ${
                activeFilter === category ? styles.chipActive : ""
              }`}
              aria-pressed={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={`${styles.grid} ${isBentoLayout ? styles.gridBento : ""}`}
        >
          {filteredProjects.map((project, index) => (
            <div key={project.id} className={styles.card}>
              <img
                src={project.image}
                alt={project.alt}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span className={styles.chipLabel}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                {isBentoLayout && index === 0 && (
                  <p className={styles.cardDescription}>
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactForm />
    </article>
  );
}
