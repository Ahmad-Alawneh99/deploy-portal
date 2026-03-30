import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  stylistic.configs.recommended,

  {
    rules: {
      '@stylistic/semi': ['error', 'always'],
    },
  },

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);
