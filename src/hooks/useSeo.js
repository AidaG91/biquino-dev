import { useHead, useSeoMeta } from "@unhead/react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://biquino.es";
const SITE_NAME = "Biquiño";
// Imagen al compartir el enlace (1200×630), en public/.
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const OG_IMAGE_ALT =
  "Logotipo de Biquiño junto a la fachada de su local en Verín, con el escaparate rotulado";
const DEFAULT_TITLE =
  "Rotulación, impresión y merchandising en toda España | Biquiño";
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
    ogImage: OG_IMAGE,
    ogImageAlt: OG_IMAGE_ALT,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterCard: "summary_large_image",
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
    twitterImage: OG_IMAGE,
    twitterImageAlt: OG_IMAGE_ALT,
    robots: noindex ? "noindex, follow" : undefined,
  });

  useHead({
    link: noindex ? [] : [{ rel: "canonical", href: url }],
  });
}
