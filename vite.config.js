import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: 7000,
  },
});

// import { resolve } from "path";
// import sass from "sass";

// resolve: {
//   alias: {
//     $fonts: resolve("./public"),
//   },
// },
// css: {
//   preprocessorOptions: {
//     scss: {
//       implementation: sass,
//     },
//   },
// },

// css: {
//   preprocessorOptions: {
//     scss: {
//       includePaths: ["node_modules"],
//     },
//   },
// },

// const config = {
//   resolve: {
//     alias: {
//       $fonts: resolve('./public')
//     }
//   }
// };
