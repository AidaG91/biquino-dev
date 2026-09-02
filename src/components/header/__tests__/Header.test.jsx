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

describe("Header", () => {
  it("renders logo linking to home", () => {
    renderHeader();
    const logo = screen.getByAltText("Biquiño Logo");
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
    const { container } = renderHeader();
    const hamburger = container.querySelector("button");
    expect(hamburger).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute("aria-expanded", "true");
  });

  it("mobile menu closes on Escape key", () => {
    const { container } = renderHeader();
    const hamburger = container.querySelector("button");
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(hamburger).toHaveAttribute("aria-expanded", "false");
  });

  it("mobile menu closes when a nav link is clicked", () => {
    const { container } = renderHeader();
    const hamburger = container.querySelector("button");
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute("aria-expanded", "true");
    const faqLink = container.querySelector('a[href="/faq"]');
    fireEvent.click(faqLink);
    expect(hamburger).toHaveAttribute("aria-expanded", "false");
  });
});
