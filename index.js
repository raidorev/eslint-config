module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'plugin:regexp/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
    extraFileExtensions: ['.vue'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'unicorn/prevent-abbreviations': [
      'error',
      {
        ignore: ['\\.e2e-spec$', '^props$'],
        replacements: {
          env: false,
        },
      },
    ],
    'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
  },
  overrides: [
    {
      files: ['./*.cjs', './*.js'],
      env: {
        // All config files in app directory have NodeJS environment
        node: true,
      },
    },
  ],
}
