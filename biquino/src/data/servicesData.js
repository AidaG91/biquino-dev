import calidadIcon from '../assets/CALIDAD_PRECIO.svg';
import envioIcon from '../assets/ENVIO.svg';
import respuestaIcon from '../assets/RESPUESTA_RAPIDA.svg';
import integralIcon from '../assets/SERVICIO_INTEGRAL.svg';

const services = [
  {
    id: 1,
    icon: respuestaIcon,
    title: 'Respuesta rápida',
    text: 'Valoramos tu tiempo. Te garantizamos una comunicación fluida y un compromiso de respuesta en menos de 24 horas a todas tus consultas y peticiones.',
  },
  {
    id: 2,
    icon: integralIcon,
    title: 'Servicio integral',
    text: 'Ofrecemos un servicio 360º. Incluye asesoramiento, diseño, artes finales, producción, instalación y servicio post-venta.',
  },
  {
    id: 3,
    icon: envioIcon,
    title: 'Envíos a península',
    text: 'Trabajamos con una red de colaboradores, la cual nos permite poder enviar y instalar en toda la península y fuera.',
  },
  {
    id: 4,
    icon: calidadIcon,
    title: 'Calidad-precio',
    text: 'Elección exhaustiva de los materiales para ofrecer la mejor calidad a un precio acorde.',
  },
];

export default services;