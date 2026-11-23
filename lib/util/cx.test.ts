import { describe, expect, it } from "vitest";
import { cx } from "./cx";

describe("cx", () => {
  it("joins class names and drops falsy ones", () => {
    expect(cx("flex", false, undefined, "gap-2")).toBe("flex gap-2");
  });

  it("lets a later Tailwind class override an earlier one", () => {
    expect(cx("p-2 text-white", "p-4")).toBe("text-white p-4");
  });
});
