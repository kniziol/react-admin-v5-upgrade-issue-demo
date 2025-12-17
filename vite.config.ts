import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig(() => {
  return {
    test: {
      globals: true, // See more: https://vitest.dev/config/#globals
      environment: "jsdom", // See more: https://vitest.dev/config/#environment
    },
    // https://github.com/vitejs/vite/issues/1973#issuecomment-787571499
    define: {
      "import.meta.env": {},
    },
    server: {
      open: true,
    },
    build: {
      outDir: "build",
    },
    resolve: {
      alias: {
        buffer: "buffer/",
      },
    },
    plugins: [react(), nodePolyfills()],
  };
});
