import { photo, fullPhoto, beforeAfter } from "./photos";

// El orden importa: los 3 primeros salen en la portada y los 5 primeros forman
// el mosaico de /proyectos.
const projectsData = [
  {
    id: "cajero-ing-tienda",
    title: "Cajero automático ING",
    description:
      "Rotulación de un cajero automático integrado en el escaparate de una tienda, con la nueva imagen de ING.",
    image: photo("cajero-ing-tienda"),
    beforeAfter: beforeAfter("cajero-ing-tienda"),
    alt: "Cajero automático de ING rotulado en naranja, integrado en el escaparate de una tienda",
    beforeAlt: "El mismo cajero antes de la rotulación, con un panel blanco",
    category: "Rotulación",
  },
  {
    id: "camion-ror",
    title: "Camión de ROR Operador Logístico",
    description:
      "Rotulación de una cabeza tractora con vinilo de corte: logotipo en la cabina y en los laterales.",
    image: photo("camion-ror"),
    full: fullPhoto("camion-ror"),
    alt: "Cabeza tractora blanca con el logotipo de ROR Operador Logístico en la cabina y el lateral",
    category: "Rotulación",
  },
  {
    id: "marcan-huella",
    title: "Marcan Huella, protectora canina",
    description:
      "Sudaderas, camisetas y mochilas personalizadas con el logotipo de la protectora.",
    image: photo("sudadera-marcan-huella"),
    full: fullPhoto("sudadera-marcan-huella"),
    alt: "Sudadera blanca con el logotipo ilustrado de Marcan Huella",
    category: "Personalización",
  },
  {
    id: "oficina-vinilo-acido",
    title: "Oficinas de KOA Constructora",
    description:
      "Vinilo ácido en las mamparas de cristal para dar privacidad a las salas, con franjas en el color corporativo.",
    image: photo("oficina-vinilo-acido"),
    full: fullPhoto("oficina-vinilo-acido"),
    alt: "Sala de reuniones con mamparas de cristal cubiertas de vinilo ácido y franjas naranjas",
    category: "Rotulación",
  },
  {
    id: "rotulo-luminoso",
    title: "Rótulo luminoso con vinilo de corte",
    description:
      "Rótulo luminoso de fachada decorado con vinilo de corte, instalado en el propio local.",
    image: photo("rotulo-luminoso-vinilo-corte"),
    full: fullPhoto("rotulo-luminoso-vinilo-corte"),
    alt: "Fachada de un local con rótulo luminoso decorado con vinilo de corte y una escalera de instalación",
    category: "Rotulación",
  },
  {
    id: "cajero-cashzone",
    title: "Cajero automático Cashzone",
    description:
      "Revestimiento con vinilo impreso del marco de un cajero automático en una fachada de ladrillo.",
    image: photo("cajero-cashzone-fachada"),
    beforeAfter: beforeAfter("cajero-cashzone-fachada"),
    alt: "Cajero automático en fachada de ladrillo con marco rotulado en verde y negro",
    beforeAlt: "El mismo cajero antes de la rotulación, con un marco de cristal",
    category: "Rotulación",
  },
  {
    id: "escaparate-tienda-moda",
    title: "Escaparate de tienda de moda",
    description: "Vinilo de corte blanco y montaje en el escaparate de una tienda de moda.",
    image: photo("escaparate-vinilo-corte"),
    full: fullPhoto("escaparate-vinilo-corte"),
    alt: "Escaparate de tienda de moda con el texto «Outlet i més» en vinilo de corte blanco",
    category: "Rotulación",
  },
  {
    id: "equipaciones",
    title: "Equipaciones deportivas",
    description: "Personalización de camisetas con nombres, dorsales y logotipos de patrocinadores.",
    image: photo("equipaciones"),
    full: fullPhoto("equipaciones"),
    alt: "Camiseta deportiva azul con nombre, dorsal y logotipos de patrocinadores",
    category: "Personalización",
  },
  {
    id: "pegatinas-boda",
    title: "Pegatinas para una boda",
    description: "Etiquetas personalizadas para las cervezas de la boda de Claudia y Alberto.",
    image: photo("pegatinas-boda"),
    full: fullPhoto("pegatinas-boda"),
    alt: "Pegatinas redondas rojas y negras con los nombres Claudia y Alberto",
    category: "Impresión digital",
  },
  {
    id: "furgoneta-reformas-chus",
    title: "Furgoneta de Reformas Chus",
    description: "Rotulación de furgoneta con vinilo de corte: nombre, teléfono y localidad.",
    image: photo("furgoneta-reformas-chus"),
    full: fullPhoto("furgoneta-reformas-chus"),
    alt: "Lateral de una furgoneta blanca rotulada con el nombre y el teléfono de Reformas Chus",
    category: "Rotulación",
  },
  {
    id: "chaqueta-dtf",
    title: "Chaqueta con estampado DTF",
    description: "Estampado a todo color en la espalda de una chaqueta con transferencia DTF.",
    image: photo("chaqueta-dtf"),
    full: fullPhoto("chaqueta-dtf"),
    alt: "Espalda de una chaqueta gris con un retrato ilustrado estampado a todo color",
    category: "Personalización",
  },
  {
    id: "rollup-comedor",
    title: "Roll-up para un servicio de comedor",
    description: "Diseño e impresión de un roll-up para el servicio de comedor de Emilia Molina.",
    image: photo("rollup-comedor"),
    full: fullPhoto("rollup-comedor"),
    alt: "Roll-up de Emilia Molina, servicio de comedor, con ilustraciones de frutas",
    category: "Impresión digital",
  },
  {
    id: "cartel-vilardevos",
    title: "Cartel de obra para el Concello de Vilardevós",
    description:
      "Cartel en PVC para una actuación del plan provincial de la Deputación de Ourense.",
    image: photo("cartel-vilardevos"),
    full: fullPhoto("cartel-vilardevos"),
    alt: "Cartel azul y blanco de la Deputación de Ourense sobre una obra del Concello de Vilardevós",
    category: "Impresión digital",
  },
  {
    id: "cartel-abejas",
    title: "Carteles de aviso de colmenas",
    description: "Carteles en dibond con vinilo impreso y laminado.",
    image: photo("cartel-abejas"),
    full: fullPhoto("cartel-abejas"),
    alt: "Carteles amarillos con el aviso «¡Atención, abejas!» y el número de registro",
    category: "Impresión digital",
  },
  {
    id: "mobiliario-vinilo",
    title: "Cambio de color de mobiliario",
    description:
      "Revestimiento con vinilo de los frentes de una cajonera para pasar del verde al blanco sin cambiar los muebles.",
    image: photo("mobiliario-vinilo"),
    full: fullPhoto("mobiliario-vinilo"),
    alt: "Cajonera de pared con los frentes revestidos de vinilo blanco y gris",
    category: "Rotulación",
  },
  {
    id: "tarjetas-visita",
    title: "Tarjetas de visita",
    description: "Impresión de tarjetas de visita para un negocio de pintura decorativa.",
    image: photo("tarjetas-visita"),
    full: fullPhoto("tarjetas-visita"),
    alt: "Tarjeta de visita roja de un negocio de pintura decorativa",
    category: "Impresión digital",
  },
  {
    id: "concept-store",
    title: "Puerta de concept store",
    description:
      "Vinilo de corte blanco en la puerta y placa de dibond con vinilo laminado para el horario.",
    image: photo("escaparate-concept-store"),
    full: fullPhoto("escaparate-concept-store"),
    alt: "Puerta de cristal de una concept store con textos en vinilo de corte blanco",
    category: "Rotulación",
  },
];

export default projectsData;
