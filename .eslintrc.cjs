module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ["react", "tailwindcss", 'react-refresh'],
  rules: {
    quotes: ['error', 'double'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "tailwindcss/no-custom-classname": "error",
    "tailwindcss/classnames-order": "error",
    "tailwindcss/no-arbitrary-value": "warn",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: 'detect',
    },
  }
}
