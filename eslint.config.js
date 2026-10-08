// @ts-check
import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
    globalIgnores(['**/dist/', '**/coverage/', '**/.turbo/', '**/node_modules/']),

    // Base rules for every JS/TS file in the repo
    js.configs.recommended,
    tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        },
    },

    // Browser + React code (client UI and client-side mocks)
    {
        files: ['packages/devvit-client/**/*.{ts,tsx}', 'packages/devvit-mock/src/client/**/*.{ts,tsx}'],
        extends: [reactHooks.configs.flat['recommended-latest']],
        languageOptions: { globals: globals.browser },
    },

    // Node code (server utilities, server-side mocks, config files)
    {
        files: ['packages/devvit-server/**/*.ts', 'packages/devvit-mock/src/server/**/*.ts', '**/*.config.{js,ts}'],
        languageOptions: { globals: globals.node },
    },

    // Must be last: turns off rules that conflict with Prettier
    prettier,
);
