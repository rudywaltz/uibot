module.exports = {
  "parserOptions": { "ecmaVersion": 2017 },
  "env": { "es6": true, "node": true },
  "extends": "eslint:recommended",
  "rules": {
    "eol-last": ["error", "always"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "strict": ["error", "global"]
  }
};
