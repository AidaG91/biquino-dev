import { Link } from "react-router-dom";
import projects from "../../data/projectsData";
import styles from "./ProjectsTeaser.module.scss";

export default function ProjectsTeaser() {
  const [big, ...small] = projects.slice(0, 3);

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Trabajos recientes</p>
            <h2 className={styles.title}>
              Proyectos que hemos hecho realidad
            </h2>
          </div>
          <Link to="/proyectos" className={styles.linkArrow}>
            Ver todos los proyectos
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

        <div className={styles.grid}>
          <Link
            to="/proyectos"
            className={`${styles.card} ${styles.cardBig}`}
          >
            <img
              src={big.image}
              alt={big.alt}
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <span className={styles.chip}>{big.category}</span>
              <h3 className={styles.cardTitle}>{big.title}</h3>
              <p className={styles.cardDescription}>{big.description}</p>
            </div>
          </Link>

          <div className={styles.column}>
            {small.map((project) => (
              <Link
                key={project.id}
                to="/proyectos"
                className={`${styles.card} ${styles.cardSmall}`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <span className={styles.chipSmall}>{project.category}</span>
                  <h3 className={styles.cardTitleSmall}>{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
