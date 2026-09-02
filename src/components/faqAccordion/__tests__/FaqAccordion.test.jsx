import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FaqAccordion from "../FaqAccordion";

const items = [
  { id: "faq-1", question: "¿Pregunta uno?", answer: "Respuesta uno." },
  { id: "faq-2", question: "¿Pregunta dos?", answer: "Respuesta dos." },
];

describe("FaqAccordion", () => {
  it("toggles on click and updates aria-expanded", async () => {
    const user = userEvent.setup();
    render(<FaqAccordion items={items} />);

    const trigger = screen.getByRole("button", { name: /pregunta uno/i });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("Respuesta uno.")).not.toBeVisible();

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Respuesta uno.")).toBeVisible();

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("Respuesta uno.")).not.toBeVisible();
  });

  it("toggles on Enter and Space key presses", async () => {
    const user = userEvent.setup();
    render(<FaqAccordion items={items} />);

    const trigger = screen.getByRole("button", { name: /pregunta uno/i });
    trigger.focus();

    await user.keyboard("{Enter}");
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    await user.keyboard(" ");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("only one item reported open at a time via aria-expanded", async () => {
    const user = userEvent.setup();
    render(<FaqAccordion items={items} />);

    const first = screen.getByRole("button", { name: /pregunta uno/i });
    const second = screen.getByRole("button", { name: /pregunta dos/i });

    await user.click(first);
    expect(first).toHaveAttribute("aria-expanded", "true");

    await user.click(second);
    expect(second).toHaveAttribute("aria-expanded", "true");
    expect(first).toHaveAttribute("aria-expanded", "false");
  });

  it("opens the first item by default when openFirstByDefault is set", () => {
    render(<FaqAccordion items={items} openFirstByDefault />);

    const first = screen.getByRole("button", { name: /pregunta uno/i });
    const second = screen.getByRole("button", { name: /pregunta dos/i });

    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(second).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText("Respuesta uno.")).toBeVisible();
  });
});
