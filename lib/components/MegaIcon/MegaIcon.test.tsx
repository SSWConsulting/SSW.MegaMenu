import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { iconMap } from "../../types/icon";
import { MegaIcon } from "./MegaIcon";

describe("MegaIcon", () => {
  it("doesn't add the icon name as screen-reader text", () => {
    const { container } = render(<MegaIcon icon="chevronDown" />);

    expect(container.textContent).toBe("");
    expect(container.querySelector(".sr-only")).toBeNull();
  });

  it.each(Object.keys(iconMap).filter((icon) => icon !== "chinaFlag"))(
    "hides the %s icon from screen readers",
    (icon) => {
      const { container } = render(
        <MegaIcon icon={icon as keyof typeof iconMap} />,
      );

      expect(container.querySelector("svg")?.getAttribute("aria-hidden")).toBe(
        "true",
      );
    },
  );

  it("hides the chinaFlag icon from screen readers", () => {
    const { container } = render(<MegaIcon icon="chinaFlag" />);
    const img = container.querySelector("img");

    expect(img?.getAttribute("alt")).toBe("");
    expect(img?.getAttribute("aria-hidden")).toBe("true");
  });
});
