import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

function renderHeader() {
  return render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
}

function getToggle() {
  return screen.getByRole("button", { name: /menú/i });
}

describe("Header", () => {
  it("renders logo linking to home", () => {
    renderHeader();
    const logo = screen.getByAltText("Biquiño, inicio");
    expect(logo).toBeInTheDocument();
    expect(logo.closest("a")).toHaveAttribute("href", "/");
  });

  it("renders navigation links", () => {
    const { container } = renderHeader();
    expect(container.querySelector("nav")).toBeInTheDocument();
  });

  it("has nav with aria-label", () => {
    const { container } = renderHeader();
    const nav = container.querySelector("nav");
    expect(nav).toHaveAttribute("aria-label", "Navegación principal");
  });

  it("mobile menu opens on hamburger click", () => {
    renderHeader();
    const hamburger = getToggle();
    expect(hamburger).toHaveAttribute("aria-expanded", "false");
    expect(hamburger).toHaveAccessibleName("Abrir menú");
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute("aria-expanded", "true");
    expect(hamburger).toHaveAccessibleName("Cerrar menú");
  });

  it("mobile menu closes on Escape key and returns focus to the toggle", () => {
    renderHeader();
    const hamburger = getToggle();
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute("aria-expanded", "true");
    screen.getByRole("link", { name: "FAQ" }).focus();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(hamburger).toHaveAttribute("aria-expanded", "false");
    expect(hamburger).toHaveFocus();
  });

  it("locks body scroll only while the menu is open", () => {
    renderHeader();
    const hamburger = getToggle();
    expect(document.body).not.toHaveClass("menu-open");
    fireEvent.click(hamburger);
    expect(document.body).toHaveClass("menu-open");
    fireEvent.click(hamburger);
    expect(document.body).not.toHaveClass("menu-open");
  });

  it("mobile menu closes when a nav link is clicked", () => {
    const { container } = renderHeader();
    const hamburger = getToggle();
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute("aria-expanded", "true");
    const faqLink = container.querySelector('a[href="/faq"]');
    fireEvent.click(faqLink);
    expect(hamburger).toHaveAttribute("aria-expanded", "false");
  });

  it("hides the closed mobile menu from keyboard and screen readers", () => {
    const { container } = renderHeader();
    const nav = container.querySelector("nav");
    expect(nav).not.toBeVisible();
    fireEvent.click(getToggle());
    expect(nav).toBeVisible();
  });
});
