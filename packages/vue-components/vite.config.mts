import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  base: "./",
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/vue.components.ts"),
      name: "components",
      fileName: "components",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
  plugins: [dts()],
});
