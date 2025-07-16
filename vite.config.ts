import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mobile-wedding-invitation/', // ← GitHub Pages용 경로
  plugins: [react(), tsconfigPaths(), svgr()],
});