import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "../Hero";

function renderHero() {
  return render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>,
  );
}

describe("Hero", () => {
  it("renders the main heading", () => {
    renderHero();
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Damos forma a tu marca");
  });

  it("renders the eyebrow pill", () => {
    renderHero();
    expect(screen.getByText("Impresión digital en España")).toBeInTheDocument();
  });

  it("renders the lead paragraph", () => {
    renderHero();
    expect(
      screen.getByText(/papelería corporativa, merchandising/i),
    ).toBeInTheDocument();
  });

  it("renders CTA linking to contact page", () => {
    renderHero();
    const cta = screen.getByText("Solicita tu presupuesto gratis");
    expect(cta).toHaveAttribute("href", "/contacto");
  });

  it("renders secondary CTA linking to projects", () => {
    renderHero();
    const link = screen.getByText("Ver proyectos");
    expect(link).toHaveAttribute("href", "/proyectos");
  });

  it("renders hero image with descriptive alt text", () => {
    renderHero();
    const img = screen.getByRole("img", {
      name: /rotulación e impresión/i,
    });
    expect(img).toBeInTheDocument();
  });

  it("has accessible section label", () => {
    const { container } = renderHero();
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("aria-label", "Presentación");
  });
});
