// https://github.com/typescript-eslint/typescript-eslint/issues/109

/**
 * @typedef { import("eslint").Linter.Config } EsLintConfig
 * @typedef { import("eslint").Linter.RulesRecord } RulesRecord
 * @typedef { import("eslint").Linter.ConfigOverride } ConfigOverride
 */

//  https://duncanleung.com/eslint-mixed-javascript-typescript-files-codebase/
// https://stackoverflow.com/questions/57597142/how-to-run-typescript-eslint-on-ts-files-and-eslint-on-js-files-in-the-same-pr
// https://github.com/typescript-eslint/typescript-eslint/issues/109

/** @type {RulesRecord} */
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
/** @type {RulesRecord} */
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

const env = {
  browser: true,
  es2021: true,
  node: true,
  es6: true,
};

const ecmaFeatures = {
  jsx: true,
};

const ecmaVersion = 'latest';

const sourceType = 'module';

const extendsOptionsForJs = [
  'eslint:recommended',
  'plugin:react/recommended',
];

const nextjsExtendsOptions = [
  'next',
  'next/core-web-vitals',
];

const jsPlugins = ['react'];

/** @type {ConfigOverride} */
const typescriptOverrides = {
  env,
  globals: {
    react: 'writable',
  },
  extends: [
    ...extendsOptionsForJs,
    'plugin:@typescript-eslint/recommended',
    /**
     * @see https://github.com/standard/eslint-config-standard-with-typescript/blob/master/src/index.ts
     */
    'standard-with-typescript',
    ...nextjsExtendsOptions,
  ],
  plugins: [...jsPlugins, '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion,
    sourceType,
    ecmaFeatures,
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  files: ['**/*.{ts,tsx}'],
  rules: {
    ...eslintRule,
    ...typescriptEslintRule,
  },
};

/** @type {EsLintConfig} */
module.exports = {
  root: true,
  env,
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    ...extendsOptionsForJs,
    ...nextjsExtendsOptions,
  ],
  plugins: [...jsPlugins],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion,
    sourceType,
    ecmaFeatures,
  },
  rules: {
    ...eslintRule,
  },
  overrides: [typescriptOverrides],
};
