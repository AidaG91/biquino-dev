import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

describe("ScrollToTop", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        <ScrollToTop />
      </MemoryRouter>,
    );
    expect(container.innerHTML).toBe("");
  });

  it("returns null (no DOM output)", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/servicios"]}>
        <ScrollToTop />
      </MemoryRouter>,
    );
    expect(container.firstChild).toBeNull();
  });
});
