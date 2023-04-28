// eslint-disable-next-line
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-tag-spacing": 2,
    "no-extra-boolean-cast": "off",
    "semi": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "no-case-declarations": "off",
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": true
      }
    ],
    "react/react-in-jsx-scope": "off",
    "comma-dangle": [
      "error",
      "never"
    ],
    "react/no-unescaped-entities": "off"
  }
};
