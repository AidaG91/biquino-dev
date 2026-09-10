import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import ContactForm from "../components/contactForm/ContactForm";
import projects from "../data/projectsData";
import useSeo from "../hooks/useSeo";
import styles from "./ProjectsPage.module.scss";

const ALL = "Todos";

export default function ProjectsPage() {
  useSeo(
    "Biquiño | Proyectos",
    "Una muestra de proyectos recientes de Biquiño: papelería, equipaciones, rotulación y escaparatismo."
  );
  const categories = useMemo(() => {
    const unique = [...new Set(projects.map((project) => project.category))];
    return [ALL, ...unique];
  }, []);

  const [activeFilter, setActiveFilter] = useState(ALL);
  const [lightboxProject, setLightboxProject] = useState(null);
  const previousFocusRef = useRef(null);
  const closeButtonRef = useRef(null);

  const isBentoLayout = activeFilter === ALL;
  const filteredProjects = isBentoLayout
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const openLightbox = (project, event) => {
    previousFocusRef.current = event.currentTarget;
    setLightboxProject(project);
  };

  const closeLightbox = () => setLightboxProject(null);

  useEffect(() => {
    if (!lightboxProject) return undefined;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [lightboxProject]);

  return (
    <article>

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
            <button
              key={project.id}
              type="button"
              className={styles.card}
              onClick={(event) => openLightbox(project, event)}
              aria-label={`Ver imagen ampliada: ${project.title}`}
            >
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
            </button>
          ))}
        </div>
      </div>

      <ContactForm />

      {lightboxProject &&
        createPortal(
          <div className={styles.lightboxBackdrop} onClick={closeLightbox}>
            <div
              className={styles.lightboxContent}
              role="dialog"
              aria-modal="true"
              aria-label={lightboxProject.title}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                ref={closeButtonRef}
                className={styles.lightboxClose}
                onClick={closeLightbox}
                aria-label="Cerrar"
              >
                <X size={20} aria-hidden="true" />
              </button>
              <img
                src={lightboxProject.image}
                alt={lightboxProject.alt}
                className={styles.lightboxImage}
              />
              <div className={styles.lightboxInfo}>
                <span className={styles.chipLabel}>
                  {lightboxProject.category}
                </span>
                <h3 className={styles.lightboxTitle}>
                  {lightboxProject.title}
                </h3>
                <p className={styles.lightboxDescription}>
                  {lightboxProject.description}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </article>
  );
}
