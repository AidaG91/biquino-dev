import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import logoBiquino from "../assets/LOGO_WEB.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Materiales", path: "/materiales" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          to="/"
          className={styles["header-logo"]}
          onClick={() => setIsOpen(false)}
        >
          <img src={logoBiquino} alt="Biquiño Logo" />
        </Link>
        {/* BURGER MENU */}
        <button
          className={`${styles["menu-toggle"]} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* NAV CONTAINER (DESKTOP AND MOBILE) */}
        <nav
          className={`${styles["header-nav"]} ${isOpen ? styles.active : ""}`}
        >
          <ul className={styles["nav-list"]}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles["nav-item"]}>
                <Link
                  to={link.path}
                  className={styles["nav-link"]}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
