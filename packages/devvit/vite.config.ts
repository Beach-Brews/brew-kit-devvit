import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';

const pkgDir = import.meta.dirname;

/**
 * Publishes dist/client/theme.css (exported as `@brew-kit/devvit/client/theme.css`),
 * which forwards to the client package's theme. Add more theme files under dist/client/ the same way.
 */
function themeReexport(): Plugin {
    return {
        name: 'brew-kit:theme-reexport',
        apply: 'build',
        generateBundle() {
            this.emitFile({
                type: 'asset',
                fileName: 'client/theme.css',
                source: "@import '@brew-kit/devvit-client/theme.css';\n",
            });
        },
    };
}

export default defineConfig({
    plugins: [themeReexport()],
    build: {
        outDir: resolve(pkgDir, 'dist'),
        emptyOutDir: true,
        // Leave minifying to the app's bundler; readable output is easier to debug
        minify: false,
        sourcemap: true,
        lib: {
            entry: {
                client: resolve(pkgDir, 'src/client.ts'),
                server: resolve(pkgDir, 'src/server.ts'),
            },
            formats: ['es'],
        },
        rolldownOptions: {
            // Re-exports only: the underlying packages stay separate dependencies
            external: [/^@brew-kit\//, /^@devvit\//, /^react($|\/)/, /^node:/],
            output: {
                entryFileNames: '[name].js',
            },
        },
    },
});
