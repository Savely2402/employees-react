import js from '@eslint/js'
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,

    { ignores: ['node_modules'] },
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,

    {
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
]
