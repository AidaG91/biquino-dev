import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
  return (
    <section className={styles.notFound}>
      <h1>404</h1>
      <p>La página que buscas no existe o ha sido movida.</p>
      <Link to="/" className={styles.homeLink}>
        Volver al inicio
      </Link>
    </section>
  );
}