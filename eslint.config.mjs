import globals from "globals";
import js from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: [
      "eslint.config.mjs",
      "**/build/*",
      "**/node_modules/*",
      "**/public/*",
    ],
    languageOptions: {
      ecmaVersion: "latest", // Sama dengan "ecmaVersion": "latest" di .eslintrc
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json", // Sesuaikan dengan file tsconfig-mu jika ada
      },
      globals: globals.node,
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...js.configs.recommended.rules, // Gunakan aturan JavaScript yang direkomendasikan
      ...typescriptPlugin.configs.recommended.rules, // Gunakan aturan TypeScript yang direkomendasikan
    },
  },
];
