module.exports = {
  "env": { "es6": true, "node": true },
  "extends": "eslint:recommended",
  "globals": {
    "describe": false,
    "expect": true,
    "afterEach": true,
    "it": false,
    "jest": true
  },
  "parserOptions": { "ecmaVersion": 2017 },
  "rules": {
    "eol-last": ["error", "always"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "strict": ["error", "global"]
  }
};
