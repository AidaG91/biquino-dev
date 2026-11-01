import styles from "./IllustrativeLabel.module.scss";

// Aviso discreto para imágenes generadas con IA que aún no son fotos reales.
// Va dentro de un contenedor con position: relative.
export default function IllustrativeLabel() {
  return <span className={styles.label}>Imagen ilustrativa</span>;
}
