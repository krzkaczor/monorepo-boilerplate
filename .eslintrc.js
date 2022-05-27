/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    es6: true,
  },
  extends: ['typestrict'],
  plugins: ['no-only-tests', 'simple-import-sort', 'unused-imports', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    // this gets inlined into a package eslint, so it means: use current package's package.info or the one at the project root
    'import/no-extraneous-dependencies': ['error', { packageDir: ['./', __dirname] }],
    'unused-imports/no-unused-imports-ts': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-only-tests/no-only-tests': 'error',
    'no-with': 'error',
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
  },
}
