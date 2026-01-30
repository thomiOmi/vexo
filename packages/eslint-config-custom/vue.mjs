import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const project = resolve(process.cwd(), "tsconfig.json");

/**
 * ESLint Flat Config for Vue Applications
 *
 * This configuration extends:
 * - Vercel Style Guide (Browser)
 * - @vue/eslint-config-typescript
 */
export default [
  ...compat.extends(
    "@vercel/style-guide/eslint/browser",
    "@vue/eslint-config-typescript",
  ),
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
    ignores: ["node_modules/", "dist/"],
    rules: {
      "import/no-default-export": "off",
      "vue/multi-word-component-names": "off",
    },
  },
];
