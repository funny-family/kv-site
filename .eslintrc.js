/**
 * @typedef { import("eslint").Linter.Config } EsLintConfig
 */

const eslintRule = {
  semi: ['error', 'always'],
  'comma-dangle': ['error', 'always-multiline'],
  'max-len': [2, 80, 2, {
    ignoreUrls: true,
    ignoreComments: false,
    ignoreTrailingComments: true,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    // ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
    // ignorePattern: '^import .*',
  }],
  'space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  }],
};

/**
 * @see https://typescript-eslint.io/
 */
const typescriptEslintRule = {
  '@typescript-eslint/no-var-requires': 'warn',
  '@typescript-eslint/explicit-function-return-type': 'warn',
  /**
   * @see https://typescript-eslint.io/rules/comma-dangle/
   */
  '@typescript-eslint/comma-dangle': 'off',
  /**
   * @see https://typescript-eslint.io/rules/semi/
   */
  '@typescript-eslint/semi': 'off',
  /**
   * @see https://typescript-eslint.io/rules/space-before-function-paren/
   */
  '@typescript-eslint/space-before-function-paren': 'off',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports' },
  ],
  '@typescript-eslint/consistent-type-exports': 'error',
};

/** @type {EsLintConfig} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    /**
     * @see https://github.com/standard/eslint-config-standard-with-typescript/blob/master/src/index.ts
     */
    'standard-with-typescript',
    'next',
    'next/core-web-vitals',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    ...eslintRule,
    ...typescriptEslintRule,
  },
};
