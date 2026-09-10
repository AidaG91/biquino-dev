import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TrustStrip from "../TrustStrip";

describe("TrustStrip", () => {
  it("renders all four trust items", () => {
    const { container } = render(<TrustStrip />);
    const items = container.querySelectorAll("li");
    expect(items).toHaveLength(4);
  });

  it("renders correct labels", () => {
    render(<TrustStrip />);
    expect(screen.getByText("Respuesta en 24–48h")).toBeInTheDocument();
    expect(screen.getByText("Sin pedido mínimo")).toBeInTheDocument();
    expect(screen.getByText("Envíos a toda España")).toBeInTheDocument();
    expect(screen.getByText("Diseño gráfico incluido")).toBeInTheDocument();
  });

  it("renders as a list", () => {
    const { container } = render(<TrustStrip />);
    expect(container.querySelector("ul")).toBeInTheDocument();
  });
});
