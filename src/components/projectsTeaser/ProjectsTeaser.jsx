import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projects from "../../data/projectsData";
import styles from "./ProjectsTeaser.module.scss";

export default function ProjectsTeaser() {
  const [big, ...small] = projects.slice(0, 3);

  if (!big) return null;

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
            <ArrowRight size={13} strokeWidth={2.3} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.grid}>
          <Link
            to="/proyectos"
            className={`${styles.card} ${styles.cardBig}`}
          >
            <img
              src={big.image.src}
              srcSet={big.image.srcSet}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt={big.alt}
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <span className={styles.chip}>{big.category}</span>
              <h3 className={styles.cardTitle}>{big.title}</h3>
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
                  src={project.image.src}
                  srcSet={project.image.srcSet}
                  sizes="(min-width: 1024px) 40vw, 100vw"
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
