import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginNext from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";


export default defineConfig([
    {
        ignores: ["**/types/**"],
    },
    { 
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        extends: [
            "js/recommended",
        ],
        plugins: {
            '@next/next': pluginNext, js
        },
        rules: {
            semi: "error",
            indent: "error",
        },
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
]);
