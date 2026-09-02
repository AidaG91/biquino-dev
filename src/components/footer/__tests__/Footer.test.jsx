import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Footer from "../Footer";

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
}

describe("Footer", () => {
  it("renders the footer element", () => {
    const { container } = renderFooter();
    const footer = container.querySelector("footer");
    expect(footer).toBeTruthy();
  });

  it("displays contact email", () => {
    renderFooter();
    const matches = screen.getAllByText(/info@biquiño/i);
    expect(matches.length).toBeGreaterThan(0);
  });

  it("displays contact phone", () => {
    renderFooter();
    const matches = screen.getAllByText(/\+34/);
    expect(matches.length).toBeGreaterThan(0);
  });

  it("renders social links with rel='noopener noreferrer'", () => {
    const { container } = renderFooter();
    const externalLinks = container.querySelectorAll('a[rel="noopener noreferrer"]');
    expect(externalLinks.length).toBeGreaterThan(0);
    externalLinks.forEach((link) => {
      expect(link.getAttribute("target")).toBe("_blank");
    });
  });

  it("social links have aria-label", () => {
    const { container } = renderFooter();
    const externalLinks = container.querySelectorAll('a[rel="noopener noreferrer"]');
    externalLinks.forEach((link) => {
      expect(link.getAttribute("aria-label")).toBeTruthy();
    });
  });

  it("displays copyright with current year", () => {
    renderFooter();
    const year = new Date().getFullYear().toString();
    const matches = screen.getAllByText(new RegExp(year));
    expect(matches.length).toBeGreaterThan(0);
  });
});
