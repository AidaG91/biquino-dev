import { Link } from "react-router-dom";
import styles from "./LegalDocument.module.scss";

export default function LegalDocument({
  eyebrow,
  title,
  updated,
  sections,
  related,
}) {
  return (
    <article>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.lead}>Última actualización: {updated}</p>
        </div>
      </div>

      <div className={styles.container}>
        {sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            {section.paragraphs?.map((text) => (
              <p key={text}>{text}</p>
            ))}
            {section.items && (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.after?.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </section>
        ))}

        {related && (
          <p className={styles.related}>
            <Link to={related.to}>{related.label}</Link>
          </p>
        )}
      </div>
    </article>
  );
}
