import React, { useState } from "react";
import styles from "../../styles/ContactForm.module.css";
// Puedes usar una librería como 'axios' para la comunicación, pero usamos fetch aquí:
// import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'idle', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Aquí es donde usarías tu API de SpringBoot (Ejemplo con fetch)
    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("El servidor respondió con un error.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("error");
    }
  };

  return (
    <section className={styles.contact}>
      <h1 className={styles.contactTitle}>Hablemos de tu Proyecto</h1>

      {status === "success" && (
        <p className={styles.successMessage}>¡Mensaje enviado con éxito!</p>
      )}
      {status === "error" && (
        <p className={styles.errorMessage}>Hubo un error al enviar.</p>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          ></textarea>
        </div>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </section>
  );
}
