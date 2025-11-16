import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    // Only include Vitest test files (exclude Playwright .spec.ts files)
    include: ['**/*.test.{ts,tsx}'],
    exclude: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/*.spec.ts', // Exclude Playwright test files (they use @playwright/test)
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        '.next/',
        'dist/',
        '**/*.test.{ts,tsx}',
        '**/*.spec.ts',
        '**/__tests__/**',
        '**/__snapshots__/**',
        '**/*.config.{js,ts,mjs}',
        '**/vitest.setup.ts',
        '**/next-env.d.ts',
        '**/pages/_app.tsx', // App wrapper, typically not unit tested
        '**/pages/api/**', // API routes tested separately
      ],
      include: [
        'pages/**/*.{ts,tsx}',
        'components/**/*.{ts,tsx}',
      ],
      thresholds: {
        lines: 50,
        functions: 50,
        branches: 50,
        statements: 50,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
});

