/**
 * 公共配置
 */
const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { isVue2 } = require('vue-demi');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

const devMode = process.env.NODE_ENV === "development";

module.exports = {
    // 加载器
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: `vue-loader${isVue2 ? 2 : 3}`
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                        },
                    },
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                        },
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            // 关闭ts-loader的类型检查，类型检查由 fork-ts-checker-webpack-plugin 插件执行
                            transpileOnly: true,
                            happyPackMode: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? "style-loader" : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    devMode ? "style-loader" : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    "postcss-loader",
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
                type: "asset/resource",
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },
        ]
    },
    resolve: {
        extensions: [".vue", ".ts", ".js", ".json", ".tsx"],
        fallback: {
            url: require.resolve("url"),
        },
        alias: {
            '@': resolve('src')
        }
    },
    optimization: {
        minimize: false,
        minimizer: [],
    },
    externals: ['vue', 'vue-demi'],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.VERSION': `'${pkg.version}'`
        }),
        new MiniCssExtractPlugin({
            filename: `[name].css`,
            chunkFilename: `[name].css`,
            ignoreOrder: true,
        }),
    ]
};
