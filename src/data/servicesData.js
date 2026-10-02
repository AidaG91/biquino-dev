import respuestaRapidaIcon from "../assets/icons/RESPUESTA_RAPIDA.svg";
import servicioIntegralIcon from "../assets/icons/SERVICIO_INTEGRAL.svg";
import envioIcon from "../assets/icons/ENVIO.svg";
import calidadPrecioIcon from "../assets/icons/CALIDAD_PRECIO.svg";

const services = [
  {
    id: "respuesta-rapida",
    title: "Respuesta rápida",
    teaser:
      "Valoramos tu tiempo. Damos una respuesta rápida, no superando las 24/48h.",
    fullDescription:
      "Sabemos que cada proyecto tiene plazos ajustados. Por eso nos comprometemos a darte una respuesta en un máximo de 24-48 horas, sin importar la complejidad de tu solicitud. Así podrás avanzar con tu proyecto sin demoras innecesarias.",
    icon: respuestaRapidaIcon,
  },
  {
    id: "servicio-integral",
    title: "Servicio integral",
    teaser:
      "Asesoramiento, diseño, producción e instalación en un mismo sitio, con trato directo de principio a fin.",
    fullDescription:
      "No solo fabricamos. Te acompañamos durante todo el proceso: desde el asesoramiento inicial y el diseño, pasando por la producción, hasta la instalación. Todo lo que necesitas, en un solo lugar y tratando siempre directamente con nosotros.",
    icon: servicioIntegralIcon,
  },
  {
    id: "envios-peninsula",
    title: "Instalación en toda España",
    teaser:
      "Enviamos a toda España e instalamos nosotros mismos donde nos necesites, también fuera de España.",
    fullDescription:
      "Estamos en Verín (Ourense), pero enviamos a toda España e instalamos nosotros mismos en cualquier punto, también fuera de España. El envío y el desplazamiento vienen incluidos en el presupuesto.",
    icon: envioIcon,
  },
  {
    id: "calidad-precio",
    title: "Calidad-precio",
    teaser:
      "Elección exhaustiva de los materiales para ofrecer la mejor calidad a un precio acorde.",
    fullDescription:
      "Seleccionamos cuidadosamente cada material para ofrecerte la mejor relación calidad‑precio del mercado. Trabajamos con proveedores de confianza y optimizamos nuestros procesos para que obtengas un acabado premium sin romper tu presupuesto.",
    icon: calidadPrecioIcon,
  },
];

export default services;
