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
 * ESLint Flat Config for TypeScript Libraries
 *
 * This configuration extends:
 * - Vercel Style Guide (Node & TypeScript)
 */
export default [
  ...compat.extends(
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
  ),
  {
    languageOptions: {
      parserOptions: {
        project,
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
  },
];
