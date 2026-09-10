import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import useSeo from "../hooks/useSeo";
import styles from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
  useSeo(
    "Biquiño | Página no encontrada",
    "La página que buscas no existe. Vuelve al inicio de Biquiño."
  );

  return (
    <article>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Error 404</p>
          <h1 className={styles.heroTitle}>La página que buscas no existe</h1>
          <p className={styles.lead}>
            Puede que el enlace esté mal escrito o que la página se haya
            movido. Vuelve al inicio para seguir explorando.
          </p>
          <Link to="/" className={styles.homeLink}>
            <ArrowLeft size={14} strokeWidth={2.3} aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </article>
  );
}