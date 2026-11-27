import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { render } from "../../../scripts/tests/test-utils";
import { PhoneButton } from "./PhoneButton";

describe("PhoneButton", () => {
  it("links to the contact page on desktop", () => {
    render(<PhoneButton />);

    expect(screen.getByRole("link", { name: /contact us/i })).toHaveAttribute(
      "href",
      "https://www.ssw.com.au/company/contact-us",
    );
  });
});
