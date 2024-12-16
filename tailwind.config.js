/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./lib/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        ssw: {
          red: "#cc4141",
          light: {
            red: "#d26e6e",
          },
          gray: "#797979",
          black: "#333333",
        },
      },
      maxWidth: {
        "9xl": "86rem",
      },
    },
  },
  plugins: [],
};
