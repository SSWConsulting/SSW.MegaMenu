/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'lib/assets'),
    },
  },
  plugins: [
    { ...react(), apply: 'serve' },
  ],
  build: {
    target: 'es6',
    minify: false,
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'lib/index.js'),
      formats: ['es', 'cjs', 'umd'],
      name: 'MegaMenu',
      fileName: 'megamenu',
    },
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        "classnames", 
        "@fortawesome/fontawesome-svg-core", 
        "@fortawesome/free-solid-svg-icons", 
        "@fortawesome/react-fontawesome", 
        "react-useportal"
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          "classnames": "cs",
          "react-useportal": "usePortal"
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, 'scripts/tests/setup.js'),
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
