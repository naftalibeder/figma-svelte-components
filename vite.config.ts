import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { injectFigmaCss } from "./plugins";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), injectFigmaCss()],
});
