import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default tseslint.config({
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ["**/*.{ts,tsx,js,jsx}"],
        languageOptions: {
            ecmaVersion: 2020,
        },
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            semi: ["error", "always"],
            indent: ["error", 4],
            "prettier/prettier": [
                "error",
                {
                    semi: true,
                    tabWidth: 4,
                    useTabs: false,
                },
            ],
        },
    },
);
