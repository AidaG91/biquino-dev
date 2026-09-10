import { materialsData } from "@/data/materialsData";
import styles from "./FAQPage.module.scss";

export default function FAQPage() {
  return (
    <section className={styles.faqPage}>
      <div className={styles.hero}>
        <h1>Preguntas Frecuentes</h1>
      </div>
      <div className={styles.content}>
        {materialsData.map((material) => (
          <div key={material.id} className={styles.faqGroup}>
            <h2 className={styles.faqGroupTitle}>{material.title}</h2>
            {material.faqs.map((faq, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{faq.question}</summary>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </details>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}