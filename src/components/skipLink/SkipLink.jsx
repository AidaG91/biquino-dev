import styles from "./SkipLink.module.scss";

export default function SkipLink({ targetId = "contenido" }) {
  return (
    <a href={`#${targetId}`} className={styles.skipLink}>
      Saltar al contenido
    </a>
  );
}
