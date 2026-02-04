import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{
		ignores: ["**/out", ".next/*"]
		// ,files: ["**/*.{js,mjs,cjs,ts}"]
	},
	...compat.extends(
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
	),
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		plugins: {
			react,
			"@typescript-eslint": typescriptEslint,
			"@next/next": nextPlugin,
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: 12,
			sourceType: "module",

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		rules: {
			"react/react-in-jsx-scope": "off",

			"react/jsx-filename-extension": [1, {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			}],

			"@typescript-eslint/no-explicit-any": "off",

			// Next.js recommended rules
			"@next/next/no-html-link-for-pages": "off",
			"@next/next/no-img-element": "off",
		},
		settings: {
			react: {
				version: "detect", // React version. "detect" automatically picks the version you have installed.
				// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
				// Defaults to the "defaultVersion" setting and warns if missing, and to "detect" in the future
			}
		}
	}
];