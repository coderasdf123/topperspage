import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 9000, // Or your desired port
  },
});
