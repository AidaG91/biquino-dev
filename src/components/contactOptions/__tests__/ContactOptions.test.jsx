import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactOptions from "../ContactOptions";

describe("ContactOptions", () => {
  it("ofrece las cuatro vías de contacto", () => {
    render(<ContactOptions />);
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });

  it("enlaza a WhatsApp en una pestaña nueva", () => {
    render(<ContactOptions />);
    const link = screen.getByRole("link", { name: /whatsapp/i });
    expect(link).toHaveAttribute("href", "https://wa.me/34694929681");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("enlaza al teléfono, al email y al formulario", () => {
    render(<ContactOptions />);
    expect(screen.getByRole("link", { name: /llámanos/i })).toHaveAttribute(
      "href",
      "tel:+34694929681",
    );
    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:info@biquino.es",
    );
    expect(screen.getByRole("link", { name: /formulario/i })).toHaveAttribute(
      "href",
      "#formulario",
    );
  });
});
