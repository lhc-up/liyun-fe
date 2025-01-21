export default {
    presets: [
        [
            '@babel/preset-env',
            {
                'useBuiltIns': 'usage',
                'corejs': 3,
                'modules': false
            }
        ]
    ],
    plugins: [
        '@babel/syntax-dynamic-import',
        '@babel/proposal-function-bind',
        '@babel/plugin-proposal-class-properties'
    ]
}