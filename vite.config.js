import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";
import { fileURLToPath } from 'url';
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), tailwindcss()],
    resolve: { alias: {"@": path.resolve(_dirname, "./src")} },
})
