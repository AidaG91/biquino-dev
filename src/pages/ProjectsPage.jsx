import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import ContactForm from "../components/contactForm/ContactForm";
import BeforeAfter from "../components/beforeAfter/BeforeAfter";
import projects from "../data/projectsData";
import useSeo from "../hooks/useSeo";
import styles from "./ProjectsPage.module.scss";

const ALL = "Todos";

export default function ProjectsPage() {
  useSeo(
    "Proyectos de rotulación, impresión y merchandising | Biquiño",
    "Una muestra de proyectos recientes de Biquiño: impresión digital, personalización de prendas y objetos, y rotulación."
  );
  const categories = useMemo(() => {
    const unique = [...new Set(projects.map((project) => project.category))];
    return [ALL, ...unique];
  }, []);

  const [activeFilter, setActiveFilter] = useState(ALL);
  const [lightboxProject, setLightboxProject] = useState(null);
  const previousFocusRef = useRef(null);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

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
    const app = document.getElementById("app");
    if (app) app.inert = true;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "Tab") {
        const focusable = [
          ...(dialogRef.current?.querySelectorAll("button, input") ?? []),
        ];
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        } else if (!dialogRef.current?.contains(document.activeElement)) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      if (app) app.inert = false;
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
            Trabajos hechos realidad
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
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              className={styles.card}
              onClick={(event) => openLightbox(project, event)}
            >
              <img
                src={project.image.src}
                srcSet={project.image.srcSet}
                style={{ objectPosition: project.imagePosition }}
                sizes="(min-width: 768px) 33vw, 50vw"
                alt=""
                className={styles.image}
                loading="lazy"
              />
              {project.beforeAfter && (
                <span className={styles.beforeAfterBadge} aria-hidden="true">
                  Antes / Después
                </span>
              )}
              <span className={styles.overlay}>
                <span className={styles.chipLabel}>{project.category}</span>{" "}
                <span className={styles.cardTitle}>{project.title}</span>
                <span className="visually-hidden">
                  {project.beforeAfter
                    ? ", ver el antes y el después"
                    : ", ver imagen ampliada"}
                </span>
              </span>
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
              ref={dialogRef}
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
              {lightboxProject.beforeAfter ? (
                <BeforeAfter
                  before={lightboxProject.beforeAfter.before}
                  after={lightboxProject.beforeAfter.after}
                  beforeAlt={lightboxProject.beforeAlt}
                  afterAlt={lightboxProject.alt}
                />
              ) : (
                <img
                  src={lightboxProject.full}
                  alt={lightboxProject.alt}
                  className={styles.lightboxImage}
                />
              )}
              <div className={styles.lightboxInfo}>
                <span className={styles.chipLabel}>
                  {lightboxProject.category}
                </span>
                <h2 className={styles.lightboxTitle}>
                  {lightboxProject.title}
                </h2>
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
