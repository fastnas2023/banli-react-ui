import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    'dist',
    'storybook-static',
    'node_modules',
    'coverage',
    '**/*.d.ts',
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // 组件库/Storybook 项目不需要 Vite Fast Refresh 的“仅导出组件”限制
      'react-refresh/only-export-components': 'off',
      // hooks/refs/immutability 的 lint 规则对组件库内部实现过于苛刻（并非运行时错误）
      'react-hooks/immutability': 'off',
      'react-hooks/refs': 'off',
    },
  },
])
