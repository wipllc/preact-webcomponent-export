import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],

  build: {
    lib: {
      entry: resolve(__dirname, "src/web-component.jsx"),
      name: "MyComponent",
      // the proper extensions will be added
      fileName: "my-component",
    },
  },
});
