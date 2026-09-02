import styles from "./ProjectsSection.module.scss";
import projects from "../../data/projectsData";

export default function ProjectsSection() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Proyectos</h1>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img
              src={project.image}
              alt={project.alt}
              className={styles.image}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
