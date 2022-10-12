module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals', 'airbnb', 'airbnb/hooks',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0, { extensions: ['.js', '.jsx'] }],
    '@next/next/no-img-element': 'off',
    'react/function-component-definition': [2, {
      // "namedComponents":  "arrow-function"
      // "unnamedComponents": "function-expression" | "arrow-function" | Array<"function-expression" | "arrow-function">
    }],
    linebreak: 0,
  },
};
