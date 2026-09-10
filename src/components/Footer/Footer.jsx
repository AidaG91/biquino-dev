import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Biquiño. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
