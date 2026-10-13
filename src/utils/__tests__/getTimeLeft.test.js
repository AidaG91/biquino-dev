import { describe, it, expect } from "vitest";
import getTimeLeft from "../getTimeLeft";

const target = "2026-11-07T12:00:00+01:00";
const targetMs = new Date(target).getTime();

describe("getTimeLeft", () => {
  it("desglosa el tiempo restante", () => {
    const now = targetMs - (2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000;
    expect(getTimeLeft(target, now)).toEqual({
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
    });
  });

  it("devuelve null cuando la fecha ya ha pasado", () => {
    expect(getTimeLeft(target, targetMs + 1000)).toBeNull();
  });
});
