module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:css-import-order/recommended',
  ],
  plugins: ['react-refresh', 'css-import-order'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'sourceType': 'module',
    'ecmaVersion': 'latest',
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-unresolved': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
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
            position: 'after'
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-dom/**'],
        'distinctGroup': false,
        // 'newlines-between': 'always',
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
    }],
  },
  settings: {
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true,
      }
    },
  }
}
