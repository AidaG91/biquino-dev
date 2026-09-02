import styles from "./Footer.module.scss";

const socialLinks = [
  {
    href: "https://www.instagram.com/biquiño/",
    label: "Abrir Instagram en nueva pestaña",
    icon: "Instagram",
  },
  {
    href: "https://www.facebook.com/biquiño/",
    label: "Abrir Facebook en nueva pestaña",
    icon: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/biquiño/",
    label: "Abrir LinkedIn en nueva pestaña",
    icon: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <p>
            <a href="mailto:info@biquiño.com" className={styles.link}>
              info@biquiño.com
            </a>
          </p>
          <p>
            <a href="tel:+34600000000" className={styles.link}>
              +34 600 000 000
            </a>
          </p>
        </div>

        <nav aria-label="Redes sociales" className={styles.social}>
          <ul>
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={styles.link}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Biquiño. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
