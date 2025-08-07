import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import importNewlines from 'eslint-plugin-import-newlines';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sortExports from 'eslint-plugin-sort-exports';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const DIRNAME = import.meta.dirname;
const compat = new FlatCompat({ baseDirectory: DIRNAME });
const fsdConfig = compat.extends('@feature-sliced/eslint-config');

// Pop is needed to remove 'ecmaVersion: 2015' to fix the error 💫
fsdConfig.pop();

export default tseslint.config(
  { ignores: ['.next', 'build'] },
  {
    extends: [js.configs.recommended, tseslint.configs.recommended, fsdConfig],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
        ...vitest.environments.env.globals,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          globalReturn: false,
          jsx: true,
        },
      },
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
      'vitest': vitest,
      'sort-exports': sortExports,
      'import-newlines': importNewlines,
      '@stylistic': stylistic,
      'unicorn': eslintPluginUnicorn,
    },
    settings: {
      'react': { version: 'detect' },
      'import/resolver': { typescript: { alwaysTryTypes: true } },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...vitest.configs.recommended.rules,
      ...stylistic.configs.recommended.rules,

      'boundaries/element-types': 'off',
      'no-undef': 'off',
      'curly': 'error',
      'no-restricted-exports': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['off', { allowConstantExport: true }],

      'import-newlines/enforce': [
        'error',
        {
          'items': 5,
          'max-len': 100,
          'semi': true,
        },
      ],

      'import/extensions': ['error', { json: 'always' }],
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'off',
      'import/no-unresolved': [
        'error',
        {
          commonjs: true,
          amd: true,
        },
      ],
      'import/no-namespace': ['error', { ignore: ['*.ext'] }],
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-internal-modules': 'off',
      'import/order': [
        'error',
        {
          'groups': [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index', 'type'],
            ['object'],
          ],
          'newlines-between': 'always',
          'pathGroups': [
            {
              pattern: '{react,react-dom/**,redux}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '*.{scss,css}',
              group: 'object',
              patternOptions: { matchBase: true },
              position: 'after',
            },
          ],
          'warnOnUnassignedImports': true,
          'pathGroupsExcludedImportTypes': ['react', 'react-dom/**'],
          'distinctGroup': false,
          'alphabetize': {
            order: 'asc',
            orderImportKind: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
          allowSeparatedGroups: false,
        },
      ],
      'sort-exports/sort-exports': [
        'error',
        {
          sortDir: 'asc',
          ignoreCase: false,
          sortExportKindFirst: 'type',
          pattern: '**/index.*',
        },
      ],

      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

      '@stylistic/semi': ['error', 'always'],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],

      '@stylistic/jsx-curly-brace-presence': ['warn', { propElementValues: 'always' }],
      '@stylistic/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'ignore',
          prop: 'parens-new-line',
          propertyValue: 'parens-new-line',
        },
      ],
      '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
      '@stylistic/jsx-max-props-per-line': [
        'error',
        {
          maximum: {
            single: 4,
            multi: 1,
          },
        },
      ],
      '@stylistic/jsx-child-element-spacing': 'warn',

      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: 'always',
        },
      ],
      '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
      '@stylistic/array-element-newline': [
        'error',
        'consistent',
        {
          multiline: true,
          minItems: 5,
        },
      ],
      '@stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 2,
          },
        },
      ],
      '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],

      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],

      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      '@stylistic/quote-props': ['error', 'consistent'],
      'unicorn/filename-case': [
        'error',
        {
          cases: { kebabCase: true },
          ignore: [/^Type[A-Z][a-zA-Z0-9]*\.ts$/],
        },
      ],
    },
  },
);
