const addressLine1 = "Rúa Laureano Peláez, 43";
const addressLine2 = "32600 Verín, Ourense";

const contactInfo = {
  email: "biquinostudio@gmail.com",
  phoneDisplay: "+34 630 53 68 21",
  phoneHref: "+34630536821",
  addressLine1,
  addressLine2,
  mapsUrl: "https://maps.app.goo.gl/q5mYkTiRjjoQzruU8",
  // Embed sin API key: funciona con una búsqueda de Google Maps normal
  // añadiendo output=embed. Si más adelante tenéis una API key de Google
  // Maps, se puede sustituir por el embed oficial con más opciones (zoom,
  // marcador personalizado, etc.).
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
    `${addressLine1}, ${addressLine2}`
  )}&output=embed`,
};

export default contactInfo;
