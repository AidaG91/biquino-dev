import aboutData from "../../data/aboutData";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  const { eyebrow, title, paragraphs, timeline } = aboutData;

  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="about-title" className={styles.title}>
            {title}
          </h2>
          {paragraphs.map((text) => (
            <p key={text} className={styles.text}>
              {text}
            </p>
          ))}
        </div>

        <ol className={styles.timeline}>
          {timeline.map((item) => (
            <li key={item.year} className={styles.step}>
              <span className={styles.year}>{item.year}</span>
              <div>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepText}>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
