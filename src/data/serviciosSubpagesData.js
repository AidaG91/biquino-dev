// Fotos placeholder generadas con IA (ver nota en projectsData.js) — a
// sustituir por fotos reales de Biquiño.
import equipacionesImg from "../assets/images/placeholders/subpaginas/personalizacion/equipaciones.jpg";
import merchandisingSubImg from "../assets/images/placeholders/subpaginas/personalizacion/merchandising.jpg";
import identidadVisualImg from "../assets/images/placeholders/subpaginas/diseno-tecnico/identidad-visual.jpg";
import adaptacionArchivosImg from "../assets/images/placeholders/subpaginas/diseno-tecnico/adaptacion-archivos.jpg";
import asesoramientoMaterialesImg from "../assets/images/placeholders/subpaginas/diseno-tecnico/asesoramiento-materiales.jpg";
import fotografiaProductoImg from "../assets/images/placeholders/subpaginas/diseno-tecnico/fotografia-producto.jpg";
import aperturaNegociosImg from "../assets/images/placeholders/subpaginas/gestion-proyectos/apertura-negocios.jpg";
import produccionFabricacionImg from "../assets/images/placeholders/subpaginas/gestion-proyectos/produccion-fabricacion.jpg";
import supervisionInstalacionImg from "../assets/images/placeholders/subpaginas/gestion-proyectos/supervision-instalacion.jpg";
import menuDiarioImg from "../assets/images/placeholders/subpaginas/web-rrss/menu-diario.jpg";
import gestionContenidoRrssImg from "../assets/images/placeholders/subpaginas/web-rrss/gestion-contenido-rrss.jpg";
import desarrolloWebImg from "../assets/images/placeholders/subpaginas/web-rrss/desarrollo-web.jpg";
// PLACEHOLDERS TEMPORALES: imágenes reutilizadas de otras secciones hasta tener
// fotos específicas para las tarjetas nuevas de Impresión digital, Estampados
// textiles y Rotulación.
import papeleriaPlaceholderImg from "../assets/images/placeholders/proyectos/papeleria.webp";
import rotulosPlaceholderImg from "../assets/images/placeholders/proyectos/rotulos.webp";

