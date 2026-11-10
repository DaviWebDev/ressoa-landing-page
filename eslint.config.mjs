import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import security from "eslint-plugin-security";
import globals from "globals";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  security.configs.recommended,
  {
    files: ["astro.config.mjs", "eslint.config.mjs", ".prettierrc.cjs"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astro.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
      globals: { ...globals.browser },
    },
  },
  { ignores: ["dist/", ".astro/"] },
];
