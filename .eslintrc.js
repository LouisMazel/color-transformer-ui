/* eslint-disable */
module.exports = {
  /* eslint-enable */
  env: {
    node: true,
    browser: true,
    jest: true
  },
  extends: ['node', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier', '@typescript-eslint', 'import'],
  rules: {
    'prettier/prettier': 2
  },
  ignorePatterns: ['lib/**/*', 'node_modules/*'],
  settings: {
    'import/resolver': {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    }
  }
}
