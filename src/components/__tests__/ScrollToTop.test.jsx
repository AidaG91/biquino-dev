import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

function mockReducedMotion(matches) {
  window.matchMedia = vi.fn().mockReturnValue({ matches });
}

function renderWithRoutes() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <ScrollToTop />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Inicio</h1>
                <Link to="/faq">FAQ</Link>
              </>
            }
          />
          <Route path="/faq" element={<h1>Preguntas frecuentes</h1>} />
        </Routes>
      </main>
    </MemoryRouter>,
  );
}

describe("ScrollToTop", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    mockReducedMotion(false);
  });

  afterEach(() => {
    delete window.matchMedia;
  });

  it("returns null (no DOM output)", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/servicios"]}>
        <ScrollToTop />
      </MemoryRouter>,
    );
    expect(container.firstChild).toBeNull();
  });

  it("scrolls smoothly by default", () => {
    renderWithRoutes();
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ top: 0, behavior: "smooth" }),
    );
  });

  it("scrolls instantly when the user prefers reduced motion", () => {
    mockReducedMotion(true);
    renderWithRoutes();
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ top: 0, behavior: "auto" }),
    );
  });

  it("does not move focus on the initial load", () => {
    renderWithRoutes();
    expect(screen.getByRole("heading", { name: "Inicio" })).not.toHaveFocus();
  });

  it("moves focus to the new page h1 after navigating", () => {
    renderWithRoutes();
    fireEvent.click(screen.getByRole("link", { name: "FAQ" }));
    const heading = screen.getByRole("heading", { name: "Preguntas frecuentes" });
    expect(heading).toHaveFocus();
    expect(heading).toHaveAttribute("tabindex", "-1");
  });
});
