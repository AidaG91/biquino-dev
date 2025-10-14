import { useState } from "react";
import styles from "../../styles/ContactForm.module.css";
import { createClient } from "@supabase/supabase-js";
import toast, { Toaster } from "react-hot-toast";

// 1. Conexión a Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // 2. Función de validación
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje no puede estar vacío.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 3. Validar antes de enviar
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Por favor, corrige los errores del formulario.");
      return;
    }

    setIsSending(true);
    toast.promise(
      supabase
        .from("contacts")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
        ])
        .then(({ error }) => {
          if (error) {
            throw new Error(error.message);
          }
        }),
      {
        loading: "Enviando mensaje...",
        success: () => {
          setFormData({ name: "", email: "", phone: "", message: "" });
          setIsSending(false);
          return <b>¡Mensaje enviado con éxito!</b>;
        },
        error: (err) => {
          console.error("Error de Supabase:", err);
          setIsSending(false);
          return <b>Hubo un problema al enviar el mensaje.</b>;
        },
      }
    );
  };

  return (
    <section className={styles.contact}>
      <Toaster position="top-center" reverseOrder={false} />

      <div>
        <h1 className={styles.contactTitle}>¿Hablamos de tu proyecto?</h1>
        <h2 className={styles.contactTitle}>Te escuchamos</h2>
        <p>Impresión digital en España</p>
        <h3>Datos de contacto</h3>
        <p>
          biquinostudio@gmail.com <br /> +34 630 53 68 21
        </p>
      </div>

      <div>
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre completo *</label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              placeholder="Nombre y apellidos"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className={styles.errorMessage}>{errors.name}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Correo electrónico *</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              placeholder="name@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Teléfono</label>
            <input
              className={styles.input}
              type="tel"
              id="phone"
              name="phone"
              placeholder="+34 600 000 000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Sobre tu proyecto *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Cuéntanos tu proyecto…"
            />
            {errors.message && (
              <p className={styles.errorMessage}>{errors.message}</p>
            )}
          </div>

          <button type="submit" disabled={isSending}>
            {isSending ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}
