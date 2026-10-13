import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi, afterEach } from "vitest";
import toast from "react-hot-toast";
import ContactForm from "../ContactForm";

vi.mock("react-hot-toast", () => ({
  default: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

function renderContactForm(props = {}) {
  return render(
    <MemoryRouter>
      <ContactForm showInfoColumn={false} {...props} />
    </MemoryRouter>
  );
}

function fillValidForm() {
  fireEvent.change(screen.getByLabelText(/nombre completo/i), {
    target: { value: "Ana Pérez" },
  });
  fireEvent.change(screen.getByLabelText(/correo electrónico/i), {
    target: { value: "ana@ejemplo.com" },
  });
  fireEvent.change(screen.getByLabelText(/sobre tu proyecto/i), {
    target: { value: "Quiero rotular mi local." },
  });
  fireEvent.click(screen.getByLabelText(/política de privacidad/i));
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});

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

  it("disables native validation so the custom Spanish messages are shown", () => {
    const { container } = renderContactForm();
    expect(container.querySelector("form")).toHaveAttribute("novalidate");
  });

  it("shows validation errors on empty submit", async () => {
    const { container } = renderContactForm();
    const form = container.querySelector("form");
    fireEvent.submit(form);

    expect(await screen.findByText(/el nombre es obligatorio/i)).toBeTruthy();
    expect(screen.getByText(/el email es obligatorio/i)).toBeTruthy();
    expect(screen.getByText(/el mensaje no puede estar vacío/i)).toBeTruthy();
    expect(
      screen.getByText(/debes aceptar la política de privacidad/i),
    ).toBeTruthy();
  });

  it("renders the privacy checkbox unchecked with a link to the policy", () => {
    renderContactForm();
    expect(screen.getByLabelText(/política de privacidad/i)).not.toBeChecked();
    expect(
      screen.getByRole("link", { name: /política de privacidad/i }),
    ).toHaveAttribute("href", "/politica-de-privacidad");
  });

  it("does not send the form until the privacy policy is accepted", () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const { container } = renderContactForm();
    fillValidForm();
    fireEvent.click(screen.getByLabelText(/política de privacidad/i));
    fireEvent.submit(container.querySelector("form"));

    expect(fetchMock).not.toHaveBeenCalled();
    expect(
      screen.getByText(/debes aceptar la política de privacidad/i),
    ).toBeTruthy();
    expect(screen.getByLabelText(/política de privacidad/i)).toHaveFocus();
  });

  it("moves focus to the first invalid field on submit", () => {
    const { container } = renderContactForm();
    fireEvent.change(screen.getByLabelText(/nombre completo/i), {
      target: { value: "Ana" },
    });
    fireEvent.submit(container.querySelector("form"));
    expect(screen.getByLabelText(/correo electrónico/i)).toHaveFocus();
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

  it("posts the form to Netlify, announces success and resets the fields", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });
    vi.stubGlobal("fetch", fetchMock);
    const { container } = renderContactForm({ initialServicio: "rotulacion" });

    const status = screen.getByRole("status");
    expect(status).toBeEmptyDOMElement();

    fillValidForm();
    fireEvent.submit(container.querySelector("form"));

    await waitFor(() =>
      expect(status).toHaveTextContent(/mensaje enviado/i),
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe("/");
    expect(options.method).toBe("POST");
    expect(options.body.get("form-name")).toBe("contact");
    expect(options.body.get("email")).toBe("ana@ejemplo.com");
    expect(options.body.has("bot-field")).toBe(true);
    expect(options.body.has("privacy")).toBe(true);

    expect(screen.getByLabelText(/nombre completo/i)).toHaveValue("");
    expect(screen.getByLabelText(/sobre tu proyecto/i)).toHaveValue("");
    expect(screen.getByLabelText(/política de privacidad/i)).not.toBeChecked();
    expect(screen.getByLabelText(/servicio de interés/i)).toHaveValue(
      "rotulacion",
    );
  });

  it("shows an error toast and keeps the data when the request fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 500 }),
    );
    const { container } = renderContactForm();

    fillValidForm();
    fireEvent.submit(container.querySelector("form"));

    await waitFor(() => expect(toast.error).toHaveBeenCalled());
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
    expect(screen.getByLabelText(/nombre completo/i)).toHaveValue("Ana Pérez");
  });
});
