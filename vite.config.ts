/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />

import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import nodeExternals from "rollup-plugin-node-externals";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      // config relating to api-extractor, which rolls up the types
      rollupConfig: {
        messages: {
          extractorMessageReporting: {
            "ae-forgotten-export": {
              // @ts-expect-error - this is a valid config
              logLevel: "warning",
              addToApiReportFile: true,
            },
          },
        },
      },
    }),
    { ...nodeExternals(), enforce: "pre" },
  ],
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
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@headlessui/react": "HeadlessUI",
          clsx: "clsx",
          "react-device-detect": "react-dd",
          "react-hotkeys-hook": "ReactHotkeysHook",
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
