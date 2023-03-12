require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  plugins: ['cypress'],
  extends: [
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:cypress/recommended',
    'plugin:vue/vue3-recommended',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}',
      ],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  globals: {},
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/component-name-in-template-casing': 'error',
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'no-prototype-builtins': 'off',
    'vue/no-boolean-default': ['off', 'default-false'],
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/padding-line-between-blocks': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error',
    'vue/valid-v-slot': 'error',
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 1,
        }
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    /* Notice: For prettier to work well alongside eslint, is mandatory to disable eslint formatting options.
   * I just disabled, but left them here for reference. But since prettier is not automatically handled by some IDEs,
   * we decided to keep the eslint formatting options enabled.
   * */
    indent: [
      'error',
      2,
      {
        CallExpression: {
          arguments: 1,
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        MemberExpression: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression'],
        offsetTernaryExpressions: false,
      },
    ],
  },
}
