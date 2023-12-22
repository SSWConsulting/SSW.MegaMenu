/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./lib/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
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
