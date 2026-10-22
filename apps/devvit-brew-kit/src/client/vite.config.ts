import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwind from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwind()],
    build: {
        outDir: '../../dist/client',
        sourcemap: true,
        rolldownOptions: {
            input: {
                inline: resolve(import.meta.dirname, 'inline.html'),
                expanded: resolve(import.meta.dirname, 'expanded.html'),
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name][extname]',
            },
        },
    },
    server: {
        host: true,
        proxy: {
            '/api': {
                target: 'http://localhost:7575',
                changeOrigin: true
            }
        }
    }
});
