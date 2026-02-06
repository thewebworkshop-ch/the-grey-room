// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";

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

  // Security plugin (detects potential security issues)
  security.configs.recommended,

  // SonarJS plugin (code smells and bugs detection)
  sonarjs.configs.recommended,

  // Prettier config (disables ESLint rules that conflict with Prettier)
  eslintConfigPrettier,

  // Custom rules
  {
    rules: {
      // Additional strict rules for professional code quality
      "no-console": ["error", { allow: ["warn", "error"] }],
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
      // Swiss precision: no ambiguity with == vs ===
      eqeqeq: ["error", "always"],
      // Ban @ts-ignore, force proper type resolution
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": true,
          "ts-nocheck": true,
          "ts-expect-error": "allow-with-description",
        },
      ],
      // Security: disable object-injection for typed access (false positives with TypeScript)
      "security/detect-object-injection": "off",
      // Accessibility: upgrade jsx-a11y rules to error (plugin already loaded by Next.js)
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/html-has-lang": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/no-noninteractive-element-interactions": "error",
      "jsx-a11y/no-noninteractive-tabindex": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/no-static-element-interactions": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/tabindex-no-positive": "error",
    },
  },

  // Storybook config files - disable task comment rule
  {
    files: [".storybook/**/*.ts", ".storybook/**/*.tsx"],
    rules: {
      "sonarjs/todo-tag": "off",
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
    // Static files (including MSW worker):
    "public/**",
  ]),
]);

export default eslintConfig;
