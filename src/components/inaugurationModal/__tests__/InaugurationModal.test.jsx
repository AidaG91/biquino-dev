import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import InaugurationModal from "../InaugurationModal";
import inaugurationData from "../../../data/inaugurationData";

const target = new Date(inaugurationData.date).getTime();

function renderModal() {
  return render(
    <MemoryRouter>
      <InaugurationModal />
    </MemoryRouter>,
  );
}

describe("InaugurationModal", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    const store = new Map();
    vi.stubGlobal("localStorage", {
      getItem: (key) => store.get(key) ?? null,
      setItem: (key, value) => store.set(key, String(value)),
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("se abre antes de la fecha con la cuenta atrás", () => {
    vi.setSystemTime(target - 86400 * 1000);
    renderModal();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("timer")).toBeInTheDocument();
  });

  it("no se muestra una vez pasada la fecha", () => {
    vi.setSystemTime(target + 1000);
    renderModal();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("se cierra con el botón y no vuelve a salir", () => {
    vi.setSystemTime(target - 86400 * 1000);
    const { unmount } = renderModal();
    fireEvent.click(screen.getByRole("button", { name: /cerrar/i }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    unmount();
    renderModal();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("se cierra con Escape", () => {
    vi.setSystemTime(target - 86400 * 1000);
    renderModal();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
