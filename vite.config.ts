import path from 'path';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), WindiCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
