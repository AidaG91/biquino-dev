import calidadIcon from "../assets/icons/CALIDAD_PRECIO.svg";
import envioIcon from "../assets/icons/ENVIO.svg";
import respuestaIcon from "../assets/icons/RESPUESTA_RAPIDA.svg";
import integralIcon from "../assets/icons/SERVICIO_INTEGRAL.svg";

const services = [
  {
    id: 1,
    icon: respuestaIcon,
    title: "Respuesta rápida",
    text: "Valoramos tu tiempo. Damos una respuesta rápida, no superando las 24/48h.",
  },
  {
    id: 2,
    icon: integralIcon,
    title: "Servicio integral",
    text: "Ofrecemos un servicio 360º que incluye asesoramiento, diseño, producción, instalación y post‑venta.",
  },
  {
    id: 3,
    icon: envioIcon,
    title: "Envíos a península",
    text: "Trabajamos con una red de colaboradores, la cual nos permite poder enviar e instalar en toda la península.",
  },
  {
    id: 4,
    icon: calidadIcon,
    title: "Calidad-precio",
    text: "Elección exhaustiva de los materiales para ofrecer la mejor calidad a un precio acorde.",
  },
];

export default services;
