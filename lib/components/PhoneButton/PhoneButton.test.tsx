import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { render } from "../../../scripts/tests/test-utils";
import { PhoneButton } from "./PhoneButton";

describe("PhoneButton", () => {
  it("links to the contact page on desktop with a relative URL", () => {
    render(<PhoneButton />);

    expect(screen.getByRole("link", { name: /contact us/i })).toHaveAttribute(
      "href",
      "/company/contact-us",
    );
  });
});
