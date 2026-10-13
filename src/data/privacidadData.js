import contactInfo from "./contactInfo";

const { owner, email, addressLine1, addressLine2 } = contactInfo;

// Última revisión del texto. Actualízala cada vez que cambie el contenido.
export const privacidadUpdated = "13 de octubre de 2026";

// Cada sección: heading, paragraphs (opcional), items (lista, opcional) y
// after (párrafos tras la lista, opcional).
const privacidadData = [
  {
    heading: "1. Responsable del tratamiento",
    items: [
      `Titular: ${owner.name}, que opera bajo el nombre comercial Biquiño.`,
      `NIF: ${owner.nif}`,
      `Domicilio: ${addressLine1}, ${addressLine2}.`,
      `Correo electrónico: ${email}`,
    ],
  },
  {
    heading: "2. Qué datos recogemos y para qué",
    paragraphs: [
      "Cuando nos escribes a través del formulario de contacto recogemos el nombre, el correo electrónico, el teléfono (opcional), el servicio de interés (opcional) y el mensaje que nos envías. Son los datos necesarios para atender tu consulta.",
      "Los usamos únicamente para responder a tu consulta o a tu solicitud de presupuesto. No los utilizamos para enviarte publicidad ni para elaborar perfiles.",
    ],
  },
  {
    heading: "3. Base legal",
    paragraphs: ["La base jurídica del tratamiento depende de la finalidad:"],
    items: [
      "Atención de consultas y solicitudes de presupuesto: aplicación de medidas precontractuales solicitadas por la persona interesada (artículo 6.1.b del RGPD), cuando proceda.",
      "Gestión de encargos y prestación de servicios: ejecución del contrato o aplicación de medidas precontractuales, según corresponda.",
      "Otros tratamientos que requieran consentimiento: consentimiento de la persona interesada (artículo 6.1.a del RGPD), que podrá retirar en cualquier momento, sin que ello afecte a la licitud del tratamiento realizado previamente.",
    ],
  },
  {
    heading: "4. Destinatarios y transferencias internacionales",
    paragraphs: [
      "No cedemos tus datos a terceros salvo obligación legal. Para prestar el servicio recurrimos a proveedores que actúan como encargados del tratamiento:",
    ],
    items: [
      "Netlify, Inc. (EE. UU.): aloja esta web y gestiona los envíos del formulario, que quedan almacenados en su plataforma hasta que los eliminamos.",
    ],
    after: [
      "Al ser Netlify un proveedor estadounidense, tus datos pueden tratarse fuera del Espacio Económico Europeo. Estas transferencias se realizan con las garantías previstas en el capítulo V del RGPD que resulten aplicables conforme a las condiciones contractuales del proveedor.",
    ],
  },
  {
    heading: "5. Plazo de conservación",
    paragraphs: [
      "Conservamos los datos durante el tiempo necesario para atender y gestionar la consulta o solicitud de presupuesto. Una vez finalizada la gestión, los eliminamos cuando dejan de ser necesarios, salvo que deban conservarse durante más tiempo para cumplir obligaciones legales o atender posibles responsabilidades. En caso de formalizarse un encargo, se aplicarán los plazos de conservación que correspondan a la documentación contractual, contable y fiscal.",
    ],
  },
  {
    heading: "6. Tus derechos",
    paragraphs: [
      `Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a ${email} e indicando el derecho que deseas ejercer. Si existen dudas razonables sobre tu identidad, podremos solicitar información adicional para verificarla.`,
      "Responderemos a tu solicitud en el plazo máximo de un mes desde su recepción, salvo que resulte aplicable una ampliación conforme a la normativa vigente.",
      "Si consideras que el tratamiento de tus datos no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
    ],
  },
  {
    heading: "7. Terceros que intervienen al visitar la web",
    paragraphs: [
      "Esta web no instala cookies propias ni utiliza herramientas de analítica o publicidad. Para mostrarse correctamente carga recursos de terceros, que pueden recibir tu dirección IP al conectarse desde tu navegador y, en el caso del mapa, almacenar información en tu dispositivo:",
    ],
    items: [
      "Google Fonts (Google LLC): tipografía Montserrat.",
      "Adobe Fonts (Adobe Inc.): tipografía de los titulares.",
      "Google Maps (Google LLC): mapa de la página de contacto, que puede instalar cookies propias de Google. Más información en la política de privacidad de Google.",
    ],
  },
  {
    heading: "8. Cambios en esta política",
    paragraphs: [
      "Podemos actualizar este texto para reflejar cambios legales o en el funcionamiento de la web. La fecha de la última revisión figura al principio de la página.",
    ],
  },
];

export default privacidadData;
