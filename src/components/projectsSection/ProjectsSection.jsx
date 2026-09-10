import styles from "./ProjectsSection.module.scss";
import projects from "@/data/projectsData";

export default function ProjectsSection() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Proyectos</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
