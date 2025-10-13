import React from "react";
import styles from "../../styles/ProjectsSection.module.css";

export default function ProjectTab({
  project,
  isActive,
  onSetActive,
  onSetInactive,
}) {
  const images = project.images || [];
  return (
    <div
      className={`${styles.projectTab} ${isActive ? styles.active : ""}`}
      onMouseEnter={() => onSetActive(project.id)}
      onMouseLeave={onSetInactive}
    >
      <h2 className={styles.tabTitle}>{project.title}</h2>

      {/* Contenido expandido: visible solo cuando está activo */}
      <div className={styles.tabContent}>
        <div className={styles.imageGrid}>
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Placeholder de imagen ${index + 1}`}
              // ✅ Usamos la clase para darle tamaño
              className={styles.projectImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
