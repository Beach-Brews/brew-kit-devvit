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
        lib: {
            entry: {
                'client/index': resolve(pkgDir, 'src/client/index.ts'),
                'server/index': resolve(pkgDir, 'src/server/index.ts'),
            },
            formats: ['es'],
        },
        rolldownOptions: {
            external: [/^@devvit\//, /^node:/, /^vite($|\/)/],
            output: {
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].js',
            },
        },
    },
});
