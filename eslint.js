/**
 * @file ESLint Configuring
 * @description
 * Please visit [ESLint Rules]{@link https://eslint.org/docs/rules/}
 */

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    globals: {
        "$": true,
    },
    env: {
        browser: true,
    },
    extends: ['eslint:recommended'],
    rules: {
        'no-debugger': 0,
        'no-console': 0,
        'linebreak-style': 0,
        'default-case': 1,
        'valid-jsdoc': 1,
        'no-caller': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-self-compare': 2,
        'no-template-curly-in-string': 2,
        'array-callback-return': 2,
        'consistent-return': 2,
        'no-empty-function': 2,
        'no-floating-decimal': 2,
        'no-duplicate-imports': 2,
        'no-with': 2,
        'block-scoped-var': 2,
        'eqeqeq': [2, 'always', { null: 'ignore' }],
        'no-eval': 2,
        'multiline-comment-style': [2, 'starred-block'],
        'no-multi-spaces': [2, { ignoreEOLComments: true, exceptions: { Property: true, BinaryExpression: false, VariableDeclarator: true, ImportDeclaration: true }}],
        'comma-spacing': [2, { before: false, after: true }],
        'array-bracket-spacing': [2, 'never'],
        'computed-property-spacing': [2, 'never'],
        'func-call-spacing': [2, 'never'],
        'function-paren-newline': [2, 'never'],
        'lines-around-comment': [2, { beforeBlockComment: true, beforeLineComment: true, allowClassStart: false }],
        'lines-between-class-members': [2, 'always'],
        'no-multiple-empty-lines': [2, { max: 2 }],
        'no-tabs': 2,
        'arrow-spacing': 2,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, 'never'],
        'spaced-comment': [2, 'always'],
        'indent': [2, 4],
        'semi': [2, 'always'],
        'semi-spacing': 2
    }
}
