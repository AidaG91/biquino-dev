import LegalDocument from "../../components/legalDocument/LegalDocument";
import privacidadData, { privacidadUpdated } from "../../data/privacidadData";
import useSeo from "../../hooks/useSeo";

export default function PoliticaPrivacidadPage() {
  useSeo(
    "Política de privacidad | Biquiño",
    "Cómo trata Biquiño los datos personales que nos envías a través del formulario de contacto: responsable, finalidad, derechos y conservación.",
  );

  return (
    <LegalDocument
      eyebrow="Información legal"
      title="Política de privacidad"
      updated={privacidadUpdated}
      sections={privacidadData}
      related={{ to: "/aviso-legal", label: "Ver el aviso legal" }}
    />
  );
}
