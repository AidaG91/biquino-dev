import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import logoBiquino from "../../assets/icons/LOGO_WEB.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "FAQ", path: "/faq" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          to="/"
          className={styles["header-logo"]}
          onClick={closeMenu}
        >
          <img src={logoBiquino} alt="Biquiño Logo" />
        </Link>

        <button
          className={`${styles["menu-toggle"]} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="mobile-nav"
          className={`${styles["header-nav"]} ${isOpen ? styles.active : ""}`}
          aria-label="Navegación principal"
        >
          <ul className={styles["nav-list"]}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles["nav-item"]}>
                <Link
                  to={link.path}
                  className={styles["nav-link"]}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className={styles["nav-item"]}>
              <a
                href="https://www.instagram.com/biquinostudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles["nav-link"]}
              >
                <img
                  src={instagramIcon}
                  alt=""
                  className={styles["instagram-icon"]}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
