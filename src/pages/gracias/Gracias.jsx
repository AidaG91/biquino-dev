import styles from "./Gracias.module.scss";
import { Link } from "react-router-dom";

export default function Gracias() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <h1>¡Gracias!</h1>
        <p>
          Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo lo antes posible.
        </p>

        <Link to="/" className={styles.button}>
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
