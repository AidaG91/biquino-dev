import styles from "./Footer.module.scss";
import logoBiquino from "../../assets/icons/LOGO_WEB.svg";
import contactInfo from "../../data/contactInfo";

const instagramLink = {
  href: "https://www.instagram.com/biquinostudio/",
  label: "Abrir Instagram en nueva pestaña",
  icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <img src={logoBiquino} alt="Biquiño Logo" className={styles.logo} />

        <ul className={styles.contactList}>
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

        <a
          href={instagramLink.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={instagramLink.label}
          className={styles.socialLink}
        >
          {instagramLink.icon}
        </a>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Biquiño. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
