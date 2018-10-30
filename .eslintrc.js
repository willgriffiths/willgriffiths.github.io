module.exports = {
  parser: "babel-eslint",
  rules: {
    strict: 0
  },
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  settings: {
    "import/core-modules": ["react", "prop-types", "graphql"]
  },
  env: {
    browser: true,
    jest: true
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js"]
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "react/no-danger": "off",
    "linebreak-style": "off",
    "implicit-arrow-linebreak": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-unused-vars": [
      "error",
      {
        args: "none"
      }
    ]
  }
};
