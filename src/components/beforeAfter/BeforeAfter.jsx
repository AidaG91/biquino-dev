import { useState } from "react";
import styles from "./BeforeAfter.module.scss";

export default function BeforeAfter({ before, after, beforeAlt, afterAlt }) {
  const [position, setPosition] = useState(50);

  return (
    <div className={styles.wrapper} style={{ "--position": `${position}%` }}>
      <img src={after} alt={afterAlt} className={styles.image} />
      <img
        src={before}
        alt={beforeAlt}
        className={`${styles.image} ${styles.before}`}
      />

      <span className={`${styles.label} ${styles.labelBefore}`} aria-hidden="true">
        Antes
      </span>
      <span className={`${styles.label} ${styles.labelAfter}`} aria-hidden="true">
        Después
      </span>
      <span className={styles.divider} aria-hidden="true">
        <span className={styles.handle} />
      </span>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className={styles.range}
        aria-label="Comparar antes y después"
        aria-valuetext={`${position}% de la imagen de antes`}
      />
    </div>
  );
}
