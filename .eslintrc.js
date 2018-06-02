module.exports = {
  extends: ['airbnb'],
  plugins: ['prettier'],
  settings: {
    'import/core-modules': ['react', 'prop-types', 'graphql'],
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
      },
    ],
    'linebreak-style': 'off',
    quotes: ['error', 'double'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
  },
}
