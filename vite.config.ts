/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />

import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    target: "esnext",
    minify: false,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "megamenu",
      fileName: "index",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      plugins: [svgr()],
      external: [
        "react",
        "react-dom",
        "@headlessui/react",
        "@heroicons/react",
        "clsx",
        "react-device-detect",
        "react-hotkeys-hook",
        "react-icons",
        "tailwind-merge",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@headlessui/react": "HeadlessUI",
          "@heroicons/react": "HeroIcons",
          clsx: "clsx",
          "react-device-detect": "react-dd",
          "react-hotkeys-hook": "ReactHotkeysHook",
          "react-icons": "ReactIcons",
          "tailwind-merge": "twmerge",
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
