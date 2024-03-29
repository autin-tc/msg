module.exports = {
    root: true,
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:sonarjs/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['json', 'react', '@typescript-eslint', 'sonarjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        // debugLevel: true,
        createDefaultProgram: true,
    },
    globals: {
        document: true,
        window: true,
        fetch: false,
        localStorage: true,
    },
    rules: {
        indent: 'off',
        'react/jsx-indent': 'off', // prettier
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-shadow': 2,
        'react/jsx-one-expression-per-line': 0,
        'no-shadow': 0,
        '@typescript-eslint/naming-convention': 0,
        'react-hooks/exhaustive-deps': 1,
        'sonarjs/no-duplicate-string': 1,
        'sonarjs/cognitive-complexity': 1,
        'react/prop-types': 1,
        'react/no-array-index-key': 1,
        'react/forbid-prop-types': 1,
        'no-empty': [
            0,
            {
                allowEmptyCatch: true,
            },
        ],
        'no-plusplus': 0,
        'no-param-reassign': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'linebreak-style': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/require-default-props': 0,
        'no-bitwise': [
            'error',
            {
                allow: ['~'],
            },
        ],
        'max-len': [
            'warn',
            {
                code: 120,
                tabWidth: 2,
                comments: 120,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'react/jsx-filename-extension': 0,
        'react/jsx-props-no-spreading': 0,
        camelcase: 0,
    },
    overrides: [
        {
            files: ['**/*.jsx', '**/*.js'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 0,
            },
        },
    ],
};
