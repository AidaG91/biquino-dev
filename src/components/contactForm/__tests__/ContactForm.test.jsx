import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import ContactForm from "../ContactForm";

vi.mock("react-hot-toast", () => ({
  default: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

function renderContactForm() {
  return render(
    <MemoryRouter>
      <ContactForm showInfoColumn={false} />
    </MemoryRouter>
  );
}

describe("ContactForm", () => {
  it("renders all form fields", () => {
    const { container } = renderContactForm();
    expect(screen.getByLabelText(/nombre completo/i)).toBeTruthy();
    expect(screen.getByLabelText(/correo electrónico/i)).toBeTruthy();
    expect(screen.getByLabelText(/teléfono/i)).toBeTruthy();
    expect(screen.getByLabelText(/sobre tu proyecto/i)).toBeTruthy();
    const buttons = container.querySelectorAll('button[type="submit"]');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("shows validation errors on empty submit", async () => {
    const { container } = renderContactForm();
    const form = container.querySelector("form");
    fireEvent.submit(form);

    expect(await screen.findByText(/el nombre es obligatorio/i)).toBeTruthy();
    expect(screen.getByText(/el email es obligatorio/i)).toBeTruthy();
    expect(screen.getByText(/el mensaje no puede estar vacío/i)).toBeTruthy();
  });

  it("clears error when user types in field", async () => {
    const { container } = renderContactForm();
    const form = container.querySelector("form");
    fireEvent.submit(form);

    const errorsBefore = form.querySelectorAll("p");
    const nameErrorsBefore = Array.from(errorsBefore).filter((el) =>
      /el nombre es obligatorio/i.test(el.textContent),
    );
    expect(nameErrorsBefore.length).toBeGreaterThan(0);

    const freshForm = container.querySelector("form");
    const nameInput = freshForm.querySelector('input[name="name"]');
    fireEvent.change(nameInput, { target: { value: "Juan" } });

    const errorsAfter = freshForm.querySelectorAll("p");
    const nameErrorsAfter = Array.from(errorsAfter).filter((el) =>
      /el nombre es obligatorio/i.test(el.textContent),
    );
    expect(nameErrorsAfter.length).toBe(0);
  });

  it("shows email format error for invalid email", async () => {
    const { container } = renderContactForm();
    const emailField = screen.getByLabelText(/correo electrónico/i);

    fireEvent.change(emailField, { target: { value: "invalido" } });
    fireEvent.blur(emailField);
    const form = container.querySelector("form");
    fireEvent.submit(form);

    expect(
      await screen.findByText(/el formato del email no es válido/i),
    ).toBeTruthy();
  });
});
