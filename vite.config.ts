import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sak_frontend/",
  plugins: [react()],
  //@ts-ignore
  "process.env": process.env,
});
