import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { materialsData } from "../data/materialsData";
import styles from "../styles/MaterialDetailPage.module.css";
import { BsChevronDown } from "react-icons/bs";
import CallToAction from "../components/sections/CallToAction";


function FaqItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.faqQuestion}>
        {faq.question}
        <BsChevronDown className={isOpen ? styles.open : ""} />{" "}
      </button>
      {isOpen && (
        <div className={styles.faqAnswer}>
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function MaterialDetailPage() {
  const { id } = useParams();

  const material = materialsData.find((m) => m.id === id);

  if (!material) {
    return <Navigate to="/404" replace />;
  }

  return (
    <section className={styles.detailPage}>
      {/* 1. Hero del Detalle */}
      <div className={styles.hero}>
        <h1>{material.title}</h1>
        <p>{material.heroText}</p>
      </div>

      {/* 2. Secciones de contenido */}
      <div className={styles.content}>
        {material.sections.map((section, index) => (
          <div
            key={index}
            className={`${styles.contentSection} ${
              section.layout === "imageLeft"
                ? styles.imageLeft
                : styles.imageRight
            }`}
          >
            <div className={styles.imageWrapper}>
              <img src={section.image} alt={section.title} />
            </div>
            <div className={styles.textWrapper}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Sección de FAQ */}
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <h4>FAQ</h4>
          <h3>Preguntas Frecuentes</h3>
        </div>
        <div className={styles.faqList}>
          {material.faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </div>

      {/* 4. CTA */}
      <CallToAction
        title={`Haz realidad tu proyecto con ${material.title.toLowerCase()}.`}
        buttonText="Contacto"
        buttonLink="/contacto"
      />
    </section>
  );
}