const serviciosSubpagesData = {
  "impresion-digital": {
    title: "Impresión digital",
    lead: "Papelería, pegatinas y etiquetas impresas con calidad profesional, en la tirada que necesites.",
    cards: [
      {
        title: "Papelería corporativa",
        description:
          "Tarjetas de visita, folletos, sobres, carpetas y todo el material que representa a tu empresa. Diseñamos y producimos una papelería coherente con tu identidad visual, con papeles y acabados elegidos para que cada pieza transmita profesionalidad.",
        photoCaption: "Foto: papelería corporativa",
        image: papeleriaPlaceholderImg,
      },
      {
        title: "Pegatinas y etiquetas",
        description:
          "Pegatinas y etiquetas adhesivas en la forma, el tamaño y el material que necesites, para productos, envases o promoción. Impresas con colores nítidos y acabados resistentes.",
        photoCaption: "Foto: pegatinas y etiquetas impresas",
        image: asesoramientoMaterialesImg,
      },
    ],
  },
  personalizacion: {
    title: "Personalización de prendas y objetos",
    lead: "Técnicas de marcaje de alta resistencia y diseño adaptado a cada material, para equipaciones, uniformes, eventos y merchandising.",
    cards: [
      {
        title: "Estampados textiles",
        description:
          "Estampamos tu diseño en camisetas, sudaderas, uniformes y todo tipo de prendas, con técnicas de alta resistencia pensadas para el uso diario. Trabajamos para empresas (ropa laboral), clubes y deportistas (equipaciones con dorsales, nombres y patrocinadores) y para grupos, peñas y eventos, con tiradas ágiles y económicas que mantienen la uniformidad y el espíritu del grupo.",
        photoCaption: "Foto: estampado textil",
        image: equipacionesImg,
      },
      {
        title: "Merchandising",
        description:
          "Transformamos objetos cotidianos en soportes promocionales mediante técnicas de marcaje precisas. Personalizamos una amplia gama de artículos y detalles corporativos, asegurando que tu marca acompañe al cliente con un acabado profesional y duradero.",
        photoCaption: "Foto: objetos con logo",
        image: merchandisingSubImg,
      },
    ],
  },
  rotulacion: {
    title: "Rotulación",
    lead: "Rótulos, vinilos, escaparates y vehículos: tu marca visible donde la ven tus clientes.",
    cards: [
      {
        title: "Rotulación de locales y escaparates",
        description:
          "Fabricamos e instalamos rótulos de fachada, vinilos de puerta y cristal y cartelería interior. Diseñamos y montamos también tu escaparate para cada temporada o campaña, para que tu negocio llame la atención desde la calle.",
        photoCaption: "Foto: rótulo y escaparate de local",
        image: rotulosPlaceholderImg,
      },
      {
        title: "Rotulación de vehículos",
        description:
          "Convertimos tu furgoneta, coche o flota en publicidad en movimiento. Diseñamos e instalamos vinilos y rotulación adaptados a cada vehículo, con materiales pensados para aguantar la carretera y el paso del tiempo.",
        photoCaption: "Foto: vehículo rotulado",
        image: supervisionInstalacionImg,
      },
    ],
  },
  "diseno-tecnico": {
    title: "Diseño técnico aplicado",
    lead: "El puente entre una idea visual y su ejecución perfecta en el mundo real, con soluciones gráficas optimizadas para fabricación.",
    cards: [
      {
        title: "Identidad visual",
        description:
          "Diseñamos un sistema gráfico coherente que proyecta la esencia y valores de tu marca, garantizando su correcta aplicación en todos tus recursos visuales.",
        photoCaption: "Foto: identidad de marca",
        image: identidadVisualImg,
      },
      {
        title: "Adaptación de archivos",
        description:
          "Preparamos tus diseños para un rendimiento óptimo en cualquier medio. Desde la optimización técnica para plataformas digitales hasta la configuración de artes finales para impresión profesional sin errores.",
        photoCaption: "Foto: preparación de archivo técnico",
        image: adaptacionArchivosImg,
      },
      {
        title: "Asesoramiento en materiales y proyectos",
        description:
          "Consultoría técnica sobre soportes, acabados y visibilidad de producción. Te guiamos en la selección de los materiales idóneos para que cada proyecto visual logre el máximo impacto.",
        photoCaption: "Foto: muestrario de materiales",
        image: asesoramientoMaterialesImg,
      },
      {
        title: "Fotografía de producto y proyecto",
        description:
          "Reportaje fotográfico de tus prendas, espacios y proyectos terminados, pensado para catálogo, redes sociales y comunicación de marca. Imágenes cuidadas que muestran el resultado final con la mejor luz.",
        photoCaption: "Foto: sesión fotográfica de producto",
        image: fotografiaProductoImg,
      },
    ],
  },
  "gestion-proyectos": {
    title: "Gestión de proyectos gráficos completos",
    lead: "Coordinamos todas las fases de producción, desde la conceptualización técnica hasta la entrega final del producto.",
    cards: [
      {
        title: "Imagen para apertura de negocios",
        description:
          "Ofrecemos una cobertura gráfica integral para el lanzamiento de tu actividad, desde la identidad y rotulación hasta el merchandising promocional. Nos encargamos de cada solución visual que tu negocio necesite, garantizando una puesta en marcha profesional, coherente y sin preocupaciones.",
        photoCaption: "Foto: apertura de negocio",
        image: aperturaNegociosImg,
      },
      {
        title: "Producción y fabricación propia",
        description:
          "Contamos con infraestructura propia para materializar tus proyectos sin intermediarios. Al controlar directamente el proceso de fabricación, garantizamos una agilidad superior, costes optimizados y un control de calidad riguroso en cada acabado.",
        photoCaption: "Foto: taller de producción",
        image: produccionFabricacionImg,
      },
      {
        title: "Supervisión e instalación final",
        description:
          "Ejecutamos personalmente el montaje de vinilos, rotulación y elementos visuales en tus instalaciones. Nos aseguramos de que el proyecto culmine con una colocación técnica impecable, cuidando cada detalle para que el resultado final sea perfecto.",
        photoCaption: "Foto: equipo coordinando instalación",
        image: supervisionInstalacionImg,
      },
    ],
  },
  "web-rrss": {
    title: "Web y RRSS",
    lead: "Soporte continuo para negocios que necesitan dinamismo y actualización constante — tu departamento creativo externo.",
    cards: [
      {
        title: "Gestión de menú diario para hostelería",
        description:
          "Diseñamos tu oferta gastronómica diaria asegurando una presentación impecable y profesional. Nos encargamos de que la carta física o digital de tu establecimiento sea clara, atractiva y esté siempre alineada con tu identidad visual.",
        photoCaption: "Foto: carta de hostelería",
        image: menuDiarioImg,
      },
      {
        title: "Gestión de contenido y RRSS",
        description:
          "Mantenemos tus perfiles activos y profesionales. Nos encargamos de la creación de contenido visual estratégico y de su publicación periódica, asegurando una comunicación constante con tu comunidad sin que tú tengas que dedicarle tiempo.",
        photoCaption: "Foto: gestión de redes sociales",
        image: gestionContenidoRrssImg,
      },
      {
        title: "Desarrollo y Programación Web",
        description:
          "Creamos sitios web a medida, priorizando la velocidad, la seguridad y la experiencia de usuario. Diseñamos plataformas totalmente responsive que se adaptan a cualquier dispositivo, garantizando que tu escaparate digital sea eficiente y visualmente impactante.",
        photoCaption: "Foto: diseño web",
        image: desarrolloWebImg,
      },
    ],
  },
};

export default serviciosSubpagesData;
