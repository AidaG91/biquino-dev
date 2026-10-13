import LegalDocument from "../components/legalDocument/LegalDocument";
import avisoLegalData, { avisoLegalUpdated } from "../data/avisoLegalData";
import useSeo from "../hooks/useSeo";

export default function AvisoLegalPage() {
  useSeo(
    "Aviso legal | Biquiño",
    "Aviso legal de biquino.es: datos del titular, condiciones de uso, propiedad intelectual y legislación aplicable.",
  );

  return (
    <LegalDocument
      eyebrow="Información legal"
      title="Aviso legal"
      updated={avisoLegalUpdated}
      sections={avisoLegalData}
      related={{
        to: "/politica-de-privacidad",
        label: "Ver la política de privacidad",
      }}
    />
  );
}
