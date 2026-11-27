export const DEFAULT_URL = "https://www.ssw.com.au";
export const ICON_IMAGE_SIZES: { [key in IconSizes]: string } = {
  small: "h-5 w-5",
  medium: "h-8 w-8",
};
export type IconSizes = "small" | "medium";

// SSW Design System focus ring (https://design.ssw.com.au): a solid #cc4141
// edge with a 3px, 50% #cc4141 ring around it. It's built from ring-offset +
// ring, so it adds no layout, and it's shared so every link in the submenu
// panel shows the same keyboard focus.
export const FOCUS_RING =
  "rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-ssw-red/50 focus-visible:ring-offset-1 focus-visible:ring-offset-ssw-red";
