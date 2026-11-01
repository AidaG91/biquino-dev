import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import IllustrativeLabel from "../IllustrativeLabel";

describe("IllustrativeLabel", () => {
  it("avisa de que la imagen es ilustrativa", () => {
    render(<IllustrativeLabel />);
    expect(screen.getByText("Imagen ilustrativa")).toBeInTheDocument();
  });
});
