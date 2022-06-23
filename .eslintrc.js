module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true // Defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  plugins: [
    '@typescript-eslint',
    'import' // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
  ],
  root: true, // For configuration cascading.
  ignorePatterns: ['build'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'eol-last': [2, 'always'],
    'quotes': [2, 'single'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    semi: ['error', 'always'],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc'
        },
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        pathGroups: [
          {pattern: 'components/**',group: 'internal'},
          {pattern: 'pages/**',group: 'internal'},
          {pattern: 'assets/**',group: 'internal'},
          {pattern: 'features/**',group: 'internal'},
        ]

      }
    ]
  },
  settings: {
    react: {
      version: 'detect' // Detect react version
    }
  }
};
