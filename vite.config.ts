import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({}), VitePWA({})],
  resolve: {
    alias: { "@": resolve(projectRootDir, "src") },
  },
});
