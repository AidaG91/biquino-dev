import { Clock, Check, Globe, FileText } from "lucide-react";
import styles from "./TrustStrip.module.scss";

const items = [
  {
    id: "respuesta",
    label: "Respuesta en 24–48h",
    icon: <Clock size={16} strokeWidth={2} aria-hidden="true" />,
  },
  {
    id: "pedido-minimo",
    label: "Sin pedido mínimo",
    icon: <Check size={16} strokeWidth={2} aria-hidden="true" />,
  },
  {
    id: "envios",
    label: "Envíos a toda España",
    icon: <Globe size={16} strokeWidth={2} aria-hidden="true" />,
  },
  {
    id: "diseno",
    label: "Diseño gráfico incluido",
    icon: <FileText size={16} strokeWidth={2} aria-hidden="true" />,
  },
];

export default function TrustStrip() {
  return (
    <div className={styles.trust}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
