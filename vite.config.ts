import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import eslintPlugin from "@nabla/vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), eslintPlugin()],
  base: "/",
  server: {
    host: "0.0.0.0",
  },
});
