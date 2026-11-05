import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SkipLink from "../SkipLink";

describe("SkipLink", () => {
  it("apunta al contenido principal por defecto", () => {
    render(<SkipLink />);
    expect(
      screen.getByRole("link", { name: "Saltar al contenido" }),
    ).toHaveAttribute("href", "#contenido");
  });

  it("permite cambiar el destino", () => {
    render(<SkipLink targetId="otro" />);
    expect(
      screen.getByRole("link", { name: "Saltar al contenido" }),
    ).toHaveAttribute("href", "#otro");
  });
});
