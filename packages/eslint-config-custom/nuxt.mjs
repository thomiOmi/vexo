import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const project = resolve(process.cwd(), "tsconfig.json");

export default [
  // ...compat.extends("@nuxtjs/eslint-config-typescript"),
  {
    languageOptions: {
      parserOptions: {
        sourceType: "module",
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
    ignores: ["node_modules/", "dist/", ".nuxt/", ".output/", "nuxt.config.ts"],
  },
];
