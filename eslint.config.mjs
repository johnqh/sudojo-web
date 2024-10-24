// eslint.config.mjs

export default {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the version of React to use
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
    ],
    rules: {
        'react/prop-types': 'off', // Disable prop-types since we use TypeScript
        '@typescript-eslint/no-explicit-any': 'warn', // Example rule
    },
};
