import { photo } from "./photos";
// Fotos placeholder generadas con IA, a sustituir por fotos reales de Biquiño.
import identidadVisualImg from "../assets/images/placeholders/subpaginas/diseno-tecnico/identidad-visual.webp";
import adaptacionArchivosImg from "../assets/images/placeholders/subpaginas/diseno-tecnico/adaptacion-archivos.webp";
import fotografiaProductoImg from "../assets/images/placeholders/subpaginas/diseno-tecnico/fotografia-producto.webp";
import aperturaNegociosImg from "../assets/images/placeholders/subpaginas/gestion-proyectos/apertura-negocios.webp";
import produccionFabricacionImg from "../assets/images/placeholders/subpaginas/gestion-proyectos/produccion-fabricacion.webp";
import supervisionInstalacionImg from "../assets/images/placeholders/subpaginas/gestion-proyectos/supervision-instalacion.webp";
import menuDiarioImg from "../assets/images/placeholders/subpaginas/web-rrss/menu-diario.webp";
import gestionContenidoRrssImg from "../assets/images/placeholders/subpaginas/web-rrss/gestion-contenido-rrss.webp";
import desarrolloWebImg from "../assets/images/placeholders/subpaginas/web-rrss/desarrollo-web.webp";

const serviciosSubpagesData = {
  "impresion-digital": {
    title: "Impresión digital",
    lead: "Papelería, cartelería, pegatinas y etiquetas impresas con calidad profesional, en la tirada que necesites y sin pedido mínimo.",
    cards: [
      {
        title: "Papelería corporativa",
        description:
          "Tarjetas de visita, folletos, sobres, carpetas y todo el material que representa a tu empresa. Diseñamos y producimos una papelería coherente con tu identidad visual, con papeles y acabados elegidos para que cada pieza transmita profesionalidad.",
        photoCaption: "Foto: tarjetas de visita impresas",
        image: photo("tarjetas-visita"),
      },
      {
        title: "Pegatinas y etiquetas",
        description:
          "Pegatinas y etiquetas adhesivas con la forma, el tamaño y el material que necesites, para productos, envases, eventos o promoción. Las producimos en nuestro propio taller, con colores nítidos y acabados resistentes.",
        photoCaption: "Foto: pegatinas cuadradas impresas con un escudo heráldico",
        image: photo("pegatinas-escudo"),
      },
    ],
  },
  personalizacion: {
    title: "Personalización de prendas y objetos",
    lead: "DTF, vinilo textil y serigrafía para equipaciones, uniformes, eventos y merchandising, con un diseño adaptado a cada prenda y material.",
    cards: [
      {
        title: "Estampados textiles",
        description:
          "Estampamos tu diseño en camisetas, sudaderas, uniformes y todo tipo de prendas con DTF, vinilo textil o serigrafía, según la prenda, la cantidad y el uso que vaya a tener. Trabajamos para empresas (ropa laboral), clubes y deportistas (equipaciones con dorsales, nombres y patrocinadores) y para grupos, peñas y eventos.",
        photoCaption: "Foto: equipación deportiva personalizada",
        image: photo("equipaciones"),
      },
      {
        title: "Merchandising",
        description:
          "Mochilas, bolsas y todo tipo de artículos promocionales con tu logotipo. Si un artículo necesita una técnica que no hacemos en el taller, la conseguimos con talleres colaboradores y nos encargamos nosotros del diseño, el seguimiento y la entrega: tú solo tratas con nosotros.",
        photoCaption: "Foto: mochila personalizada con logotipo",
        image: photo("mochila-personalizada"),
      },
    ],
  },
  rotulacion: {
    title: "Rotulación",
    lead: "Vinilos, rótulos, escaparates, lonas, señalética y vehículos, instalados por nosotros mismos en cualquier punto de España.",
    cards: [
      {
        title: "Rotulación de locales y escaparates",
        description:
          "Rótulos de fachada en dibond, metacrilato o PVC, rótulos luminosos, vinilos de puerta y cristal, vinilo ácido para dar privacidad, lonas y señalética. Producimos el vinilo y la cartelería en nuestro taller e instalamos en la franja horaria que menos interfiera con tu negocio.",
        photoCaption: "Foto: escaparate con vinilo de corte",
        image: photo("escaparate-vinilo-corte"),
      },
      {
        title: "Rotulación de vehículos",
        description:
          "Convertimos tu furgoneta, coche, camión o flota en publicidad en movimiento. Diseñamos, producimos e instalamos el vinilo adaptado a cada vehículo, con materiales pensados para aguantar la carretera y el paso del tiempo.",
        photoCaption: "Foto: furgoneta rotulada con vinilo de corte",
        image: photo("furgoneta-reformas-chus"),
      },
    ],
  },
  "diseno-tecnico": {
    title: "Diseño técnico aplicado",
    lead: "Formación en preimpresión, diseño gráfico y audiovisual para que cada idea se pueda imprimir, cortar o instalar sin sorpresas.",
    cards: [
      {
        title: "Identidad visual",
        description:
          "Diseñamos un sistema gráfico coherente que proyecta la esencia y valores de tu marca, garantizando su correcta aplicación en todos tus recursos visuales.",
        photoCaption: "Foto: identidad de marca",
        image: { src: identidadVisualImg },
      },
      {
        title: "Adaptación de archivos",
        description:
          "Si ya tienes tu diseño, lo revisamos y lo preparamos para imprimir, cortar o publicar sin errores: tamaños, sangrados, colores y formatos. La preimpresión es la base de nuestra formación.",
        photoCaption: "Foto: preparación de archivo técnico",
        image: { src: adaptacionArchivosImg },
      },
      {
        title: "Asesoramiento en materiales y proyectos",
        description:
          "Te ayudamos a elegir el soporte y el acabado adecuados (vinilo, dibond, metacrilato, PVC, lona…) según dónde va a ir cada pieza y cuánto tiene que durar, para que tu proyecto logre el máximo impacto.",
        photoCaption: "Foto: carteles en dibond con vinilo impreso laminado",
        image: photo("cartel-abejas"),
      },
      {
        title: "Fotografía de producto y proyecto",
        description:
          "Reportaje fotográfico de tus prendas, espacios y proyectos terminados, pensado para catálogo, redes sociales y comunicación de marca. Contamos con experiencia en fotografía de bodas, eventos, conciertos y naturaleza.",
        photoCaption: "Foto: sesión fotográfica de producto",
        image: { src: fotografiaProductoImg },
      },
    ],
  },
  "gestion-proyectos": {
    title: "Gestión de proyectos gráficos completos",
    lead: "Del primer contacto a la instalación: asesoramiento, diseño, producción e instalación en un mismo sitio.",
    cards: [
      {
        title: "Imagen para apertura de negocios",
        description:
          "Ofrecemos una cobertura gráfica integral para el lanzamiento de tu actividad, desde la identidad y rotulación hasta el merchandising promocional. Nos encargamos de cada solución visual que tu negocio necesite, garantizando una puesta en marcha profesional, coherente y sin preocupaciones.",
        photoCaption: "Foto: apertura de negocio",
        image: { src: aperturaNegociosImg },
      },
      {
        title: "Producción y fabricación propia",
        description:
          "Producimos en nuestro taller todo lo relacionado con vinilo, cartelería, pegatinas y DTF, lo que nos da agilidad y control sobre el acabado. Cuando un trabajo necesita otra técnica, lo realizamos con talleres colaboradores de confianza y seguimos al frente: preparamos los archivos, supervisamos la producción y revisamos el resultado antes de entregarlo.",
        photoCaption: "Foto: taller de producción",
        image: { src: produccionFabricacionImg },
      },
      {
        title: "Supervisión e instalación final",
        description:
          "Instalamos nosotros mismos vinilos, rótulos y elementos visuales, en cualquier punto de España o fuera y en la franja horaria que mejor te venga. El envío y el desplazamiento vienen incluidos en el presupuesto, para que sepas el coste total desde el principio.",
        photoCaption: "Foto: equipo coordinando instalación",
        image: { src: supervisionInstalacionImg },
      },
    ],
  },
  "web-rrss": {
    title: "Web y RRSS",
    lead: "Webs y contenido para redes sociales con un estilo gráfico coherente: tu departamento creativo externo.",
    cards: [
      {
        title: "Gestión de menú diario para hostelería",
        description:
          "Diseñamos tu oferta gastronómica diaria asegurando una presentación impecable y profesional. Nos encargamos de que la carta física o digital de tu establecimiento sea clara, atractiva y esté siempre alineada con tu identidad visual.",
        photoCaption: "Foto: carta de hostelería",
        image: { src: menuDiarioImg },
      },
      {
        title: "Gestión de contenido y RRSS",
        description:
          "Creamos tus publicaciones con un mismo estilo gráfico para que tu marca sea reconocible en todas ellas, y te preparamos un calendario de publicaciones. También podemos crear vídeo para tus redes.",
        photoCaption: "Foto: gestión de redes sociales",
        image: { src: gestionContenidoRrssImg },
      },
      {
        title: "Desarrollo y Programación Web",
        description:
          "Diseñamos y programamos tu web a medida, adaptada a móvil, y la mantenemos al día: actualizaciones mensuales, trimestrales o cuando necesites un cambio.",
        photoCaption: "Foto: diseño web",
        image: { src: desarrolloWebImg },
      },
    ],
  },
};

export default serviciosSubpagesData;
