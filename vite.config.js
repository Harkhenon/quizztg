import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/sass/app.scss',
        'resources/js/app.jsx',
      ],
      refresh: true,
    }),
    react(),
    eslintPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('resources/', import.meta.url)),
      '@js': fileURLToPath(new URL('resources/js', import.meta.url)),
      '@sass': fileURLToPath(new URL('resources/sass', import.meta.url)),
      '@img': fileURLToPath(new URL('resources/img', import.meta.url)),
      '@components': fileURLToPath(new URL('resources/js/components', import.meta.url)),
      '@containers': fileURLToPath(new URL('resources/js/containers', import.meta.url)),
    },
  },
});
