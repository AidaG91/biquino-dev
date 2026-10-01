import { photo } from "./photos";
// Fotos placeholder generadas con IA, a sustituir por fotos reales de Biquiño.
import gestionProyectosImg from "../assets/images/placeholders/servicios/gestion-proyectos.webp";
import webRrssImg from "../assets/images/placeholders/servicios/web-rrss.webp";

const serviciosPageData = [
  {
    id: "impresion-digital",
    title: "Impresión digital",
    description:
      "Todo lo que tu negocio necesita impreso, con calidad profesional y en la tirada que necesites. Desde la papelería corporativa hasta pegatinas y etiquetas adhesivas, producimos cada pieza para que tu marca se vea igual de bien en una tarjeta que en un envase.",
    photoCaption: "Foto: pegatinas personalizadas para una boda",
    image: photo("pegatinas-boda"),
  },
  {
    id: "personalizacion",
    title: "Personalización de prendas y objetos",
    description:
      "Llevamos tu marca más allá del papel. Somos especialistas en personalización textil y de soportes físicos, combinando técnicas de marcaje de alta resistencia con un diseño adaptado a cada material. Ya sea para equipaciones deportivas, uniformes laborales o merchandising corporativo, convertimos productos cotidianos en herramientas de comunicación duraderas, resistentes y con acabados profesionales.",
    photoCaption: "Foto: sudadera personalizada para una protectora canina",
    image: photo("sudadera-marcan-huella"),
  },
  {
    id: "rotulacion",
    title: "Rotulación",
    description:
      "Hacemos visible tu negocio allí donde está: en la fachada, en el escaparate y en la carretera. Diseñamos, fabricamos e instalamos rótulos, vinilos y rotulación de vehículos con materiales duraderos y un montaje cuidado.",
    photoCaption: "Foto: camión rotulado con vinilo de corte",
    image: photo("camion-ror"),
  },
  {
    id: "diseno-tecnico",
    title: "Diseño técnico aplicado",
    description:
      "El puente entre una idea visual y su ejecución perfecta en el mundo real. Proyectamos soluciones gráficas optimizadas para fabricación, desde el desarrollo de identidades visuales hasta la preparación de archivos complejos para impresión y rotulación, garantizando que cada diseño sea técnicamente viable y visualmente impecable.",
    photoCaption: "Foto: roll-up diseñado e impreso para un servicio de comedor",
    image: photo("rollup-comedor"),
  },
  {
    id: "gestion-proyectos",
    title: "Gestión de proyectos gráficos completos",
    description:
      "Coordinamos todas las fases de producción, desde la conceptualización técnica hasta la entrega final del producto, supervisando cada detalle para garantizar resultados impecables y optimizar tiempos y recursos en cada etapa.",
    photoCaption: "Foto: equipo coordinando instalación",
    image: { src: gestionProyectosImg },
  },
  {
    id: "web-rrss",
    title: "Web y RRSS",
    description:
      "Ofrecemos un soporte continuo para negocios que necesitan dinamismo y actualización constante. Nos convertimos en tu departamento creativo externo para que tu comunicación no se detenga nunca.",
    photoCaption: "Foto: gestión de redes sociales",
    image: { src: webRrssImg },
  },
];

export default serviciosPageData;
