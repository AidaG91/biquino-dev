import localImg480 from "../assets/images/nosotros-local-480.webp";
import localImg960 from "../assets/images/nosotros-local-960.webp";

const aboutData = {
  eyebrow: "Nosotros",
  image: {
    src: localImg960,
    srcSet: `${localImg480} 480w, ${localImg960} 960w`,
    alt: "Interior del estudio de Biquiño en Verín: zona de atención con pared roja y, al fondo, el taller con el plóter de impresión",
  },
  title: "Una idea de 2024 con más de diez años de oficio detrás",
  paragraphs: [
    "Biquiño Studio empezó en 2024 como una idea y unos primeros encargos. En 2026 da el salto: se profesionaliza y abre su espacio en Verín (Ourense), desde donde trabaja para toda España.",
    "Detrás hay más de diez años de formación y trabajo en diseño gráfico, preimpresión, impresión digital y personalización. Por eso podemos acompañar tu proyecto de principio a fin, y tú tratas siempre directamente con quien lo diseña y lo produce.",
  ],
  timeline: [
    {
      year: "2012",
      title: "Formación",
      text: "Preimpresión digital, gráfica publicitaria, gráfica audiovisual y grado universitario en Diseño y Creaciones Digitales.",
    },
    {
      year: "2014",
      title: "Oficio",
      text: "Preimpresión, diseño gráfico, impresión digital y manipulado en estudios gráficos y empresas de merchandising, tratando a diario con clientes y proveedores.",
    },
    {
      year: "2024",
      title: "Nace Biquiño",
      text: "La idea toma forma y llegan los primeros encargos propios.",
    },
    {
      year: "2026",
      title: "Estudio en Verín",
      text: "Biquiño Studio se profesionaliza y abre su espacio físico en Verín (Ourense).",
    },
  ],
};

export default aboutData;
