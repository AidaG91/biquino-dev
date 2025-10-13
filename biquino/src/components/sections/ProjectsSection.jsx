import React, { useState } from "react";
import ProjectTab from "./ProjectTab";
import projectsData from "../../data/projectsData";
import styles from '../../styles/ProjectsSection.module.css'; 

export default function ProjectsSection() {
  const [activeTabId, setActiveTabId] = useState(null);

  const handleMouseLeave = () => {
    setActiveTabId(null);
  };

  return (
    <section className={styles.projects}>
      <h1 className={styles.sectionTitle}>Proyectos</h1>

      <div className={styles.tabsContainer}>
        {projectsData.map((project) => (
          <ProjectTab
            key={project.id}
            project={project}
            isActive={activeTabId === project.id}
            onSetActive={setActiveTabId}
            onSetInactive={handleMouseLeave}
          />
        ))}
      </div>
    </section>
  );
}
