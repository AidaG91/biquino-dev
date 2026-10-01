const address = {
  street: "Rúa Laureano Peláez, 43",
  postalCode: "32600",
  locality: "Verín",
  region: "Ourense",
  country: "ES",
};

const contactInfo = {
  email: "info@biquino.es",
  phoneDisplay: "+34 694 92 96 81",
  phoneHref: "+34694929681",
  address,
  addressLine1: address.street,
  addressLine2: `${address.postalCode} ${address.locality}, ${address.region}`,
  instagramUrl: "https://www.instagram.com/biquinostudio/",
  mapsUrl: "https://maps.app.goo.gl/q5mYkTiRjjoQzruU8",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5935.848631369538!2d-7.439228023436284!3d41.93747766169373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3aea753fc86cc3%3A0xc9e94162f680e929!2zUsO6YSBMYXVyZWFubyBQZWzDoWV6LCA0MywgMzI2MDAgVmVyw61uLCBPdXJlbnNl!5e0!3m2!1ses!2ses!4v1790788309250!5m2!1ses!2ses",
};
export default contactInfo;
