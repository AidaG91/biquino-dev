import { useState } from "react";
import toast from "react-hot-toast";

const VALIDATED_FIELDS = ["name", "email", "message"];

export function useContactForm(onSuccess, initialData = {}) {
  const [initialFormData] = useState(() => ({
    name: "",
    email: "",
    phone: "",
    servicio: "",
    message: "",
    ...initialData,
  }));
  const [formData, setFormData] = useState(initialFormData);

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

    VALIDATED_FIELDS.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstInvalid = VALIDATED_FIELDS.find((f) => validationErrors[f]);
      form.elements[firstInvalid]?.focus();
      toast.error("Por favor, corrige los errores del formulario.");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setFormData(initialFormData);
      setErrors({});
      onSuccess();
    } catch {
      toast.error("No hemos podido enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setIsSending(false);
    }
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
