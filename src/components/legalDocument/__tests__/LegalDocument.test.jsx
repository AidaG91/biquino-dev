import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import LegalDocument from "../LegalDocument";

const sections = [
  {
    heading: "1. Primera",
    paragraphs: ["Texto uno."],
    items: ["Elemento A", "Elemento B"],
    after: ["Texto final."],
  },
  { heading: "2. Segunda", paragraphs: ["Texto dos."] },
];

function renderDoc(props = {}) {
  return render(
    <MemoryRouter>
      <LegalDocument
        eyebrow="Información legal"
        title="Documento de prueba"
        updated="1 de enero de 2026"
        sections={sections}
        {...props}
      />
    </MemoryRouter>,
  );
}

describe("LegalDocument", () => {
  it("renders a single h1 with the title and the update date", () => {
    renderDoc();
    expect(
      screen.getAllByRole("heading", { level: 1, name: "Documento de prueba" }),
    ).toHaveLength(1);
    expect(screen.getByText(/1 de enero de 2026/)).toBeTruthy();
  });

  it("renders each section with its heading, paragraphs and list", () => {
    renderDoc();
    expect(
      screen.getByRole("heading", { level: 2, name: "1. Primera" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { level: 2, name: "2. Segunda" }),
    ).toBeTruthy();
    expect(screen.getByText("Texto uno.")).toBeTruthy();
    expect(screen.getByText("Texto final.")).toBeTruthy();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("renders the related link only when provided", () => {
    const { unmount } = renderDoc();
    expect(screen.queryByRole("link")).toBeNull();
    unmount();

    renderDoc({ related: { to: "/aviso-legal", label: "Ver el aviso legal" } });
    expect(
      screen.getByRole("link", { name: "Ver el aviso legal" }),
    ).toHaveAttribute("href", "/aviso-legal");
  });
});
