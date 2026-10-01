import { useHead } from "@unhead/react";
import contactInfo from "../data/contactInfo";

const SITE_URL = "https://biquino.es";

// Datos estructurados para Google (schema.org/LocalBusiness)
const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#negocio`,
  name: "Biquiño",
  url: `${SITE_URL}/`,
  email: contactInfo.email,
  telephone: contactInfo.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactInfo.address.street,
    postalCode: contactInfo.address.postalCode,
    addressLocality: contactInfo.address.locality,
    addressRegion: contactInfo.address.region,
    addressCountry: contactInfo.address.country,
  },
  areaServed: { "@type": "Country", name: "España" },
  hasMap: contactInfo.mapsUrl,
  sameAs: [contactInfo.instagramUrl],
};

export default function useLocalBusinessSchema() {
  useHead({
    script: [
      {
        type: "application/ld+json",
        key: "local-business",
        textContent: JSON.stringify(schema),
      },
    ],
  });
}
