import { RenderResult, cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}): RenderResult =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }: { children: JSX.Element }) => children,
    ...options,
  });

// override render export
export { customRender as render };
