import contactInfo from "./contactInfo";

const { owner, email, phoneDisplay, addressLine1, addressLine2 } = contactInfo;

// Última revisión del texto. Actualízala cada vez que cambie el contenido.
export const avisoLegalUpdated = "13 de octubre de 2026";

// Cada sección: heading, paragraphs (opcional), items (lista, opcional) y
// after (párrafos tras la lista, opcional).
const avisoLegalData = [
  {
    heading: "1. Datos del titular",
    paragraphs: [
      "En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:",
    ],
    items: [
      `Titular: ${owner.name} (autónoma), que opera bajo el nombre comercial Biquiño.`,
      `NIF: ${owner.nif}`,
      `Domicilio: ${addressLine1}, ${addressLine2}.`,
      `Correo electrónico: ${email}`,
      `Teléfono: ${phoneDisplay}`,
      "Actividad: impresión, rotulación, merchandising y diseño gráfico.",
    ],
  },
  {
    heading: "2. Objeto y condiciones de uso",
    paragraphs: [
      "Este sitio web tiene carácter informativo y comercial: presenta los servicios de Biquiño y permite solicitar presupuesto. El acceso y uso de la web atribuye la condición de usuario e implica la aceptación de este aviso legal.",
      "El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.",
    ],
  },
  {
    heading: "3. Propiedad intelectual e industrial",
    paragraphs: [
      "Los textos, imágenes, fotografías de trabajos, logotipos, diseño y código de esta web son titularidad de Biquiño o se utilizan con autorización de sus titulares, y están protegidos por la normativa de propiedad intelectual e industrial.",
      "Queda prohibida su reproducción, distribución, transformación o comunicación pública sin autorización expresa de su titular, salvo en los casos permitidos por la ley.",
    ],
  },
  {
    heading: "4. Responsabilidad",
    paragraphs: [
      "Procuramos que la información de la web sea exacta y esté actualizada, pero no podemos garantizar la ausencia de errores ni la disponibilidad continua del sitio. Los precios, plazos y condiciones definitivos de cada trabajo se fijan en el presupuesto aceptado por el cliente.",
      "Biquiño no responde del contenido de los sitios web de terceros a los que pueda enlazar esta web, sin perjuicio de las responsabilidades que la normativa aplicable no permita excluir.",
    ],
  },
  {
    heading: "5. Protección de datos y cookies",
    paragraphs: [
      "El tratamiento de los datos personales que facilites a través del formulario de contacto se explica en la política de privacidad.",
    ],
  },
  {
    heading: "6. Legislación aplicable",
    paragraphs: [
      "Este aviso legal se rige por la legislación española. Si el usuario tiene la condición de consumidor, podrá acudir a los juzgados y tribunales que le reconozca la normativa de protección de consumidores, incluidos los de su domicilio.",
    ],
  },
];

export default avisoLegalData;
