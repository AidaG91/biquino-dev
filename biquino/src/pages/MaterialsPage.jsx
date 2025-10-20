import styles from "../styles/MaterialsPage.module.css";
import { Link } from "react-router-dom";
import { materialsGrid } from "../data/materialsData";

export default function MaterialsPage() {
  return (
    <section className={styles.materialsPage}>
      <div className={styles.hero}>
        <h1>Catálogo</h1>
      </div>

      <div>
        <h2>Materiales</h2>
        <p>
          Descubre nuestra amplia gama de materiales para impresión digital:
          desde lonas publicitarias en distintos formatos y rótulos innovadores
          para tu negocio, hasta soportes promocionales y soluciones de
          papelería personalizada. Aprende cómo aprovechar cada opción para
          destacar tu publicidad, fortalecer tu marca y proyectar una imagen
          profesional.
        </p>
      </div>

      <div className={styles.gridContainer}>
        {materialsGrid.map((material, index) => (
          <Link
            key={material.id}
            to={`/materiales/${material.id}`} 
            className={`${styles.materialCard} ${index >= 4 ? styles.lightCard : ""}`}
          >
            <h2>{material.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
