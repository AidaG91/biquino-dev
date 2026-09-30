const addressLine1 = "Rúa Laureano Peláez, 43";
const addressLine2 = "32600 Verín, Ourense";

const contactInfo = {
  email: "info@biquino.es",
  phoneDisplay: "+34 694 92 96 81",
  phoneHref: "+34694929681",
  addressLine1,
  addressLine2,
  mapsUrl: "https://maps.app.goo.gl/q5mYkTiRjjoQzruU8",
  // Embed sin API key: funciona con una búsqueda de Google Maps normal
  // añadiendo output=embed. Si más adelante tenéis una API key de Google
  // Maps, se puede sustituir por el embed oficial con más opciones (zoom,
  // marcador personalizado, etc.).
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
    `${addressLine1}, ${addressLine2}`,
  )}&output=embed`,
};

export default contactInfo;
