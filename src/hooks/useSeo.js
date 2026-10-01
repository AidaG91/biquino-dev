import { useHead, useSeoMeta } from "@unhead/react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://biquino.es";
const SITE_NAME = "Biquiño";
const DEFAULT_TITLE = "Biquiño | Diseño, papelería, rótulos y merchandising";
const DEFAULT_DESCRIPTION =
  "Biquiño ofrece diseño, producción e instalación de papelería corporativa, merchandising, rótulos y escaparates en toda España.";

export default function useSeo(title, description, { noindex = false } = {}) {
  const { pathname } = useLocation();
  const url = `${SITE_URL}${pathname}`;
  const pageTitle = title || DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;

  useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    ogTitle: pageTitle,
    ogDescription: pageDescription,
    ogType: "website",
    ogUrl: url,
    ogSiteName: SITE_NAME,
    ogLocale: "es_ES",
    twitterCard: "summary",
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
    robots: noindex ? "noindex, follow" : undefined,
  });

  useHead({
    link: noindex ? [] : [{ rel: "canonical", href: url }],
  });
}
