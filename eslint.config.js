import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import cssImportOrder from 'eslint-plugin-css-import-order';
import importPlugin from 'eslint-plugin-import';
import importNewlines from 'eslint-plugin-import-newlines';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sortExports from 'eslint-plugin-sort-exports';
import vitestPlugin from 'eslint-plugin-vitest';
import globals from 'globals';

const DIRNAME = import.meta.dirname;
const compat = new FlatCompat({ baseDirectory: DIRNAME });
const fsdConfig = compat.extends('@feature-sliced/eslint-config');

// Pop is needed to remove 'ecmaVersion: 2015' to fix the error 💫
fsdConfig.pop();

export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      'optimizeImages/',
      'vite.config.ts',
      'vitest.config.ts',
      'eslint.config.js',
    ],
  },
  stylistic.configs['recommended-flat'],
  ...fsdConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
        ...vitestPlugin.environments.env.globals,
      },
      parser: tsParser,
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
      '@eslint': js,
      '@typescript-eslint': tsPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefresh,
      'import': importPlugin,
      'vitest': vitestPlugin,
      'css-import-order': cssImportOrder,
      'sort-exports': sortExports,
      'import-newlines': importNewlines,
      '@stylistic': stylistic,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        'typescript': {
          'alwaysTryTypes': true,
        },
      },
    },
    rules: {
      ...js.configs['recommended'].rules,
      ...tsPlugin.configs['recommended'].rules,
      ...reactPlugin.configs['recommended'].rules,
      ...reactHooksPlugin.configs['recommended'].rules,
      ...importPlugin.configs['recommended'].rules,
      ...vitestPlugin.configs['recommended'].rules,
      ...cssImportOrder.configs['recommended'].rules,

      'boundaries/element-types': 'warn',
      'no-undef': 'off',
      'curly': 'error',
      'no-restricted-exports': [
        'warn',
        { 'restrictDefaultExports':
          {
            'direct': true,
            'named': true,
            'defaultFrom': true,
            'namedFrom': true,
            'namespaceFrom': true,
          }
        }
      ],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'off',
        { allowConstantExport: true },
      ],

      'import-newlines/enforce': [
        'error',
        {
          'items': 5,
          'max-len': 100,
          'semi': true,
        },
      ],

      'import/prefer-default-export': 'off',
      'import/no-default-export': 'error',
      'import/no-unresolved': ['error', { commonjs: true, amd: true }],
      'import/no-namespace': ['error', { ignore: ['*.ext'] }],
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-internal-modules': 'warn',
      'import/order': [
        'error',
        {
          groups:
          [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index', 'type'], ['object']],
          pathGroups: [
            {
              pattern: '{react,react-dom/**,redux}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{.,..}/**/*\.(svg|webp)',
              group: 'object',
              position: 'after',
            },
            {
              pattern: '{.,..}/**/*\module.scss',
              group: 'object',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'react-dom/**'],
          'distinctGroup': false,
          alphabetize: {
            order: 'asc',
            orderImportKind: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'sort-imports': [
        'error',
        {
          'ignoreCase': false,
          'ignoreDeclarationSort': true,
          'ignoreMemberSort': false,
          'memberSyntaxSortOrder': ['all', 'multiple', 'single', 'none'],
          'allowSeparatedGroups': false,
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

      '@stylistic/jsx-curly-brace-presence': ['warn', { 'propElementValues': 'always' }],
      '@stylistic/jsx-wrap-multilines': [
        'error',
        {
          'declaration': 'parens-new-line',
          'assignment': 'parens-new-line',
          'return': 'parens-new-line',
          'arrow': 'parens-new-line',
          'condition': 'parens-new-line',
          'logical': 'ignore',
          'prop': 'parens-new-line',
          'propertyValue': 'parens-new-line',
        },
      ],
      '@stylistic/jsx-one-expression-per-line': ['error', { 'allow': 'single-child' }],
      '@stylistic/jsx-max-props-per-line': ['error', { 'maximum': { 'single': 4, 'multi': 1 } }],
      '@stylistic/jsx-child-element-spacing': 'warn',

      '@stylistic/brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
      '@stylistic/operator-linebreak': ['error', 'before', { 'overrides': { '=': 'after' } }],
      '@stylistic/newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 4 }],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        { blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
      '@stylistic/array-element-newline': [
        'error',
        'consistent',
        {
          'multiline': true,
          'minItems': 5,
        },
      ],
      '@stylistic/object-curly-newline': ['error', {
        'ObjectExpression': { 'multiline': true, 'minProperties': 2 },
      }],
      '@stylistic/object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': false }],

      '@stylistic/member-delimiter-style': [
        'error',
        {
          'multiline': {
            'delimiter': 'semi',
            'requireLast': true,
          },
          'singleline': {
            'delimiter': 'semi',
            'requireLast': false,
          },
        },
      ],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }],

      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/max-len': [
        'error',
        {
          'code': 100,
          'tabWidth': 2,
          'ignoreComments': true,
          'ignoreUrls': true,
          'ignoreStrings': true,
          'ignoreTemplateLiterals': true,
          "ignoreRegExpLiterals": true,
        },
      ],
    },
  },
];
