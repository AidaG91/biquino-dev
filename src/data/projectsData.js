// Fotos placeholder generadas con IA (a sustituir por fotos reales de
// Biquiño en cuanto estén disponibles). Vite las procesa como asset local.
import papeleriaImg from "../assets/images/placeholders/proyectos/papeleria.jpg";
import merchandisingImg from "../assets/images/placeholders/proyectos/merchandising.jpg";
import restauracionImg from "../assets/images/placeholders/proyectos/restauracion.jpg";
import rotulosImg from "../assets/images/placeholders/proyectos/rotulos.jpg";
import escaparatismoImg from "../assets/images/placeholders/proyectos/escaparatismo.jpg";

const projectsData = [
  {
    id: "papeleria",
    title: "Papelería",
    description:
      "Diseño y producción de papelería corporativa para una marca de boutique local.",
    image: papeleriaImg,
    alt: "Tarjetas de visita y folletos de papelería corporativa sobre mesa de madera",
    category: "Papelería",
  },
  {
    id: "merchandising",
    title: "Merchandising",
    description:
      "Camisetas, gorras y artículos promocionales personalizados para evento corporativo.",
    image: merchandisingImg,
    alt: "Camisetas y gorras con logotipo impreso en variedad de colores",
    category: "Equipaciones",
  },
  {
    id: "restauracion",
    title: "Restauración",
    description:
      "Rotulación exterior e interior para restaurantes y locales de hostelería.",
    image: restauracionImg,
    alt: "Letrero luminoso de neón instalado en fachada de restaurante",
    category: "Rotulación",
  },
  {
    id: "rotulos",
    title: "Rótulos",
    description:
      "Fabricación e instalación de rótulos corporativos para puntos de venta.",
    image: rotulosImg,
    alt: "Rótulo corporativo grande instalado en fachada de tienda comercial",
    category: "Rotulación",
  },
  {
    id: "escaparatismo",
    title: "Escaparatismo",
    description:
      "Diseño y montaje de escaparates comerciales para temporadas y campañas.",
    image: escaparatismoImg,
    alt: "Escaparate decorado con productos de moda y señalización luminosa",
    category: "Escaparatismo",
  },
];

export default projectsData;
