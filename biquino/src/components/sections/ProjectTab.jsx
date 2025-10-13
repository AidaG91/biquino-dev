import React from 'react';
import styles from '../../styles/ProjectsSection.module.css';

export default function ProjectTab({ project, isActive, onSetActive, onSetInactive }) {
  
  const images = project.images || []; 
return (
    <div 
      className={`${styles.projectTab} ${isActive ? styles.active : ''}`}
      onMouseEnter={() => onSetActive(project.id)}
      onMouseLeave={onSetInactive}
    >
      <h2 className={styles.tabTitle}>{project.title}</h2>
      
      {/* Contenido expandido: visible solo cuando está activo */}
      <div className={styles.tabContent}>
        <div className={styles.imageGrid}>
          {images.map((imgSrc, index) => (
            // APLICAMOS LA LÓGICA DEL PLACEHOLDER AQUÍ
            <div 
              key={index} 
              // Usamos una clase para darle el fondo blanco y tamaño
              className={styles.imagePlaceholder}
            >
              {/* Opcional: puedes poner texto "Foto Pendiente" aquí si quieres */}
            </div>
            
          ))}
        </div>
        {/* Usamos el texto de placeholder */}
        <p>{project.description}</p>
      </div>
    </div>
  );
}