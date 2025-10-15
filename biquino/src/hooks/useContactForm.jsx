import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";

// La conexión a Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "El nombre es obligatorio.";
        break;
      case "email":
        if (!value.trim()) return "El email es obligatorio.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "El formato del email no es válido.";
        break;
      case "message":
        if (!value.trim()) return "El mensaje no puede estar vacío.";
        break;
      default:
        break;
    }
    return null;
  };

  const validateForm = () => {
    const newErrors = {};
    const fieldsToValidate = ["name", "email", "message"];

    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar antes de enviar
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
      },
    );
  };

  // El hook devuelve todo lo que el componente de UI necesita
  return {
    formData,
    errors,
    isSending,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
