// http://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'generator-star-spacing': 0,
    'arrow-parens': 0,
    'prefer-const': 2,
    'no-trailing-spaces': 'error',
    'no-debugger': 0,
    'no-extra-semi': 'error',
    semi: [
      'error',
      'never'
    ],
    'no-var': 'error',
    quotes: [
      2,
      'single'
    ]
  }
}
