import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const pkgDir = import.meta.dirname;

export default defineConfig({
    build: {
        outDir: resolve(pkgDir, 'dist'),
        emptyOutDir: true,
        // Leave minifying to the app's bundler; readable output is easier to debug
        minify: false,
        sourcemap: true,
        target: 'node22',
        lib: {
            entry: resolve(pkgDir, 'src/index.ts'),
            formats: ['es'],
        },
        rolldownOptions: {
            // Devvit and Node built-ins come from the app at runtime
            external: [/^@devvit\//, /^node:/],
            output: {
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].js',
            },
        },
    },
});
