// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  // Next.js configurations
  ...nextVitals,
  ...nextTs,

  // Storybook configuration
  ...storybook.configs["flat/recommended"],

  // Prettier config (disables ESLint rules that conflict with Prettier)
  eslintConfigPrettier,

  // Custom rules
  {
    rules: {
      // Additional strict rules for professional code quality
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": "off", // Turned off in favor of TypeScript's check
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "prefer-const": "error",
      "no-var": "error",
    },
  },

  // Override default ignores of eslint-config-next
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    // Generated code:
    "src/generated/**",
  ]),
]);

export default eslintConfig;
