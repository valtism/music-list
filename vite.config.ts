import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";
import eslint from "@rollup/plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    svgr(),
    eslint({ include: ["./src/**/*.vue", "./src/**/*.js"] }),
  ],
});
