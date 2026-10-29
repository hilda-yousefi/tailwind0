import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/tailwind0/",
  plugins: [tailwindcss()],
  build: {
    outDir: "docs",
  },
});
