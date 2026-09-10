import { useEffect } from "react";

const DEFAULT_TITLE = "Biquiño | Diseño, papelería, rótulos y merchandising";
const DEFAULT_DESCRIPTION =
  "Biquiño ofrece diseño, producción e instalación de papelería corporativa, merchandising, rótulos y escaparates en toda España.";

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function useSeo(title, description) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title || DEFAULT_TITLE;

    let prevDescription = null;
    if (description) {
      prevDescription = document
        .querySelector('meta[name="description"]')
        ?.getAttribute("content");
      setMeta("description", description);
    }

    return () => {
      document.title = prevTitle;
      if (prevDescription !== null) {
        setMeta("description", prevDescription);
      }
    };
  }, [title, description]);
}
