import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BeforeAfter from "../BeforeAfter";

function renderComparison() {
  return render(
    <BeforeAfter
      before="/antes.webp"
      after="/despues.webp"
      beforeAlt="Cajero antes"
      afterAlt="Cajero después"
    />,
  );
}

describe("BeforeAfter", () => {
  it("renders both images with their alt text", () => {
    renderComparison();
    expect(screen.getByAltText("Cajero antes")).toHaveAttribute("src", "/antes.webp");
    expect(screen.getByAltText("Cajero después")).toHaveAttribute("src", "/despues.webp");
  });

  it("starts in the middle with an accessible slider", () => {
    renderComparison();
    const slider = screen.getByRole("slider", { name: "Comparar antes y después" });
    expect(slider).toHaveValue("50");
    expect(slider).toHaveAttribute("aria-valuetext", "50% de la imagen de antes");
  });

  it("moves the divider when the slider changes", () => {
    const { container } = renderComparison();
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: "20" } });
    expect(slider).toHaveValue("20");
    expect(container.firstChild.style.getPropertyValue("--position")).toBe("20%");
  });
});
