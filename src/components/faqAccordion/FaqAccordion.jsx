import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import styles from "./FaqAccordion.module.scss";

export default function FaqAccordion({ items, openFirstByDefault = false }) {
  const [openId, setOpenId] = useState(() =>
    openFirstByDefault && items.length > 0 ? items[0].id : null
  );
  const triggerRefs = useRef([]);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const focusTrigger = (index) => {
    const count = items.length;
    const target = triggerRefs.current[(index + count) % count];
    target?.focus();
  };

  const handleKeyDown = (event, index) => {
    const { key } = event;

    if (key === "Enter" || key === " " || key === "Spacebar") {
      event.preventDefault();
      toggle(items[index].id);
      return;
    }

    if (key === "ArrowDown") {
      event.preventDefault();
      focusTrigger(index + 1);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      focusTrigger(index - 1);
    } else if (key === "Home") {
      event.preventDefault();
      focusTrigger(0);
    } else if (key === "End") {
      event.preventDefault();
      focusTrigger(items.length - 1);
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const triggerId = `faq-trigger-${item.id}`;

        return (
          <section key={item.id} className={styles.item}>
            <h3 className={styles.heading}>
              <button
                type="button"
                id={triggerId}
                ref={(el) => (triggerRefs.current[index] = el)}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span className={styles.question}>{item.question}</span>
                <Plus
                  className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={styles.panel}
              hidden={!isOpen}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
