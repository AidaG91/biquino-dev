import { useHead, useSeoMeta } from "@unhead/react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://biquino.es";
const SITE_NAME = "Biquiño";
const DEFAULT_TITLE = "Rotulación, impresión y merchandising en toda España | Biquiño";
const DEFAULT_DESCRIPTION =
  "Rotulación de locales y vehículos, impresión digital, merchandising y papelería. Diseño, producción e instalación desde Verín (Ourense) a toda España.";

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
