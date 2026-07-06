import { useState } from "react";
import toast from "react-hot-toast";

export function useContactForm(onSuccess) {
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
      if (error) newErrors[field] = error;
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

    // Validaciones
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Por favor, corrige los errores del formulario.");
      return;
    }

    setIsSending(true);

    // Enviar a Netlify manualmente
    const form = e.target;
    const formData = new FormData(form);

    await fetch("/", {
      method: "POST",
      body: formData,
    });

    setIsSending(false);

    // Mostrar modal
    onSuccess();
  };

  return {
    formData,
    errors,
    isSending,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
