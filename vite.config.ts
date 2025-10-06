import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wedding_invi/', // ← GitHub Pages용 경로
  plugins: [react()],
});