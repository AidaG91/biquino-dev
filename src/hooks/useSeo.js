import { useEffect } from "react";

const DEFAULT_TITLE = "Biquiño | Diseño, papelería, rótulos y merchandising";
const DEFAULT_DESCRIPTION =
  "Biquiño ofrece diseño, producción e instalación de papelería corporativa, merchandising, rótulos y escaparates en toda España.";

function getOrCreateMeta(attribute, value) {
  const selector = attribute === "name"
    ? `meta[name="${value}"]`
    : `meta[property="${value}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, value);
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(name, content) {
  const el = getOrCreateMeta("name", name);
  el.setAttribute("content", content);
}

function setOgMeta(property, content) {
  const el = getOrCreateMeta("property", property);
  el.setAttribute("content", content);
}

export default function useSeo(title, description) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title || DEFAULT_TITLE;

    const snapshot = {};
    const targets = [
      { type: "name", key: "description" },
      { type: "property", key: "og:title" },
      { type: "property", key: "og:description" },
      { type: "name", key: "twitter:title" },
      { type: "name", key: "twitter:description" },
    ];

    targets.forEach(({ type, key }) => {
      const selector = type === "name" ? `meta[name="${key}"]` : `meta[property="${key}"]`;
      snapshot[key] = document.querySelector(selector)?.getAttribute("content") ?? null;
    });

    if (description) {
      setMeta("description", description);
      setOgMeta("og:title", title || DEFAULT_TITLE);
      setOgMeta("og:description", description);
      setOgMeta("og:type", "website");
      setMeta("twitter:card", "summary_large_image");
      setMeta("twitter:title", title || DEFAULT_TITLE);
      setMeta("twitter:description", description);
    }

    return () => {
      document.title = prevTitle;

      if (description) {
        if (snapshot.description !== null) setMeta("description", snapshot.description);
        if (snapshot["og:title"] !== null) setOgMeta("og:title", snapshot["og:title"]);
        if (snapshot["og:description"] !== null) setOgMeta("og:description", snapshot["og:description"]);
        if (snapshot["twitter:title"] !== null) setMeta("twitter:title", snapshot["twitter:title"]);
        if (snapshot["twitter:description"] !== null) setMeta("twitter:description", snapshot["twitter:description"]);
      }
    };
  }, [title, description]);
}
