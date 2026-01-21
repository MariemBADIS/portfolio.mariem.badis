import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // Base path for deploying under a sub-path (e.g. GitHub Pages).
  // Priority: explicit env var -> production default -> root.
  const base =
    env.VITE_BASE_PATH || (mode === "production" ? "/portfolio.mariem.badis/" : "/");

  return {
    plugins: [react()],
    base,
    build: {
      outDir: "dist",
    },
  };
});
