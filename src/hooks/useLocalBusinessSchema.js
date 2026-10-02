import { useHead } from "@unhead/react";
import contactInfo from "../data/contactInfo";

const SITE_URL = "https://biquino.es";

const toSpecs = (slots) =>
  slots.map(({ dayCodes, opens, closes }) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: dayCodes.map((day) => `https://schema.org/${day}`),
    opens,
    closes,
  }));

// Datos estructurados para Google (schema.org/LocalBusiness). Pendiente: image
// cuando haya una foto del local o de trabajos.
const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#negocio`,
  name: "Biquiño Studio",
  alternateName: "Biquiño",
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
  openingHoursSpecification: toSpecs(contactInfo.hours.local),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: contactInfo.phoneHref,
    availableLanguage: ["es", "gl"],
    hoursAvailable: toSpecs(contactInfo.hours.phone),
  },
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
