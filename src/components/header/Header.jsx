import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../header/Header.module.scss";
import logoBiquino from "../../assets/LOGO_WEB.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    document.body.classList.toggle("menu-open", !isOpen);
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
          onClick={() => {
            setIsOpen(false);
            document.body.classList.remove("menu-open");
          }}
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
