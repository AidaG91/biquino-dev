import { FileText, Mail, Phone } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import contactInfo from "../../data/contactInfo";
import styles from "./ContactOptions.module.scss";

const OPTIONS = [
  {
    id: "whatsapp",
    title: "Escríbenos por WhatsApp",
    text: "Envíanos fotos, medidas o tu diseño.",
    href: contactInfo.whatsappUrl,
    external: true,
    icon: <WhatsAppIcon size={20} />,
  },
  {
    id: "telefono",
    title: "Llámanos",
    text: contactInfo.phoneDisplay,
    href: `tel:${contactInfo.phoneHref}`,
    icon: <Phone size={20} strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    id: "email",
    title: "Envíanos un email",
    text: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: <Mail size={20} strokeWidth={1.8} aria-hidden="true" />,
  },
  {
    id: "formulario",
    title: "Rellena el formulario",
    text: "Cuéntanos tu proyecto con detalle.",
    href: "#formulario",
    icon: <FileText size={20} strokeWidth={1.8} aria-hidden="true" />,
  },
];

export default function ContactOptions() {
  return (
    <section className={styles.options} aria-labelledby="contact-options-title">
      <h2 id="contact-options-title" className={styles.title}>
        Elige cómo contactarnos
      </h2>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li key={option.id}>
            <a
              href={option.href}
              className={styles.card}
              {...(option.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <span className={styles.badge}>{option.icon}</span>
              <span className={styles.body}>
                <span className={styles.cardTitle}>
                  {option.title}
                  {option.external && (
                    <span className={styles.srOnly}>
                      {" "}
                      (se abre en nueva pestaña)
                    </span>
                  )}
                </span>
                <span className={styles.cardText}>{option.text}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
