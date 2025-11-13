import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import history from "connect-history-api-fallback";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000", // saari APIs backend ko
    },
    // ✅ SPA fallback for refresh on deep routes
    middlewareMode: false,
    setupMiddlewares(middlewares) {
      middlewares.push(
        history({
          disableDotRule: true,
          htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
        })
      );
      return middlewares;
    },
  },
  build: {
    outDir: "build", // production build output
  },
});