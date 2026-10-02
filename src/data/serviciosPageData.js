import { photo } from "./photos";
// Fotos placeholder generadas con IA, a sustituir por fotos reales de Biquiño.
import gestionProyectosImg from "../assets/images/placeholders/servicios/gestion-proyectos.webp";
import webRrssImg from "../assets/images/placeholders/servicios/web-rrss.webp";

const serviciosPageData = [
  {
    id: "impresion-digital",
    title: "Impresión digital",
    description:
      "Tarjetas de visita, folletos, cartelería, pegatinas y etiquetas impresas con calidad profesional, en la tirada que necesites y sin pedido mínimo. La cartelería y las pegatinas las producimos en nuestro taller, y te asesoramos sobre el papel, el material y el acabado más adecuados para cada pieza.",
    photoCaption: "Foto: pegatinas personalizadas para una boda",
    image: photo("pegatinas-boda"),
  },
  {
    id: "personalizacion",
    title: "Personalización de prendas y objetos",
    description:
      "Camisetas, sudaderas, uniformes, equipaciones y merchandising con tu marca. Trabajamos con DTF, vinilo textil y serigrafía; el DTF lo producimos nosotros, con tiradas ágiles incluso de pocas unidades. Y si tu proyecto necesita otra técnica, la conseguimos con talleres colaboradores y nos encargamos de todo el proceso.",
    photoCaption: "Foto: sudadera personalizada para una protectora canina",
    image: photo("sudadera-marcan-huella"),
  },
  {
    id: "rotulacion",
    title: "Rotulación",
    description:
      "Vinilos, rótulos, escaparates, lonas, señalética y rotulación de vehículos. Diseñamos, producimos e instalamos nosotros mismos, en cualquier punto de España o fuera, en la franja horaria que mejor le vaya a tu negocio.",
    photoCaption: "Foto: camión rotulado con vinilo de corte",
    image: photo("camion-ror"),
  },
  {
    id: "diseno-tecnico",
    title: "Diseño técnico aplicado",
    description:
      "Nuestra base es la preimpresión y el diseño gráfico: creamos tu identidad visual, preparamos o revisamos tus archivos para que se impriman sin errores y te asesoramos sobre materiales y acabados. También hacemos fotografía de producto y de proyecto.",
    photoCaption: "Foto: roll-up diseñado e impreso para un servicio de comedor",
    image: photo("rollup-comedor"),
  },
  {
    id: "gestion-proyectos",
    title: "Gestión de proyectos gráficos completos",
    description:
      "Asesoramiento, diseño, producción, coordinación con proveedores e instalación en un mismo sitio. Tratas directamente con quien diseña y produce tu proyecto, de principio a fin, sin intermediarios.",
    photoCaption: "Foto: equipo coordinando instalación",
    image: { src: gestionProyectosImg },
  },
  {
    id: "web-rrss",
    title: "Web y RRSS",
    description:
      "Diseño, programación y mantenimiento de webs, con actualizaciones mensuales, trimestrales o cuando las necesites. En redes sociales creamos tus publicaciones con un estilo gráfico coherente y te preparamos un calendario de publicaciones.",
    photoCaption: "Foto: gestión de redes sociales",
    image: { src: webRrssImg },
  },
];

export default serviciosPageData;
