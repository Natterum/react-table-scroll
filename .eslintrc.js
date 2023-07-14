module.exports = {
    plugins: ['@typescript-eslint'],
    extends: 'next/core-web-vitals',
    rules: {
        'react/no-unescaped-entities': 'off',
        '@next/next/no-img-element': 'off',
        'react/display-name': 'off',
        'prefer-const': 'error',
        '@typescript-eslint/no-unused-vars': 'error'
    }
};
