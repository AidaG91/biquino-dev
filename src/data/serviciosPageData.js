// Fotos placeholder generadas con IA (ver nota en projectsData.js) — a
// sustituir por fotos reales de Biquiño.
import personalizacionImg from "../assets/images/placeholders/servicios/personalizacion.webp";
import disenoTecnicoImg from "../assets/images/placeholders/servicios/diseno-tecnico.webp";
import gestionProyectosImg from "../assets/images/placeholders/servicios/gestion-proyectos.webp";
import webRrssImg from "../assets/images/placeholders/servicios/web-rrss.webp";
// PLACEHOLDERS TEMPORALES: imágenes reutilizadas de la sección Proyectos hasta
// tener fotos específicas de "Impresión digital" y "Rotulación".
import impresionDigitalImg from "../assets/images/placeholders/proyectos/papeleria.webp";
import rotulacionImg from "../assets/images/placeholders/proyectos/rotulos.webp";

const serviciosPageData = [
  {
    id: "impresion-digital",
    title: "Impresión digital",
    description:
      "Todo lo que tu negocio necesita impreso, con calidad profesional y en la tirada que necesites. Desde la papelería corporativa hasta pegatinas y etiquetas adhesivas, producimos cada pieza para que tu marca se vea igual de bien en una tarjeta que en un envase.",
    photoCaption: "Foto: impresión de papelería y etiquetas",
    image: impresionDigitalImg,
  },
  {
    id: "personalizacion",
    title: "Personalización de prendas y objetos",
    description:
      "Llevamos tu marca más allá del papel. Somos especialistas en personalización textil y de soportes físicos, combinando técnicas de marcaje de alta resistencia con un diseño adaptado a cada material. Ya sea para equipaciones deportivas, uniformes laborales o merchandising corporativo, convertimos productos cotidianos en herramientas de comunicación duraderas, resistentes y con acabados profesionales.",
    photoCaption: "Foto: marcaje textil en proceso",
    image: personalizacionImg,
  },
  {
    id: "rotulacion",
    title: "Rotulación",
    description:
      "Hacemos visible tu negocio allí donde está: en la fachada, en el escaparate y en la carretera. Diseñamos, fabricamos e instalamos rótulos, vinilos y rotulación de vehículos con materiales duraderos y un montaje cuidado.",
    photoCaption: "Foto: instalación de rotulación",
    image: rotulacionImg,
  },
  {
    id: "diseno-tecnico",
    title: "Diseño técnico aplicado",
    description:
      "El puente entre una idea visual y su ejecución perfecta en el mundo real. Proyectamos soluciones gráficas optimizadas para fabricación, desde el desarrollo de identidades visuales hasta la preparación de archivos complejos para impresión y rotulación, garantizando que cada diseño sea técnicamente viable y visualmente impecable.",
    photoCaption: "Foto: preparación de archivo técnico",
    image: disenoTecnicoImg,
  },
  {
    id: "gestion-proyectos",
    title: "Gestión de proyectos gráficos completos",
    description:
      "Coordinamos todas las fases de producción, desde la conceptualización técnica hasta la entrega final del producto, supervisando cada detalle para garantizar resultados impecables y optimizar tiempos y recursos en cada etapa.",
    photoCaption: "Foto: equipo coordinando instalación",
    image: gestionProyectosImg,
  },
  {
    id: "web-rrss",
    title: "Web y RRSS",
    description:
      "Ofrecemos un soporte continuo para negocios que necesitan dinamismo y actualización constante. Nos convertimos en tu departamento creativo externo para que tu comunicación no se detenga nunca.",
    photoCaption: "Foto: gestión de redes sociales",
    image: webRrssImg,
  },
];

export default serviciosPageData;
