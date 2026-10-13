import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import inaugurationData from "../../data/inaugurationData";
import getTimeLeft from "../../utils/getTimeLeft";
import styles from "./InaugurationModal.module.scss";

const STORAGE_KEY = "biquino-inauguration-dismissed";

function wasDismissed() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function InaugurationModal() {
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  // Se abre tras montar (no en el HTML prerenderizado) y solo antes de la fecha.
  useEffect(() => {
    const left = getTimeLeft(inaugurationData.date);
    if (left && !wasDismissed()) {
      setTimeLeft(left);
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const timer = setInterval(() => {
      const left = getTimeLeft(inaugurationData.date);
      setTimeLeft(left);
      if (!left) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll("button, a[href]");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previous?.focus?.();
    };
  }, [open]);

  function close() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Sin almacenamiento: el aviso volverá a salir en la próxima visita.
    }
  }

  if (!open) return null;

  const units = timeLeft
    ? [
        { key: "days", value: timeLeft.days, unit: "días" },
        { key: "hours", value: pad(timeLeft.hours), unit: "horas" },
        { key: "minutes", value: pad(timeLeft.minutes), unit: "min" },
        { key: "seconds", value: pad(timeLeft.seconds), unit: "seg" },
      ]
    : null;

  return (
    <div className={styles.backdrop} onClick={close}>
      <div
        className={styles.dialog}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="inauguration-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          ref={closeRef}
          onClick={close}
          aria-label="Cerrar aviso de inauguración"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <h2 id="inauguration-title" className={styles.title}>
          {units ? inaugurationData.title : inaugurationData.doneTitle}
        </h2>
        {units && <p className={styles.label}>{inaugurationData.label}</p>}

        {units && (
          <ul
            className={styles.list}
            role="timer"
            aria-label="Cuenta atrás para la inauguración"
          >
            {units.map(({ key, value, unit }) => (
              <li key={key} className={styles.item}>
                <span className={styles.num}>{value}</span>
                <span className={styles.unit}>{unit}</span>
              </li>
            ))}
          </ul>
        )}

        <p className={styles.text}>{inaugurationData.text}</p>
        <Link to="/contacto" className={styles.cta} onClick={close}>
          {inaugurationData.cta}
        </Link>
      </div>
    </div>
  );
}
