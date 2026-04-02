import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import typescriptParser from '@typescript-eslint/parser';

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  { files: ["**/*.json"], plugins: { json }, language: "json/json" },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc" },
  { files: ["**/*.json5"], plugins: { json }, language: "json/json5" },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm" },
  { files: ["**/*.css"], plugins: { css }, language: "css/css" },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      // It's also a good idea to set the ecmaVersion and sourceType
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    // ... other settings (plugins, rules)
  }
]);
