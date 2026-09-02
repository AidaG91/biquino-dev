import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import logoBiquino from "../../assets/icons/LOGO_WEB.svg";
import contactInfo from "../../data/contactInfo";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
  { name: "Proyectos", path: "/proyectos" },
  { name: "FAQ", path: "/faq" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/biquinostudio/",
    label: "Abrir Instagram en nueva pestaña",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="1" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/biquiño/",
    label: "Abrir Facebook en nueva pestaña",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M15 8h-2a2 2 0 0 0-2 2v10M9 13h6" />
        <path d="M15 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/biquiño/",
    label: "Abrir LinkedIn en nueva pestaña",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <line x1="8" y1="10" x2="8" y2="17" />
        <circle cx="8" cy="6.7" r=".6" fill="currentColor" />
        <path d="M12 17v-4.5a2.5 2.5 0 0 1 5 0V17" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <img src={logoBiquino} alt="Biquiño Logo" className={styles.logo} />
          <p className={styles.tagline}>
            Impresión digital y personalización en España — papelería,
            merchandising, rótulos y escaparatismo, de principio a fin.
          </p>
        </div>

        <div className={styles.column}>
          <span className={styles.columnTitle}>Navegación</span>
          <nav aria-label="Navegación de pie de página">
            <ul className={styles.columnList}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.column}>
          <span className={styles.columnTitle}>Contacto</span>
          <ul className={styles.columnList}>
            <li>
              <a href={`mailto:${contactInfo.email}`} className={styles.link}>
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contactInfo.phoneHref}`} className={styles.link}>
                {contactInfo.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <span className={styles.columnTitle}>Síguenos</span>
          <nav aria-label="Redes sociales" className={styles.social}>
            <ul>
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={styles.socialLink}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Biquiño. Todos los derechos
          reservados.
        </p>
        <p className={styles.bottomNote}>Diseño y producción en toda España</p>
      </div>
    </footer>
  );
}
