module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
};
