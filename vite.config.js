import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sass from "sass";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: 7000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});

// css: {
//   preprocessorOptions: {
//     scss: {
//       includePaths: ["node_modules"],
//     },
//   },
// },
