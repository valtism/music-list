import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";
import eslintPlugin from "@nabla/vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr(), eslintPlugin()],
  base: "/",
  server: {
    host: "0.0.0.0",
  },
});
