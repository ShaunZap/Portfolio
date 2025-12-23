import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      all: true,
      exclude: [
        "node_modules/",
        "coverage/",
        "**/*.d.ts",
        "vite.config.ts",
        "eslint.config.js",
        "**/types/**",
        "src/main.tsx",
      ],
    },
  },
  server: {
    proxy: {
      "/api-news": {
        target: "https://gnews.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-news/, ""),
      },
    },
  },
});
