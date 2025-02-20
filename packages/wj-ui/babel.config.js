module.exports = api => {
    api.cache(true);
    return {
        "presets": [
            ["@babel/preset-env", {
                "useBuiltIns": "usage",
                "corejs": "3.37.1",
                "targets": {
                    "chrome": 49
                }
            }]
        ],
        "plugins": [
            "@babel/syntax-dynamic-import",
            "@babel/proposal-function-bind",
            "@babel/plugin-transform-class-properties"
        ]
    }
}
