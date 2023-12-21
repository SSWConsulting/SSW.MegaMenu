/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />

import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    target: "esnext",
    minify: false,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      plugins: [svgr()],
      external: ["react", "react-dom", "@headlessui/react", "@heroicons/react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: resolve(__dirname, "scripts/tests/setup.js"),
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
