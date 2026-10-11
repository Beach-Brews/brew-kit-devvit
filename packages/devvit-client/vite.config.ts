import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';

const pkgDir = import.meta.dirname;

/**
 * Copies src/theme.css into dist/ untouched. The consuming app's Tailwind
 * compiles it, so the theme stays customizable and only used classes ship.
 */
function copyTheme(): Plugin {
    return {
        name: 'brew-kit:copy-theme',
        apply: 'build',
        buildStart() {
            // theme.css isn't imported by any module, so watch it explicitly
            this.addWatchFile(resolve(pkgDir, 'src/theme.css'));
        },
        generateBundle() {
            this.emitFile({
                type: 'asset',
                fileName: 'theme.css',
                source: readFileSync(resolve(pkgDir, 'src/theme.css'), 'utf8'),
            });
        },
    };
}

export default defineConfig({
    // `npm run build`: library build of src/ into dist/
    plugins: [copyTheme()],
    build: {
        outDir: resolve(pkgDir, 'dist'),
        emptyOutDir: true,
        // Leave minifying to the app's bundler; readable output is easier to debug
        minify: false,
        sourcemap: true,
        lib: {
            entry: resolve(pkgDir, 'src/index.ts'),
            formats: ['es'],
        },
        rolldownOptions: {
            external: [/^react($|\/)/, /^react-dom($|\/)/, /^@heroicons\//],
            output: {
                // One output file per source module so apps only bundle what they import
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].js',
            },
        },
    },
});
